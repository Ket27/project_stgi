const fs = require('fs');
const htmlFilePath = 'backend/example.html';
const cheerio = require('cheerio');

// Load your HTML content
const htmlContent = fs.readFileSync('example.html', 'utf8');

// Parse HTML with Cheerio
const $ = cheerio.load(htmlContent);

// Extract style elements
const styleTags = [];

$('style').each((index, element) => {
  styleTags.push($(element).html());
});

// Output the contents of the style tags
styleTags.forEach((styleContent, index) => {
//   console.log(Style tag #${index + 1}:);
  console.log(styleContent);
  console.log('\n');
});
