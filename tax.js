// import http module for web server
let http = require('http');

// import url module to parse url params
let url = require('url');

// added lib for money format
let accounting = require('accounting');

// start server & listen for http request events
http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h2>Tax Calculator</h2>');

    // use url module to get url param e.g. tax?subtotal=xxx
    let query = url.parse(req.url, true).query;
    let subtotal = parseFloat(query.subtotal);
    let tax = subtotal * 0.13;
    let total = tax + subtotal;

    res.write(`<h2>Sub-Total: ${accounting.formatMoney(subtotal)}</h2>
        <h2>Tax: ${tax}</h2>
        <h2>Total: ${total}</h2>`);

    res.end();
}).listen(3000);

console.log('Web server running');