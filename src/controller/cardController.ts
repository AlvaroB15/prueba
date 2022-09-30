import { ICard, IRequest } from "../interfaces/ICard";
import { Card } from "../models/Card";
import { validarToken, validateTokenAuth } from "../utils/validators";

export const getDataCard = async (bodyString: string, tokenAuth :string | string[] | undefined="") => {

    let message = "";
    let data: ICard | [] | null;
    let error = false;
    const tokenGenerado = JSON.parse(bodyString);
    const valToken = validarToken(tokenGenerado.token);
    const valTokenAuth = validateTokenAuth(tokenAuth.toString());

    try {

        if (valToken != "") { throw valToken; }
        if (valTokenAuth != "") { throw valTokenAuth; }
        data = await Card.findOne({ token: tokenGenerado.token })
            .select("-_id card_number expiration_month expiration_year email token");

        if (data !== null) {
            message = `se encontro correctamente el registro del token ${tokenGenerado.token}`;
        } else {
            message = "No se encontro el token, recuerde que cada 15 minutos se borran los registros, intente generar un token de nuevo";
            data = [];
        }

    } catch (err) {
        message = "" + err;
        error = true;
        data = [];
    }

    const dataSent: IRequest = {
        message,
        data,
        error
    };

    return dataSent;

};