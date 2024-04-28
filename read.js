// write a hello world test to file tmp.txt using fs writefilsync api
const fs = require('fs');
const outputfile = 'file.txt';
while (true) {
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