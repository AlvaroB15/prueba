import { ICard } from "../interfaces/ICard";

export const validatorCard = (bodyJson: ICard) => {
    // card_number                      number                               Length:13...16                  Utilizar el algoritmo de LUHN para garantizar que la tarjeta sea válida.
    // cvv                              number                               Length:3...4                    Visa / mastercard:       123 Amex: 4532
    // expiration_month                 string                               Length: 1..2                    Del 1 a 12
    // expiration_year                  string                               Length:4                        Año actual máximo 5 años
    // email                            string                               Length:5..100                   Garantizar que sean email válidos utilizando los siguientes dominios “gmail.com”, “hotmail.com”, “yahoo.es”.

    let messageError = "";

    if (!validarTarjetaLuhn(bodyJson.card_number)) { return messageError = `El numero de tarjeta ${bodyJson.card_number} no pertenece a Visa / Mastercad / Amex`; }
    if (!validateCvv(bodyJson.cvv)) { return messageError = `El cvv ${bodyJson.cvv} debe ser de 3 (Visa/Mastercad) o 4 digitos(Amex)`; }
    if (!validateMonth(bodyJson.expiration_month)) { return messageError = `${bodyJson.expiration_month} no es un mes que sea entre Enero - Diciembre`; }
    if (!validateYear(bodyJson.expiration_year)) { return messageError = `El año ${bodyJson.expiration_year} no es del año actual ni esta en un rango de 5 año mas`; }
    if (!validateEmail(bodyJson.email)) { return messageError = `El correo ${bodyJson.email} no es un mail valido (solo son validos con dominios “gmail.com”, “hotmail.com”, “yahoo.es`; }

    return messageError;
};

export const validarTarjetaLuhn = (card_number: number) => {
    const VISA = /^4[0-9]{3}-?[0-9]{4}-?[0-9]{4}-?[0-9]{4}$/;
    const MASTERCARD = /^5[1-5][0-9]{2}-?[0-9]{4}-?[0-9]{4}-?[0-9]{4}$/;
    const AMEX = /^3[47][0-9-]{16}$/;

    return VISA.test(card_number.toString()) || MASTERCARD.test(card_number.toString()) || AMEX.test(card_number.toString());
};

export const validateCvv = (cvv: number) => {
    return cvv.toString().length >= 3 && cvv.toString().length <= 4;
};

export const validateMonth = (numberMount: string) => {
    return (parseInt(numberMount) >= 1 && parseInt(numberMount) <= 12);
};

export const validateYear = (expiration_year: string) => {
    const today = new Date();
    const currentYear = today.getFullYear();
    return parseInt(expiration_year) >= currentYear && parseInt(expiration_year) <= currentYear + 5;
};

export const validateEmail = (data: string) => {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@\\"]+(\.[^<>()[\]\\.,;:\s@\\"]+)*)|(\\".+\\"))@(hotmail.com|gmail.com|yahoo.es)/;
    return emailRegex.test(data);
};

export const validateTokenAuth = (token: string) => {
    let messageError = "";
    if (token === "") { return "Debe mandar un token de autorizacion valido o con data"; }
    if (!token.includes("pk_test_")) { return messageError = `El token ${token} no cumple con el formato pk_test_`; }
    return messageError;
};

export const validarToken = (token = "") => {
    let messageError = "";
    if (token.length !== 16) { return messageError = "El token debe tener 16 digitos"; }

    const arrayLetraMinusculaNumero = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    const tokenMinuscula = Array.from(token).map(data => data.toLowerCase());
    let error;

    for (let i = 0; i < tokenMinuscula.length; i++) {
        if (arrayLetraMinusculaNumero.includes(tokenMinuscula[i])) {
            error = false;
        } else {
            error = true;
            break;
        }
    }

    if (error) { return messageError = "El token no cumple con sus requisitos (tener 16 caracteres, donde utiliza números, letras minúsculas, letras mayúsculas)"; }
    return messageError;
};