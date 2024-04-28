# repro file read write concurrency issue
This repo creates a repro and fixed for file read write concurrency issue
System to use to repro this issue
- Codespace or Azure VM
- Issue may or may not be reproduced on local laptop

# Steps to repro issue
Create a codespace of this repo and execute belew steps
1. `rm -r file.txt`

    Clear any stale output file from previous runs
2. `node read.js`

    This will start reading for file.txt till the file is present. whenever file is present it will print file content and exit process

3. `node write.js`

    This will write some random content to file.txt so that read.js should print it

#### Expected result
- read.js should print read.txt contents

#### Actual result
- read.js prints blank content

# Steps to run fixed code
1. `rm -r file.txt`
2. `node read-fixed.js`
3. `node write-fixed.js`

#### Expected result
- read.js should print read.txt contents

#### Actual result
- read.js prints read.txt content
