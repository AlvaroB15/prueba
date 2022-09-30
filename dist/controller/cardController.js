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
exports.getDataCard = void 0;
const Card_1 = require("../models/Card");
const validators_1 = require("../utils/validators");
const getDataCard = (bodyString, tokenAuth = "") => __awaiter(void 0, void 0, void 0, function* () {
    let message = "";
    let data;
    let error = false;
    const tokenGenerado = JSON.parse(bodyString);
    const valToken = (0, validators_1.validarToken)(tokenGenerado.token);
    const valTokenAuth = (0, validators_1.validateTokenAuth)(tokenAuth.toString());
    try {
        if (valToken != "") {
            throw valToken;
        }
        if (valTokenAuth != "") {
            throw valTokenAuth;
        }
        data = yield Card_1.Card.findOne({ token: tokenGenerado.token })
            .select("-_id card_number expiration_month expiration_year email token");
        if (data !== null) {
            message = `se encontro correctamente el registro del token ${tokenGenerado.token}`;
        }
        else {
            message = "No se encontro el token, recuerde que cada 15 minutos se borran los registros, intente generar un token de nuevo";
            data = [];
        }
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
exports.getDataCard = getDataCard;
