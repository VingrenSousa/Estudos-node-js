"use strict";
const https = require('http');
const porta = 3000;
const serve = https.createServer((requeste:any, resposta:any) => {
    resposta.writeHead(200, {"Content-Type": "text/html" });
    resposta.write("<h2>ola mundo</h2>");
    resposta.write("<p>"+requeste.url+"</p>")
    resposta.end()
}).listen(3000);
serve;
