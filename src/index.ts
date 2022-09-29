// @google-cloud/functions-framework
// El cual esta basado en express.js

import http from 'http';

//Settings
const host = 'localhost';
const port = 4000;

// middlewares

//Routes


//create a server
const requestListener = function (req: any, res: any) {
    res.setHeader("Content-Type", "application/json");
    switch (req.url) {
        case "/tokenizar":
            res.writeHead(200);
            res.write('Entro a /books')
            res.end();
            break
        case "/get-data-card":
            res.writeHead(200);
            res.write('Entro a /authors')
            res.end();
            break
        default:
            res.writeHead(404);
            res.end(JSON.stringify({ error: "La uri consultada no existe" }));
    }
}

const server = http.createServer(requestListener);

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
}); 