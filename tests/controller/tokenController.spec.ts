import { describe, expect, test } from "@jest/globals";
import { postDataCardGenerateToken } from "../../src/controller/tokenController";
import { createToken } from "../../src/utils/createToken";

describe("validator file cardController / getDataCard  ", () => {

    const body = {
        email: "prueba.test@gmail.com",
        card_number: 4557880616004374,
        cvv: 123,
        expiration_year: "2027",
        expiration_month: "12"
    };

    const tokenAuth = "pk_test_LsRBKejzCOEEWOsw";

    test("if only send data without a db conecction ", async () => {
        const token = createToken();

        const data = await postDataCardGenerateToken(JSON.stringify(body), token, tokenAuth);
        expect(data).toStrictEqual({
            data: [],
            error: true,
            message: "Debe mandar un token de autorizacion valido o con data",
        });
    }, 30000);

});