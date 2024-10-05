import "reflect-metadata";
import { DataSource } from "typeorm";
import { Order } from "./entities/Order";
import { OrderDetail } from "./entities/OrderDetail";

let dataSource: DataSource;

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USERNAME || "postgres",
  password: process.env.DB_PASSWORD || "123456",
  database: process.env.DB_DATABASE || "sales",
  logging: false,
  entities: [Order, OrderDetail],
  synchronize: true, // For development. Disable in production.
});

export const getDataSource = async () => {
  if (!dataSource) {
    dataSource = await AppDataSource.initialize();
    console.log("Data Source has been initialized");
  }
  return dataSource;
};
