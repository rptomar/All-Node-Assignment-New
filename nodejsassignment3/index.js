const http = require("http");

const fs = require("fs");



fs.writeFileSync("index.html", `<h1>Hello world </h1> 
<p> This is Rohit Pal...</p>`);

const server = http.createServer((req, res) => {
    fs.readFile("index.html", (err, data) =>{
      res.writeHead(200, {"content-type" : "text/html"});
      res.write(data);
      res.end();
    })
})
server.listen(5000, ()=>console.log("server running at 5000"));