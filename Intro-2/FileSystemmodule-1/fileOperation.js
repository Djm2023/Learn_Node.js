/*Import Filesystem Module */
const fs = require('fs');

// To read file content using blocking code::::

console.log("Starting to read....");

const buffer = fs.readFileSync('data.txt',{encoding:"utf-8"});

console.log(buffer);