import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

@Injectable()
export class BookMiddleWare implements NestMiddleware{

    use(req: Request, res: Response, next: NextFunction) {
        // console.log("This is classs ware middleware which is implemented in Book Module")
        let protocol = req.protocol; //http https
        let host = req.get("host");
        let url = req.originalUrl;
        let method = req.method;
        let date = new Date().toDateString();
        console.log("protocol = " + protocol)
        console.log("host = " + host)
        console.log("url = " + url)
        console.log("method = " + method)
        console.log("date = " + date)
        next();
    }

}