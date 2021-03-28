import { DataTypes, Optional, Model } from "sequelize";
import sequelize from "../database";

export interface IUser {
  id?: number;
  fullName?: string;
  email?: string;
  phone?: string;
  password?: string;
  createdAt?: string;
  provider?: string;
  avatar?: string;
}

export interface UserInstace extends Model<IUser>, IUser {}

export const UserModel = sequelize.define<UserInstace>(
  "user",
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    fullName: {
      type: DataTypes.STRING(280),
    },
    email: {
      type: DataTypes.STRING(280),
    },
    phone: {
      type: DataTypes.STRING(280),
    },
    provider: {
      type: DataTypes.STRING(280),
    },
    avatar: {
      type: DataTypes.STRING(280),
    },
    password: DataTypes.STRING(280),
  },
  {
    tableName: "users",
  }
);
