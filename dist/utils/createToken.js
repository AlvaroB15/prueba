"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createToken = void 0;
const createToken = () => {
    const arrayLetraMinuscula = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const arrayLetraMayuscula = arrayLetraMinuscula.map(data => data.toUpperCase());
    const arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const arrayTotal = [...arrayNumeros, ...arrayLetraMinuscula, ...arrayLetraMayuscula];
    let token = "";
    const min = Math.ceil(0);
    const max = Math.floor(61);
    for (let i = 1; i <= 16; i++) {
        const indice = Math.floor(Math.random() * (max - min + 1) + min);
        token += arrayTotal[indice];
    }
    return token;
};
exports.createToken = createToken;
