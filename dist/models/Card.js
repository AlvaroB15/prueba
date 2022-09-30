"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
const mongoose_1 = require("mongoose");
const cardSchema = new mongoose_1.Schema({
    card_number: {
        type: Number,
        required: true,
    },
    cvv: {
        type: Number,
        required: true,
    },
    expiration_month: {
        type: String,
        required: true,
    },
    expiration_year: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    expireAt: {
        type: Date,
        default: Date.now,
        index: { expires: "15m" },
    },
    token: {
        type: String,
    },
});
// Creando el modelo
exports.Card = (0, mongoose_1.model)("Card", cardSchema);
