const axios = require("axios");
const spauth = require("node-sp-auth");
const fs = require("fs");

class SharePointFileUploader {
  constructor(username, password, siteUrl, libraryName) {
    this.username = username;
    this.password = password;
    this.siteUrl = siteUrl;
    this.libraryName = libraryName;
  }

  async uploadFiles(files) {
    try {
      const creds = {
        username: this.username,
        password: this.password,
        siteUrl: this.siteUrl,
      };

      const auth = await spauth.getAuth(creds);

      const headers = {
        Authorization: auth.headers["Authorization"],
        Accept: "application/json;odata=verbose",
        "Content-Type": "application/json;odata=verbose",
      };

      for (const file of files) {
        const fileBuffer = fs.readFileSync(file.filePath);

        const url = `${this.siteUrl}/_api/web/getfolderbyserverrelativeurl('${this.libraryName}')/files/add(url='${file.fileName}',overwrite=true)`;

        const response = await axios({
          method: "POST",
          url: url,
          headers: headers,
          data: fileBuffer,
          responseType: "arraybuffer",
        });

        if (response.status === 200 || response.status === 201) {
          console.log(`File '${file.fileName}' uploaded successfully`);
        } else {
          console.error(
            `Error uploading file '${file.fileName}':`,
            response.statusText
          );
        }
      }
    } catch (error) {
      throw new Error(`Upload failed: ${error.message}`);
    }
  }
}

module.exports = SharePointFileUploader;
