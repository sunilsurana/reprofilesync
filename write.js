const fs = require('fs');
const content = fs.readFileSync('read.txt', 'utf8');

fs.writeFileSync('file.txt', content, 'utf8');

