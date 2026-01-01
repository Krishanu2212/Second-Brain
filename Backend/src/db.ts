import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    username: {type: String, unique: true, required: true},
    password: {type: String, required: true},
})

const TagSchema = new mongoose.Schema({
    title: {type: String, unique: true, required: true}
})

const LinkSchema = new mongoose.Schema({
    hash: {type: String, required: true},
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', unique: true}
})

const contentTypes = ['Image', 'Audio', 'Video', 'Article', 'Youtube', 'X', 'Text']
const ContentSchema = new mongoose.Schema({
    link: {type: String},
    type: {type: String, enum: contentTypes, required: true},
    title: {type: String, required: true},
    content: {type: String},
    tags: [{type: mongoose.Schema.Types.ObjectId, ref: 'Tag'}],
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    date: String
})

export const UserModel = mongoose.model("User", UserSchema);
export const TagModel = mongoose.model("Tag", TagSchema);
export const LinkModel = mongoose.model("Link", LinkSchema);
export const ContentModel = mongoose.model("Content", ContentSchema);