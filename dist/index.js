"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const config_1 = require("./config/config");
const app_1 = require("./app");
const server = http_1.default.createServer(app_1.requestListener);
server.listen(config_1.PORT_APP, () => {
    console.log(`Server is running on http://${config_1.HOST_APP}:${config_1.PORT_APP}`);
});
