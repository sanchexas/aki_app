import {Sequelize} from "sequelize-typescript"
import { config } from 'dotenv';
import { User } from "./models/User";
config();

export async function connection(){

        const dbConnection = await new Sequelize(
            process.env.DB_NAME as string,
            process.env.DB_USER as string,
            process.env.DB_PASSWORD as string,
            {
                host:process.env.DB_HOST,
                models:[User],
                dialect:"mysql",
            }
        );
        return dbConnection;
}