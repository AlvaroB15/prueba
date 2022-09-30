"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const config_1 = require("./config/config");
const tokenRoutes_1 = require("./routes/tokenRoutes");
require("./config/mongoose");
const requestListener = function (req, res) {
    res.setHeader("Content-Type", "application/json");
    switch (req.url) {
        case "/token":
            (0, tokenRoutes_1.handleToken)(req, res);
            break;
        case "/card":
            (0, tokenRoutes_1.handleCard)(req, res);
            break;
        default:
            res.writeHead(404);
            res.end(JSON.stringify({ error: "La uri consultada no existe" }));
    }
};
const server = http_1.default.createServer(requestListener);
server.listen(config_1.PORT_APP, () => {
    console.log(`Server is running on http://${config_1.HOST_APP}:${config_1.PORT_APP}`);
});
