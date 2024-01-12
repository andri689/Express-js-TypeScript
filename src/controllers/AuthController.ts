import { Request, Response } from "express";
import Authentication from "../utilis/Authentication";


const db = require("../db/models");

class AuthController {
    register = async (req: Request, res: Response): Promise<Response> => {
        let { username, password } = req.body;
        const hashedPassword: string = await Authentication.passwordsHash(password);

        await db.user.create({ username, password: hashedPassword });

        return res.send("Registrasi sukses");
    }

    login = async (req: Request, res: Response): Promise<Response> => {
        // cari data user by username
        let { username, password } = req.body;

        const user = await db.user.findOne({
            where: { username }
        });

        // check password
        let compare = await Authentication.passwordCompare(password, user.password);

        // generate token
        if (compare) {
            let token = Authentication.generateToken(user.id, username, user.password);
            return res.send({
                token
            });
        }

        return res.send("auth failed");

        // return res.send(user);
    }

    profile = (req: Request, res: Response): Response => {
        return res.send(req.app.locals.credential);
    }
}

export default new AuthController();

// class AuthController {
//     register(req: Request, res: Response): Response {
//         return res.send("");
//     }

//     login(req: Request, res: Response): Response {
//         return res.send("");
//     }
// }

// export default new AuthController();
