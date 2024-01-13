import { Request, Response } from "express";
import IController from "./ControllerInterface";
import TodoService from "../services/TodoService";

class TodoController implements IController {
    index = async (req: Request, res: Response): Promise<Response> => { 
        const service: TodoService = new TodoService(req);
        const todos = await service.getAll();

        return res.send({
            data: todos,
            message: ""
        });
    }

    create = async (req: Request, res: Response): Promise<Response> => {
        const service: TodoService = new TodoService(req);
        const todos = await service.store();

        return res.send({
            data: todos,
            message: "todo created"
        });
    }

    show = async (req: Request, res: Response): Promise<Response> => {
        const service: TodoService = new TodoService(req);
        const todo = await service.getOne();

        return res.send({
            data: todo,
            message: ""
        });
    }

    update = async (req: Request, res: Response): Promise<Response> => {
        const service: TodoService = new TodoService(req);
        const todo = await service.update();

        return res.send({
            data: todo,
            message: "todo update"
        });

    }
    
    delete = async (req: Request, res: Response): Promise<Response> => {
        const service: TodoService = new TodoService(req);
        const todo = await service.delete();

        return res.send({
            data: todo,
            message: "todo deleted"
        });
    }
    
}

export default new TodoController();





// import { Request, Response } from "express";
// import IController from "./ControllerInterface";
// import { where } from "sequelize";
// const db = require("../db/models");

// class TodoController implements IController {
//     index = async (req: Request, res: Response): Promise<Response> => { 
//         const { id } = req.app.locals.credential;

//         const todos = await db.todo.findAll({
//             where: { user_id: id },
//             attributes: ['id', 'description']
//         });

//         return res.send({
//             data: todos,
//             message: ""
//         });
//     }

//     create = async (req: Request, res: Response): Promise<Response> => {
//         const { id } = req.app.locals.credential;
//         const { description } = req.body;

//         const todo = await db.todo.create({
//             user_id: id,
//             description
//         });

//         return res.send({
//             data: todo,
//             message: "todo created"
//         });
//     }

//     show = async (req: Request, res: Response): Promise<Response> => {
//         const { id: user_id } = req.app.locals.credential;
//         const { id } = req.params;

//         const todo = await db.todo.findOne({
//             where: { id, user_id }
//         });

//         return res.send({
//             data: todo,
//             message: ""
//         });
//     }

//     update = async (req: Request, res: Response): Promise<Response> => {
//         const { id: user_id } = req.app.locals.credential;
//         const { id } = req.params;
//         const { description } = req.body;

//         await db.todo.update({
//             description
//         }, {
//             where: { id, user_id }
//         });

//         return res.send({
//             data: "",
//             message: "todo update"
//         });

//     }
    
//     delete = async (req: Request, res: Response): Promise<Response> => {
//         const { id: user_id } = req.app.locals.credential;
//         const { id } = req.params;

//         await db.todo.destroy({
//             where: { id, user_id }
//         });

//         return res.send({
//             data: "",
//             message: "todo deleted"
//         });
//     }
    
// }

// export default new TodoController();
