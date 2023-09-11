const http = require("http");
const port = 8000;
const server = http.createServer((req, res) => {
  res.write("This is coming from Node.js Server....");
  if (req.url == "/first") {
    return res.end("This is from first URL");
  }
  res.end("This is from Default URL...");
});

server.listen(port, (err) => {
  if (err) {
    console.log("Error in firing the server");
  } else {
    console.log(`Server is up with Port :: ${port}`);
  }
});
