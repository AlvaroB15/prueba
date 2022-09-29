import { DataSource } from "typeorm"

export const DataSourceMongoDB = new DataSource({
    type: "mongodb",
    host: "localhost",
    port: 27017,
    database: "test",
})