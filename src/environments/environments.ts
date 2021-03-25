import dotenv from 'dotenv';

dotenv.config();

export const environments = {
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    port: process.env.PORT,
    jwt_secret: process.env.JWT_SECRET as string
}