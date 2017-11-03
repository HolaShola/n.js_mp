const http = require('http');
const url = require('url');

const server = http.createServer((request, response) => {
    const requestUrlParsed = url.parse(request.url, true);
    
    if (requestUrlParsed.pathname === '/echo' && requestUrlParsed.query.message) {
        response.end(requestUrlParsed.query.message);
    } else {
        response.statusCode = 404;
        response.end('Page not found');
    } 
});

server.listen(8080);
console.log("server is listening");