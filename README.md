# sp-upload
sp-upload
Usage:
You can use this module in other parts of your Node.js application as follows:
```
const SharePointFileUploader = require('sp-upload');

// Replace with your SharePoint details and access token
const siteUrl = 'https://your-sharepoint-site.com';
const libraryName = 'YourLibraryName';
const accessToken = 'YOUR_ACCESS_TOKEN';

const uploader = new SharePointFileUploader(siteUrl, libraryName, accessToken);

// Example usage: Upload a file
const filePath = '/path/to/your/file.txt';
const fileName = 'file.txt';

uploader.uploadFile(filePath, fileName)
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    });
```

Remember to replace 'https://your-sharepoint-site.com', 'YourLibraryName', and 'YOUR_ACCESS_TOKEN' with your actual SharePoint site URL, library name, and access token respectively.

This basic module uses Axios for making HTTP requests and the fs module to read the file content. It encapsulates the SharePoint file upload functionality, allowing you to reuse it across your Node.js application.
