import { DatabaseConfig } from '../config/database.js';
import {DataTypes, Model} from "sequelize";

export class messages extends Model {}

messages.init({
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            comment: "null",
            autoIncrement: true
        },
        conversation_uuid: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        msg: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: true
        }
    }, {
        sequelize: DatabaseConfig,
        tableName: 'messages',
        timestamps: false
    }
);