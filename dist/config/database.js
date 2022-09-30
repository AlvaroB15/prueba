"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataSourceMongoDB = void 0;
const typeorm_1 = require("typeorm");
exports.DataSourceMongoDB = new typeorm_1.DataSource({
    type: "mongodb",
    host: "localhost",
    port: 27017,
    database: "test",
});
