import { Model, DataTypes } from 'sequelize';
import { DatabaseConfig } from "../config/database.js";

export class TiposHabilidadesModel extends Model{}

TiposHabilidadesModel.init({
    idHabs: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        comment: "null",
        autoIncrement: true
    },
    nombreTipo: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    porcentaje: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    habilidad: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    persona: {
        type: DataTypes.INTEGER,
        allowNull: true
    }

}, {
    sequelize: DatabaseConfig,
    tableName: 'tiposhabilidades',
    timestamps: false
});