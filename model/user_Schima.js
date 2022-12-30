import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    first: {
        type: String,
        require: true,
        trim: true,
        min: 5,
        max: 20
    },
    last: {
        type: String,
        require: true,
        trim: true,
        min: 5,
        max: 20
    },
    username: {
        type: String,
        require: true,
        trim: true,
        unique: true,
        index: true,
        lowercase: true
    },
    eamil: {
        type: String,
        require: true,
        trim: true,
        unique: true,
        index: true,
        lowercase: true
    },
    password: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    }
})

const user = mongoose.model("user", userSchema)
export default user