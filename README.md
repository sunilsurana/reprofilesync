# reprofilesync
Reproing file sync issue. 
System to use to repro this issue
- Azure windows 2022 server image
- SKU Standard D8ads v5 (8 vcpus, 32 GiB memory)

# Steps to repro issue
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
