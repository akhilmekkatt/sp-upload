const axios = require("axios");
const fs = require("fs");
const path = require("path");

class SharePointFileUploader {
  constructor(siteUrl, libraryName, accessToken) {
    this.siteUrl = siteUrl;
    this.libraryName = libraryName;
    this.accessToken = accessToken;
  }

  async uploadFile(filePath, fileName) {
    try {
      const fileBuffer = fs.readFileSync(filePath);

      const url = `${this.siteUrl}/_api/web/getfolderbyserverrelativeurl('${this.libraryName}')/files/add(url='${fileName}',overwrite=true)`;

      const response = await axios({
        method: "POST",
        url: url,
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
          "Content-Type": "application/json",
        },
        data: fileBuffer,
        responseType: "arraybuffer",
      });

      if (response.status === 200 || response.status === 201) {
        return "File uploaded successfully";
      } else {
        throw new Error(`Error uploading file: ${response.statusText}`);
      }
    } catch (error) {
      throw new Error(`Upload failed: ${error.message}`);
    }
  }
}

module.exports = SharePointFileUploader;
