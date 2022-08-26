import { Model, DataTypes } from 'sequelize';
import { DatabaseConfig } from "../config/database.js";

export class ContactameModel extends Model{}

ContactameModel.init({
    idContactame: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        comment: "null",
        autoIncrement: true
    },
    tipo: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    info: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    foto: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    persona: {
        type: DataTypes.INTEGER,
        allowNull: true
    }

}, {
    sequelize: DatabaseConfig,
    tableName: 'contactame',
    timestamps: false
});