const fs = require('fs');
const content = fs.readFileSync('read.txt', 'utf8');
const markerFile = 'marker.txt';
const outputfile = 'file.txt';
try
{
    fs.writeFileSync(outputfile, content, { encoding: 'utf8', flag: 'wx' });
    fs.closeSync(fs.openSync(markerFile, 'wx'));
} catch (error) {
    if (error.code === 'EEXIST') {
    } else {
      throw error;
    }
}


