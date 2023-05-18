import {createPool} from 'mysql2/promise'; 
import { config } from 'dotenv';
config();

export async function connection(){
    /*
    Пример применения в моделях либо репозмториях, при обращении к БД:
        const conn = await connection();
        const response = await conn.query('SELECT * FROM products WHERE product_id = ? ;', idProd); 
        await conn.end(); //Обязательно закрывать соединение!!!
        return response[0];
    */
        const dbConnection = await createPool({
                host: process.env.DB_HOST,
                user: process.env.DB_USER,
                password: '',               // Не знаю, стоит ли ставить пароль?... Если да, то закинуть в .env
                database: process.env.DB_NAME,
        });
        return dbConnection;
}