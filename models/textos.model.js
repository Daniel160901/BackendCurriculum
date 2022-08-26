import { Model, DataTypes } from 'sequelize';
import { DatabaseConfig } from "../config/database.js";

export class TextosModel extends Model{}

TextosModel.init({
    idTexto: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        comment: "null",
        autoIncrement: true
    },
    texto: {
        type: DataTypes.STRING(300),
        allowNull: true
    },
    persona: {
        type: DataTypes.INTEGER,
        allowNull: true
    }

}, {
    sequelize: DatabaseConfig,
    tableName: 'textos',
    timestamps: false
});