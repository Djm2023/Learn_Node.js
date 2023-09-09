/*Import http module*/
const http = require('http');

/*Defining Port*/
const port = 3001;

/*Creating http server*/
const createServer = http.createServer((req,res) => {
    if(req.url === '/user'){
        res.end("User Page")
    }else{
        res.end("Homepage");
    }
})

/**Listening server */
createServer.listen(port,(err) => {
    if(err){
        console.log("Error occured in establishing a server");
     }else{
        console.log(`Server is up with port::${port}`);
     }
})

