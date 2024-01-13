import BaseRoutes from "./BaseRoutes";
import { auth } from "../middlewares/AuthMiddleware";
import validate from "../middlewares/TodoValidator";

// Controllers
import TodoController from "../controllers/TodoController";

class TodoRoutes extends BaseRoutes {
    public routes(): void {
        this.router.get("/", auth, TodoController.index);
        this.router.post("/", auth, validate, TodoController.create);
        this.router.get("/:id", auth, TodoController.show);
        this.router.put("/:id", auth, validate,TodoController.update);
        this.router.delete("/:id", auth, TodoController.delete);
    }
}

export default new TodoRoutes().router;


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