"use strict";
// @google-cloud/functions-framework
// El cual esta basado en express.js
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const host = 'localhost';
const port = 3000;
//create a server object:
const requestListener = function (req, res) {
    res.setHeader("Content-Type", "application/json");
    switch (req.url) {
        case "/books":
            res.writeHead(200);
            res.write('Entro a /books');
            res.end();
            break;
        case "/authors":
            res.writeHead(200);
            res.write('Entro a /authors');
            res.end();
            break;
        default:
            res.writeHead(404);
            res.end(JSON.stringify({ error: "La uri consultada no existe" }));
    }
};
const server = http_1.default.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
// http.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/html' }); // http header
//     var url = req.url;
//     if (url === '/about') {
//         res.write('<h1>about us page<h1>'); //write a response
//         res.end(); //end the response
//     } else if (url === '/contact') {
//         res.write('<h1>contact us page<h1>'); //write a response
//         res.end(); //end the response
//     } else {
//         res.write('<h1>Hello World!<h1>'); //write a response
//         res.end(); //end the response
//     }
// }).listen(3000, function () {
//     console.log("server start at port 3000"); //the server object listens on port 3000
// });
