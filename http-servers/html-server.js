const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/html"});
    const readFileToString = fs.readFileSync("./index.html", "utf8");
    const newReadFileToString = readFileToString.replace(/{message}/, 'real message text');

    response.end(newReadFileToString);

    const readStream = fs.createReadStream("./index.html");
    readStream.pipe(process.stdout);
})

server.listen(8080);
console.log("server is listening");