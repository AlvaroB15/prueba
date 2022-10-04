"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestListener = void 0;
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
exports.requestListener = requestListener;
