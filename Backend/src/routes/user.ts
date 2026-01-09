import z from 'zod'
import bcrypt from 'bcrypt'
import { ContentModel, LinkModel, UserModel } from '../db';
import jwt from 'jsonwebtoken'

import dotenv from 'dotenv'
dotenv.config()

const jwt_secret = process.env.JWT_SECRET!;

export const userSignUp = async (req: any, res: any) => {
    const requiredBody = z.object({
        username: z.string().min(3).max(10),
        password: z.string().min(8, {message: "Password should be min 8 charracters long"}).max(20).regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$/),
        confirmPassword: z.string().min(1, {message: "Confirm Password is required"}),
    
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"]
    })

    const parsedBodyWithSuccess = requiredBody.safeParse(req.body);

    if(parsedBodyWithSuccess.success) {
        const username = req.body.username;
        const password = req.body.password;

        try {
            const hashedPassword = await bcrypt.hash(password, 5);

            await UserModel.create({
                username: username,
                password: hashedPassword
            })
            res.status(200).json({msg: "User created successfully"});

        } catch(err) {
            res.status(403).json({msg: "User already exists", error: err});
        }
    } else {
        res.status(411).json({msg: "Input Error", error: parsedBodyWithSuccess.error});
    }
}

export const userSignin = async (req: any, res: any) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = (await UserModel.findOne({username: username}))!;

    if(!user) res.status(403).json({msg: "User Does NOT exist"});

    const matchPassword = await bcrypt.compare(password, user.password);

    try {
        if(matchPassword) {
            const token = jwt.sign({id: user._id}, jwt_secret);

            res.status(200).json({msg: "User Signed in", token: token});
        } else {
            res.status(403).json({msg: "Wrong Password"})
        }
    } catch(err) {
        res.status(500).json({msg: "Internal server error", error: err})
    }


}

export const addContent = async (req: any, res: any) => {
    const type = req.body.type;
    const title = req.body.title;
    const content = req.body.content;
    const link = req.body.link;
    const userId = req.id;
    const tags = req.tags;

    try {
        await ContentModel.create({
            title: title,
            content: content,
            link: link,
            type: type,
            userId: userId,
            tags: tags,
            date: Date()
        })
        res.status(200).json({msg: "Content Added"});
    } catch(err) {
        res.status(500).json({msg: "Interval Server Error", error: err})
    }
}

export const getContent = async (req: any, res: any) => {
    const userId = req.id;

    const content = await ContentModel.find({
        userId: userId
    }).populate("userId", "username")

    res.json({content: content});
}

export const deleteContent = async (req: any, res: any) => {
    try {
        const contentId = req.params.contentId;

        await ContentModel.deleteOne({
            _id : contentId,
            userId: req.id
        })

        res.json({msg: "Deleted"});
    } catch(e) {
        res.status(411).json({
            msg: "Incorrect content Id"
        })
    }
}

export const createLink = async (req: any, res: any) => {
    const share = req.body.share;
    const userId = req.id;

    try {
        if(share) {
            await LinkModel.deleteOne({
                userId: userId
            })
            
            const token = jwt.sign(userId, jwt_secret);
            //const hash = await bcrypt.hash(token, 5);

            await LinkModel.create({
                hash: token,
                userId: userId,
            })

            res.json({msg: "Link Created", hash: token})
        } else {
            await LinkModel.deleteOne({
                userId: userId
            })

            res.json({msg: "Link deleted"});
        }
    } catch(err) {
        res.status(500).json({msg: "Link NOT Created, Link might already exist", error: err})
    }

}

export const shareLink = async (req: any, res: any) => {
    const token = req.params.shareLink;
    //const hash = await bcrypt.hash(token, 5);

    const link = await LinkModel.findOne({
        hash: token
    })

    try {
        if(link) {
            //@ts-ignore
            const content = await ContentModel.find({
                userId: link?.userId
            }).populate("userId", "username")

            res.json({content: content});
        } else {
            res.status(403).json({msg: "Invalid Link"})
        }
    } catch(err) {
        res.status(500).json({msg: "Internal server error", error: err})
    }
    
}