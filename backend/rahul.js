const fs = require('fs');
const mammoth = require('mammoth');

// Read the HTML and CSS files
const htmlContent = fs.readFileSync('example.html', 'utf8');
const cssContent = fs.readFileSync('style.css', 'utf8');

// Define options for the conversion
const options = {
  styleMap: [
    "p[style-name='paragraph'] => p",
    "p[style-name='heading-1'] => h1",
    "p[style-name='heading-2'] => h2",
    "p[style-name='heading-3'] => h3",
    "p[color='red'] => span.red-text",
  ],
};

// Perform the conversion
mammoth.convertToDocx({ path: 'example.html' }, options)
  .then((result) => {
    const buffer = result.value;
    fs.writeFileSync('output.docx', buffer);
    console.log('DOCX file created from HTML with external CSS.');
  })
  .catch((err) => {
    console.error('Error:', err);
});