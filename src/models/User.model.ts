import { DataTypes, Model } from "sequelize";
import sequelize from "../database";

class UserModel extends Model {
  public id!: string;
  public fullName!: string;
  public email!: string;
  public phone!: string;
  public description!: string;
  public provider!: string;
  public avatart!: string;
  public password!: string;
}

UserModel.init(
  {
    id: {
      type: DataTypes.STRING(200),
      primaryKey: true,
      allowNull: false,
      unique: true,
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
    description: {
      type: DataTypes.STRING(500),
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
    sequelize,
  }
);

export default UserModel;
