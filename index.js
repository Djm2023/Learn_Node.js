/* CREATING A HTTP SERVER*/

/* Import HTTP Library/Module */

const http = require("http");

/* Defining Port */

const port = 8000;

/* Creating server */

const createServer = http.createServer((req, res) => {
  console.log("Node.js Server is established...");
});

createServer.listen(port ,(err) => {
 if(err){
    console.log("Error occured in establishing a server");
 }else{
    console.log(`Server is up with port::${port}`);
 }
})