const mammoth = require('mammoth');
const fs = require('fs');

const options = {
  styleMap: [
    'p[style-name=\'heading\'] => h1:fresh',
    'p[style-name=\'paragraph\'] => p:fresh',
  ],
};

mammoth.convertToHtml({ path: 'convert.html' }, options)
  .then(function (result) {
    return mammoth.convertToDocx({ value: result.value });
  })
  .then(function (result) {
    const buffer = result.buffer;
    fs.writeFileSync('output.docx', buffer);
    console.log('DOCX file created.');
  })
  .catch(function (err) {
    console.error(err);
});