import { Request, Response, NextFunction } from "express";
import  Jwt  from "jsonwebtoken";

export const auth = (req: Request, res: Response, next: NextFunction): any => {
     if (!req.headers.authorization) {
        return res.status(401).send("not authentication")
     }

     let secretKey = process.env.JWT_SECRET_KEY || "secret";
     const token: string = req.headers.authorization.split(" ")[1];

     try {
        const credential: string | object = Jwt.verify(token, secretKey);

        if (credential) {
            req.app.locals.credential = credential;
            return next();
        } 

         return res.send("token invalid");
     } catch(error) {
        return res.send(error);
     }
}

// import { Request, Response, NextFunction } from "express";

// export const auth = (rea: Request, res: Response, next: NextFunction): any => {
//     // console.log("ini adalah middleware");
//     // return;
//     // next();
//     let auth = true;

//     if (auth) {
//         next();
//     }

//     return res.send("tidak diautentikasi")
// }