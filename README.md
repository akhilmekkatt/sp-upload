# Description:

The SharePoint File Upload Module is a Node.js library designed to streamline the process of uploading files to SharePoint document libraries. This module offers a simple and reusable solution for integrating file upload functionality into Node.js applications targeting SharePoint environments.

## Key Features:

- Simplified Integration: Easily incorporate file upload capabilities into Node.js projects interacting with SharePoint.
- Flexible Configuration: Customizable settings for SharePoint site URL, library name, and access token.
- Error Handling: Robust error handling to ensure smooth operation and clear feedback on upload failures.
- Encapsulation: Class-based structure encapsulates SharePoint file upload functionality for reusability and maintainability.
- Dependencies: Utilizes Axios for HTTP requests and fs module for file operations.

```
const SharePointFileUploader = require('./index');

// SharePoint credentials and details
const username = 'your_username';
const password = 'your_password';
const siteUrl = 'https://your-sharepoint-site.com';
const libraryName = 'YourLibraryName';

// Create an instance of the uploader
const uploader = new SharePointFileUploader(username, password, siteUrl, libraryName);

// Array of file details (file paths and names)
const files = [
    { filePath: '/path/to/your/file1.txt', fileName: 'file1.txt' },
    { filePath: '/path/to/your/file2.txt', fileName: 'file2.txt' },
    // Add more files as needed
];

// Example usage: Upload multiple files
uploader.uploadFiles(files)
    .then(() => {
        console.log('Files uploaded successfully');
    })
    .catch((error) => {
        console.error('Upload failed:', error);
    });


```

Contributing: Contributions are welcome! Feel free to fork the repository, make enhancements, and submit pull requests.

License: This project is licensed under the MIT License.

Issues: Report any issues or suggestions by creating an issue.
