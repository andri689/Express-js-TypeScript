import BaseRoutes from "./BaseRoutes";
import { auth } from "../middlewares/AuthMiddleware";
// Controllers
import UserController from "../controllers/UserController";

class UserRouters extends BaseRoutes {
    public routes(): void {
        this.router.get("/", auth, UserController.index);
        this.router.post("/", UserController.create);
        this.router.get("/:id", UserController.show);
        this.router.put("/:id", UserController.update);
        this.router.delete("/:id", UserController.delete);
    }
}

export default new UserRouters().router;



// import BaseRoutes from "./BaseRoutes";

// // Controllers
// import UserController from "../controllers/UserController";

// class UserRouters extends BaseRoutes {
//     public routes(): void {
//         this.router.get("/", UserController.index);
//         this.router.post("/", UserController.create);
//         this.router.get("/:id", UserController.show);
//         this.router.put("/:id", UserController.update);
//         this.router.delete("/:id", UserController.delete);
//     }
// }

// export default new UserRouters().router;

// import { Router, Request, Response } from "express";
// import IRouter from "./RouteInterface";

// // Controllers
// import UserController from "../controllers/UserController";

// class UserRouters implements IRouter {
//     public router: Router;

//     constructor() {
//         this.router = Router();
//         this.routes();
//     }

//     public routes(): void {
//         this.router.get("/", UserController.index);
//         this.router.post("/", UserController.create);
//         this.router.get("/:id", UserController.show);
//         this.router.put("/:id", UserController.update);
//         this.router.delete("/:id", UserController.delete);
//     }
// }

// export default new UserRouters().router;

// class UserRouters implements IRouter {
//     public router: Router;

//     constructor() {
//         this.router = Router();
//         this.routes();
//     }

//     public routes(): void {
//         this.router.route("/").get((req: Request, res: Response) => {
//             res.send("ini adalah endpoint users");
//         });

//         this.router.route("/users").post((req: Request, res: Response) => {
//             res.send(req.body);
//         });
//     }
// }

// export default new UserRouters().router;