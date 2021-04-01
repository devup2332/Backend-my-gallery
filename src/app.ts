import express from "express";
import cors from "cors";
import Database from "./database";
import morgan from "morgan";
import path from "path";
import passport from "passport";
import ApiRoutes from "./routes/api-routes.routes";
import JWTMiddleware from "./middlewares/jwt.middleware";
import FacebookMiddleware from "./middlewares/facebook.middleware";
import { environments } from "./environments/environments";
import Pusher from "pusher";

export const pusher = new Pusher({
  appId: "1178672",
  key: "7a1ea605dc1a765a5bc1",
  secret: "e3cd5ba70e1735791a60",
  cluster: "us2",
  useTLS: true,
});

const app = express();

app.use(cors());

app.use(morgan("dev"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(passport.initialize());
passport.use("jwt_strategy", JWTMiddleware);
passport.use("facebook_strategy", FacebookMiddleware);

app.use("/api", ApiRoutes);

app.use("/", (req, res) => {
  return res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(environments.port, async () => {
  try {
    console.log(`Serve on port ${environments.port}`);
    await Database.authenticate();
    console.log("Database is connected");
    await Database.sync({ force: false });
  } catch (err) {
    console.log("ERROR", { ...err });
  }
});

export default app;
