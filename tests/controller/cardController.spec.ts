import { describe, expect, test } from "@jest/globals";
import { getDataCard } from "../../src/controller/cardController";
import {connectDB} from "../../src/config/mongoose";


describe("validator file cardController / getDataCard  ", () => {

    const body = {
        email: "prueba.test@gmail.com",
        card_number: 4557880616004374,
        cvv: 123,
        expiration_year: "2027",
        expiration_month: "12"
    };

    const tokenAuth = "pk_test_LsRBKejzCOEEWOsw";
    
    console.log(connectDB);
    

    test("if only send data without a db conecction ", async () => {
        const data = await getDataCard(JSON.stringify(body), tokenAuth);
        expect(data).toStrictEqual({
            data: [],
            error: true
        });
    });

});