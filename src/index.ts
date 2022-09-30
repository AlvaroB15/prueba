import http, { IncomingMessage, ServerResponse } from 'http';
import { HOST_APP, PORT_APP } from './config/config';
import { handleCard, handleToken } from './routes/tokenRoutes';
import './config/mongoose';

const requestListener = function (req: IncomingMessage, res: ServerResponse) {
    res.setHeader("Content-Type", "application/json");
    switch (req.url) {
        case "/token":
            handleToken(req, res);
            break
        case "/card":
            handleCard(req, res);
            break
        default:
            res.writeHead(404);
            res.end(JSON.stringify({ error: "La uri consultada no existe" }));
    }
}

const server = http.createServer(requestListener);

server.listen(PORT_APP, () => {
    console.log(`Server is running on http://${HOST_APP}:${PORT_APP}`);
}); 
