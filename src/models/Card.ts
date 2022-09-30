import { Schema, model } from "mongoose";
import { ICard } from "../interfaces/ICard";

const cardSchema = new Schema<ICard>({
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
export const Card = model<ICard>("Card", cardSchema);