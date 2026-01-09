import jwt from "jsonwebtoken";
import dotenv from 'dotenv'
import { Request, Response, NextFunction } from "express";
dotenv.config()

const jwt_secret = process.env.JWT_SECRET!;

export const authMW = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.token;

    try {
        if(token) {
            jwt.verify(token as string, jwt_secret, (err: any, decoded: any) => {
                if(err || !decoded) {
                    res.status(411).json({msg: "Unauthorised"});
                    
                } else {
                    const payload = decoded;
                    //@ts-ignore
                    req.id = payload.id;
                    next();
                }
            })
        } else {
            res.status(411).json({msg: "Unauthorised!!!"});
        }
    } catch(err) {
        res.status(411).json({msg: "Unauthorised", error: err});
    }
}