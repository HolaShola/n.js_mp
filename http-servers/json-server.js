const http = require('http');

const server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/json"});

    const product = {
        id: 1,
        name: 'Supreme T-Shirt',
        brand: 'Supreme',
        price: 99.99,
        options: [
            { color: 'blue' },
            { size: 'XL' }
        ]
    }

    const productToJSON = JSON.stringify(product);

    response.end(productToJSON);

})

server.listen(8080);
console.log("server is listening");