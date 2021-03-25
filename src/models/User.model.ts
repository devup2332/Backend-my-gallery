import { DataTypes, Optional, Model } from "sequelize";
import sequelize from '../database';

export interface IUser{
    id?: number
    username: string,
    email: string,
    phone: string,
    password: string,
    createdAt?: string
}


export interface UserInstace extends Model<IUser>,IUser {};

export const UserModel = sequelize.define<UserInstace>("user",{
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: DataTypes.STRING(280),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(280),
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING(280),
        allowNull: false,
        
    },
    password: DataTypes.STRING(280),
    createdAt: {
        defaultValue: Date.now(),
        type: DataTypes.DATE
    }
},{
    tableName: 'users',
});