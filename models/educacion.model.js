import { Model, DataTypes } from 'sequelize';
import { DatabaseConfig } from "../config/database.js";

export class EducacionModel extends Model{}

EducacionModel.init({
    idEscuela: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        comment: "null",
        autoIncrement: true
    },
    nombreEscuela: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    generacion: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    tipo: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    comentario: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    persona: {
        type: DataTypes.INTEGER,
        allowNull: true
    }

}, {
    sequelize: DatabaseConfig,
    tableName: 'educacion',
    timestamps: false
});