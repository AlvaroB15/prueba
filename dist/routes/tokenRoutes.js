"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleCard = exports.handleToken = void 0;
require("../config/config");
const createToken_1 = require("../utils/createToken");
const tokenController_1 = require("../controller/tokenController");
const cardController_1 = require("../controller/cardController");
const handleToken = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.method === "POST") {
        funcionAreutilizar(req, res, "handleToken");
    }
    else {
        res.writeHead(404);
        res.write(JSON.stringify({ error: "No hay request GET para este uri" }));
        res.end();
    }
});
exports.handleToken = handleToken;
const handleCard = (req, res) => {
    if (req.method === "GET") {
        funcionAreutilizar(req, res, "handleCard");
    }
    else {
        res.writeHead(404);
        res.write("No hay request POST para este uri");
        res.end();
    }
};
exports.handleCard = handleCard;
const funcionAreutilizar = (req, res, metodo) => {
    const tokenAuth = req.headers.token;
    const body = [];
    let bodyString = "";
    req.on("error", (err) => {
        console.error(err);
    }).on("data", (chunk) => {
        body.push(chunk);
    }).on("end", () => __awaiter(void 0, void 0, void 0, function* () {
        bodyString = Buffer.concat(body).toString();
        let dataResponse = {
            message: "",
            data: {
                card_number: 0,
                cvv: 0,
                expiration_month: "",
                expiration_year: "",
                email: ""
            },
            error: false,
        };
        if (metodo === "handleToken") {
            const tokenGenerado = (0, createToken_1.createToken)();
            dataResponse = yield (0, tokenController_1.postDataCardGenerateToken)(bodyString, tokenGenerado, tokenAuth);
        }
        if (metodo === "handleCard") {
            dataResponse = yield (0, cardController_1.getDataCard)(bodyString, tokenAuth);
        }
        res.writeHead(200, { "Content-Type": "application/json" });
        if (!dataResponse.error) {
            res.write(JSON.stringify({
                message: dataResponse.message,
                data: dataResponse.data
            }));
            res.end();
        }
        else {
            res.write(JSON.stringify({
                error: { message: dataResponse.message }
            }));
            res.end();
        }
    }));
};
