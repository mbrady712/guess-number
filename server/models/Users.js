import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    usernamename: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
});

const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;