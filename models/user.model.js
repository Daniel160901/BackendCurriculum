import { Model, DataTypes } from 'sequelize';
import { DatabaseConfig } from "../config/database.js";

export class UserModel extends Model{}

    UserModel.init({
        idUsuario: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            comment: "null",
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        password: {
          type: DataTypes.STRING(255),
          allowNull: true
        }

    }, {
        sequelize: DatabaseConfig,
        tableName: 'usuarios',
        timestamps: false
    });
