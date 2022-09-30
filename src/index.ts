import { IncomingMessage, ServerResponse } from "http";
import { handleCard, handleToken } from "./routes/tokenRoutes";
import "./config/mongoose";

export const requestListener = function (req: IncomingMessage, res: ServerResponse) {
    res.setHeader("Content-Type", "application/json");
    switch (req.url) {
        case "/token":
            handleToken(req, res);
            break;
        case "/card":
            handleCard(req, res);
            break;
        default:
            res.writeHead(404);
            res.end(JSON.stringify({ error: "La uri consultada no existe" }));
    }
};