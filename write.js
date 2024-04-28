const fs = require('fs');
const content = fs.readFileSync('read.txt', 'utf8');
const outputfile = 'file.txt';

fs.writeFileSync(outputfile, content, 'utf8');

