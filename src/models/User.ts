import { DataTypes, Model } from "sequelize";
import { sequelize } from "../instances/pg";

interface IUser extends Model {
    id: number;
    name: string;
    age: number;
}

export const User = sequelize.define<IUser>('user', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: {

        type: DataTypes.STRING
    },
    age: {
        type: DataTypes.NUMBER
    }
}, {
    tableName: 'users',
    timestamps: false
})


