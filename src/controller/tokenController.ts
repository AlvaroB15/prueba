import { ICard } from '../interfaces/ICard';
import { Card } from '../models/Card'
import { validateTokenAuth, validatorCard } from '../utils/validators';

export const postDataCardGenerateToken = async (body: any, tokenGenerado: string, tokenAuth: any) => {

    let message = null;
    let data = null;
    let error = false;
    let bodyJson: ICard;

    bodyJson = JSON.parse(body);
    bodyJson['token'] = tokenGenerado;

    const dataValidator = validatorCard(bodyJson);
    const valTokenAuth = validateTokenAuth(tokenAuth.toString());

    try {
        if (dataValidator != '') throw dataValidator;
        if (valTokenAuth != '') throw valTokenAuth;
        const card = new Card(bodyJson);
        data = await card.save();
        message = "se registro correctamente";

    } catch (err) {
        message = err;
        error = true;
    }

    return {
        message,
        data,
        error
    }
}