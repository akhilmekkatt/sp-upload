# Description:

The SharePoint File Upload Module is a Node.js library designed to streamline the process of uploading files to SharePoint document libraries. This module offers a simple and reusable solution for integrating file upload functionality into Node.js applications targeting SharePoint environments.

## Key Features:

* Simplified Integration: Easily incorporate file upload capabilities into Node.js projects interacting with SharePoint.
* Flexible Configuration: Customizable settings for SharePoint site URL, library name, and access token.
* Error Handling: Robust error handling to ensure smooth operation and clear feedback on upload failures.
* Encapsulation: Class-based structure encapsulates SharePoint file upload functionality for reusability and maintainability.
* Dependencies: Utilizes Axios for HTTP requests and fs module for file operations.

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

Contributing: Contributions are welcome! Feel free to fork the repository, make enhancements, and submit pull requests.

License: This project is licensed under the MIT License.

Issues: Report any issues or suggestions by creating an issue.
