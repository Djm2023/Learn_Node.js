const http = require('http');
const port = 8000;
const server = http.createServer((req,res) =>{

    if(req.method == 'POST'){
        let body = '';
        req.on("data" , (chunk) => {
            body += chunk.toString();
        });
        // To know the data received by server
        req.on("end" , () =>{
            console.log(body);
            res.end('Data has been received...🚀');
            console.log('Data has been received...🚀');
        })
    }else{
    res.end('welcome to Node.js');
    }
});

server.listen(port , (err) => {
    if(err){
        console.log('Error in firing the server');
    }else{
        console.log(`Server is up with Port :: ${port}`);
    }
})