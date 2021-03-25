import express from "express";
import cors from "cors";
import helmet from "helmet";
import Database from "./database";
import morgan from "morgan";
import passport from "passport";
import ApiRoutes from "./routes/api-routes.routes";
import JWTMiddleware from "./middlewares/login.middleware";
import { environments } from "./environments/environments";

const app = express();

app.use(cors());
app.use(helmet());
app.use(passport.initialize());
passport.use("jwt_strategy", JWTMiddleware);
app.use(morgan("dev"));
app.use(express.json());

app.use("/api", ApiRoutes);

app.listen(environments.port, async () => {
  
  try {
    console.log(`Serve on port ${environments.port}`);
    await Database.authenticate()
    console.log("Database is connected");
    await Database.sync({ force: false });
  } catch (err) {
    console.log("ERROR",err.message);
  }
});

export default app;
