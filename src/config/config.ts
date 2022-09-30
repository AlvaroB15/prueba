import { config } from "dotenv";

config();

export const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/delfosti";

export const PORT_APP = process.env.PORT_APP || 4000;
export const HOST_APP = process.env.HOST_APP || "localhost";