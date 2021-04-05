import { DataTypes, Model } from "sequelize";
import sequelize from "../database";
import TagsModel from "./Tags.model";

class Photo extends Model {
  public id!: string;
  public secure_url!: string;
  public public_id!: string;
  public tags!: TagsModel[];
}

Photo.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    secure_url: {
      type: DataTypes.STRING,
    },
    public_id: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    tableName: "photos",
    timestamps: true,
  }
);

export default Photo;
