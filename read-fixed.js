// write a hello world test to file tmp.txt using fs writefilsync api
const fs = require('fs');
while (true) {
    try
    {
        const content = fs.readFileSync('tmp5.txt', 'utf8');
        console.log(content);
        return;
    }
    catch (e)
    {   
    }
}