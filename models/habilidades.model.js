import { Model, DataTypes } from 'sequelize';
import { DatabaseConfig } from "../config/database.js";

export class HabilidadesModel extends Model{}

HabilidadesModel.init({
    idHabilidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        comment: "null",
        autoIncrement: true
    },
    nombreHabilidad: {
        type: DataTypes.STRING(255),
        allowNull: true
    }

}, {
    sequelize: DatabaseConfig,
    tableName: 'habilidades',
    timestamps: false
});