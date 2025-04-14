import { Country } from "../entities/Country";
import { DataSource } from "typeorm";

export const dataSource = new DataSource({
  database: "checkpoint.sqlite",
  type: "sqlite",
  entities: [Country],
  synchronize: true,
  logging: ["error", "query"],
});
