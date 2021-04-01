import { Sequelize } from "sequelize";
import { environments } from "./environments/environments";
import mysql2 from "mysql2";

const sequelize = new Sequelize(
  environments.DB.DB_NAME,
  environments.DB.DB_USERNAME,
  environments.DB.DB_PASSWORD,
  {
    dialect: "mysql",
    dialectModule: mysql2,
    host: environments.DB.DB_HOST,
    port: environments.DB.DB_PORT,
    logging: false,
  }
);

export default sequelize;
