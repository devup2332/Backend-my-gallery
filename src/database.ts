import { Sequelize } from "sequelize";
import { environments } from "./environments/environments";
import mysql2 from "mysql2";

const sequelize = new Sequelize(
  environments.database as string,
  environments.username as string,
  environments.password,

  {
    dialect: "mysql",
    dialectModule: mysql2,
    host: environments.host,
    port: environments.database_port,
  }
);

export default sequelize;
