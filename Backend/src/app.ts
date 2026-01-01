import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { addContent, createLink, deleteContent, getContent, shareLink, userSignin, userSignUp } from './routes/user'
import { authMW } from './middleware'
import cors from 'cors'

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config()

const db_url = process.env.DB_URL!;

main()
    .then(() => {
        console.log("Connected to DB");
    })
    .catch((err) => {
        console.log(err);
    })

async function main() {
    await mongoose.connect(db_url);
}

app.post('/api/v1/signup', userSignUp);

app.post('/api/v1/signin', userSignin);

app.post('/api/v1/content', authMW, addContent);

app.get('/api/v1/content', authMW, getContent);

app.delete('/api/v1/:contentId', authMW, deleteContent);

app.post('/api/v1/brain/share', authMW, createLink);

app.get('/api/v1/brain/:shareLink', shareLink);

app.listen(3000, () => {
    console.log("Server is listening on port 3000")
})