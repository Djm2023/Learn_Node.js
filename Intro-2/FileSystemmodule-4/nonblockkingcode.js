/* Reading the Data using Non-blocking Code  */

/*Import Filesystem Module */
const fs = require('fs');

// Reading file Asynchronously
const data = fs.readFile("data.txt",(err , data) => {
 if(err){
    console.log('Error in Loading Data');
 }else{
    console.log(data.toString());
 }
})
