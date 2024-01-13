import express, { Application, Request, Response } from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import compression from "compression";
import helmet from "helmet";
import cors from "cors";
// import dotenv from "dotenv";
import { config as dotenv } from "dotenv"; // cara panggil dotenv secara ringkas

// Routers
import UserRoutes from "./routers/UserRoutes";
import AuthRoutes from "./routers/AuthRoutes";
import TodoRoutes from "./routers/TodoRoutes";

class App {
    public app: Application;

    constructor() {
        this.app = express();
        this.plugins();
        this.routes();
        //dotenv.config();   
        dotenv(); // jadi lebih ringkas    
    }

    protected plugins(): void {
        this.app.use(bodyParser.json());
        this.app.use(morgan("dev"));
        this.app.use(compression());
        this.app.use(helmet());
        this.app.use(cors());
    }

    protected routes(): void {
        this.app.route("/").get((req: Request, res: Response) => {
            res.send("ini adalah route menggunakan Ts");
        });

        this.app.use("/api/v1/users", UserRoutes);
        this.app.use("/api/v1/auth", AuthRoutes);
        this.app.use("/api/v1/todos", TodoRoutes);
    }
}

const port: number = 8000;
const app = new App().app;
app.listen(port, () => {
    console.log("Aplikasi ini berjalan di port" + port);

    console.log(process.env.DB_USER);
}); 


// class App {
//     public app: Application;

//     constructor() {
//         this.app = express();
//         this.plugins();
//         this.routes();

        
//     }

//     protected plugins(): void {
//         this.app.use(bodyParser.json());
//         this.app.use(morgan("dev"));
//         this.app.use(compression());
//         this.app.use(helmet());
//         this.app.use(cors());
//     }

//     protected routes(): void {
//         this.app.route("/").get((req: Request, res: Response) => {
//             res.send("ini adalah route menggunakan Ts");
//         });

//         this.app.route("/users").post((req: Request, res: Response) => {
//             res.send(req.body);
//         });

//         this.app.use("/users", UserRoutes);
//     }
// }

// const port: number = 8000;
// const app = new App().app;
// app.listen(port, () => {
//     console.log("Aplikasi ini berjalan di port" + port);
// }); 

// const app = express();

// app.route("/").get((req, res) => {
//     res.send("halo, ini router pertama saya...");
// });

// app.listen(8000);