import dotenv from "dotenv";

dotenv.config();

export const environments = {
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  host: process.env.DATABASE_HOST,
  port: process.env.PORT,
  jwt_secret: process.env.JWT_SECRET as string,
  client_Id_facebook: process.env.CLIENT_ID_FACEBOOK as string,
  client_secret: process.env.FACEBOOK_SECRET as string,
  default_photo:
    "https://images.unsplash.com/photo-1521132293557-5b908a59d1e1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
};
