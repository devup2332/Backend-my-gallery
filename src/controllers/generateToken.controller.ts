import { UserInstace } from "../models/User.model";
import JWT from "jsonwebtoken";
import { environments } from "../environments/environments";

export const GenerateToken = (user: UserInstace) => {
  return JWT.sign({ id: user.id, email: user.email }, environments.jwt_secret);
};
