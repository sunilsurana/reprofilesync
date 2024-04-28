// write a hello world test to file tmp.txt using fs writefilsync api
const fs = require('fs');

const markerFile = 'marker.txt';
const outputfile = 'file.txt';

while (true) {
    if (fs.existsSync(markerFile)) {
        try
        {
            const content = fs.readFileSync(outputfile, 'utf8');
            console.log(content);
            return;
        }
        catch (e)
        {   
        }
    }
}