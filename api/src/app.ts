import express from 'express';
import { config } from 'dotenv'
config();
import { Application } from 'express';
import cors from 'cors';
import "./db"
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import testRouter from './routes/test.routes';
import UserRouter from './routes/UserRouter';
import { connection } from './db';
import AreaRouter from './routes/AreaRouter';


export class App{
    private app: Application;

    constructor(private port?: number | string){
        this.app = express();
        this.settings();
        this.usages();
        this.routes();
    }
    settings(){
        this.app.set('port', this.port || process.env.PORT || 3005);
    }
    usages(){
        this.app.use(cors({
            origin: process.env.CLIENT_URL,
            methods: ["GET", "POST"],
            credentials: true
        }));
        
        this.app.use(express.json());
        this.app.use(bodyParser.urlencoded({extended: true}));
        this.app.use(cookieParser());
    }
    
    routes(){
    this.app.use('/test', testRouter);
    this.app.use("/users",UserRouter)
    this.app.use("/area",AreaRouter)
    }
    async listen(){
        await connection()
        this.app.listen(this.app.get('port'));
        console.log(`Server works on PORT ${this.app.get('port')}`);
    }
}