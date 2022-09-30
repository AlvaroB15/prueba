"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HOST_APP = exports.PORT_APP = exports.MONGODB_URI = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
exports.MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/delfosti";
exports.PORT_APP = process.env.PORT_APP || 4000;
exports.HOST_APP = process.env.HOST_APP || "localhost";
