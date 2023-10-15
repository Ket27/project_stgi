const htmlToDocx = require("html-docx-js");
const fs = require("fs");
// const ex = require("./main");
const htmlFilePath = 'example.html';

// Your HTML content
// const html = "<h1>Hello World</h1><p>This is a sample HTML document.</p>";

fs.readFile(htmlFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the HTML file:', err);
    } else {
      // 'data' now contains the contents of the HTML file as a string
      console.log('HTML content as a string:',data);
      const docx = htmlToDocx.asBlob(data);
      fs.writeFileSync("output.docx", docx, "binary");
    }
  });

// Convert HTML to DOCX
// const docx = htmlToDocx(html)


// Save the DOCX content to a file
