import "../config/config";
import { IncomingMessage, ServerResponse } from "http";
import { createToken } from "../utils/createToken";
import { postDataCardGenerateToken } from "../controller/tokenController";
import { getDataCard } from "../controller/cardController";

export const handleToken = async (req: IncomingMessage, res: ServerResponse) => {

    if (req.method === "POST") {
        funcionAreutilizar(req, res, "handleToken");
    } else {
        res.writeHead(404);
        res.write(JSON.stringify({ error: "No hay request GET para este uri" }));
        res.end();
    }
};

export const handleCard = (req: IncomingMessage, res: ServerResponse) => {

    if (req.method === "GET") {
        funcionAreutilizar(req, res, "handleCard");
    } else {
        res.writeHead(404);
        res.write("No hay request POST para este uri");
        res.end();
    }
};

const funcionAreutilizar = (req: IncomingMessage, res: ServerResponse, metodo: string) => {

    const tokenAuth = req.headers.token;
    const body: any = [];
    let bodyString = "";

    req.on("error", (err) => {
        console.error(err);
    }).on("data", (chunk) => {       
        body.push(chunk);
    }).on("end", async () => {

        bodyString = Buffer.concat(body).toString();
        let dataResponse: any;

        if (metodo === "handleToken") {
            const tokenGenerado = createToken();
            dataResponse = await postDataCardGenerateToken(bodyString, tokenGenerado, tokenAuth);
        }

        if (metodo === "handleCard") {
            dataResponse = await getDataCard(bodyString, tokenAuth);
        }

        res.writeHead(200, { "Content-Type": "application/json" });

        if (!dataResponse.error) {
            res.write(JSON.stringify({
                message: dataResponse.message,
                data: dataResponse.data
            }));
            res.end();
        } else {
            res.write(JSON.stringify({
                error: { message: dataResponse.message }
            }));
            res.end();
        }

    });
};