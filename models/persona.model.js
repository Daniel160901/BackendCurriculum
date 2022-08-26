import { Model, DataTypes } from 'sequelize';
import { DatabaseConfig } from "../config/database.js";

export class PersonaModel extends Model{}

PersonaModel.init({
    idPersona: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        comment: "null",
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    apPaterno: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    apMaterno: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    usuario: {
        type: DataTypes.INTEGER,
        allowNull: true
    }

}, {
    sequelize: DatabaseConfig,
    tableName: 'persona',
    timestamps: false
});