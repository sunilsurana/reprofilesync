# reprofilesync
Reproing file sync issue. 
System to use to repro this issue
- Codespace or Azure VM
- Issue may or may not be reproduced in local laptop

# Steps to repro issue
Create a codespace of this repo
1. Execute node read.js
2. Execute node write.js

## Expected result
- read.js should print read.txt contents

## Actual result
- read.js prints blank content

## Steps to fix
1. Execute node read-fixed.js
2. Execute write-fixed.js

## Expected result
- read.js should print read.txt contents

## Actual result
- read.js prints read.txt content
