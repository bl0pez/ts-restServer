import express, { Application } from "express";
import cors from "cors";
/**
 * Como es una exportación por defecto,
 * no es necesario poner * as userRoutes
 */
import userRoutes from "../routes/user";
import db from "../db/connection";

class Server{

    private app: Application;
    private port: string;
    private apiPaths = {
        users: '/api/users'
    };

    constructor(){
        this.app = express();
        this.port = process.env.PORT || "4000";

        //Métodos iniciales
        this.connectDB();
        this.middlewares();
        this.routes();
    }

    async connectDB(){
        try {
            await db.authenticate();
            console.log("DB Online");
        } catch (err: any) {
            throw new Error(err);
        }
    }

    middlewares(){

        //Cors
        this.app.use(cors());
        //Lectura del body
        this.app.use(express.json());
        //Directorio público
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use(this.apiPaths.users, userRoutes);
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        });
    }

}

export default Server;