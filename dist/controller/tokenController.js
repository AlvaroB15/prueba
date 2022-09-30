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
exports.postDataCardGenerateToken = void 0;
const Card_1 = require("../models/Card");
const validators_1 = require("../utils/validators");
const postDataCardGenerateToken = (body, tokenGenerado, tokenAuth = "") => __awaiter(void 0, void 0, void 0, function* () {
    let message = "";
    let data;
    let error = false;
    const bodyJson = JSON.parse(body);
    bodyJson["token"] = tokenGenerado;
    const dataValidator = (0, validators_1.validatorCard)(bodyJson);
    const valTokenAuth = (0, validators_1.validateTokenAuth)(tokenAuth.toString());
    try {
        if (dataValidator != "") {
            throw dataValidator;
        }
        if (valTokenAuth != "") {
            throw valTokenAuth;
        }
        const card = new Card_1.Card(bodyJson);
        data = yield card.save();
        message = "se registro correctamente";
    }
    catch (err) {
        message = "" + err;
        error = true;
        data = [];
    }
    const dataSent = {
        message,
        data,
        error
    };
    return dataSent;
});
exports.postDataCardGenerateToken = postDataCardGenerateToken;
