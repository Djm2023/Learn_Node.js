/*Import Filesystem Module */
const fs = require('fs');

/*Append Data to existing file or if file doesnot exists then it will create a file */
fs.appendFileSync('employee1.txt' ,"Name:Devjyoti mukherjee , Learn To append data to a text file");

/** Delete a file */

fs.unlink("employee1.txt");