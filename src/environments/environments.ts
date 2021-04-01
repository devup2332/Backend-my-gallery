import dotenv from "dotenv";

dotenv.config();

export const environments = {
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  host: process.env.DATABASE_HOST,
  database_port: Number(process.env.DATABASE_PORT),
  port: process.env.PORT || 8080,
  jwt_secret: process.env.JWT_SECRET as string,
  client_Id_facebook: process.env.CLIENT_ID_FACEBOOK as string,
  client_secret: process.env.FACEBOOK_SECRET as string,
  cloudinary_api_secret: process.env.CLOUDINARY_API_SECRET,
  cloudinary_api_key: process.env.CLOUDINARY_API_KEY,
  default_photo:
    "https://res.cloudinary.com/dder8kjda/image/upload/v1617211129/user-icon_x13zob.png",
};
