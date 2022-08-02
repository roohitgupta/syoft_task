const mongoose = require('mongoose')

const User = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    number: { type: Number, required: true },
    role: { type: String, required: true },
})

const UserModel = mongoose.model('UserData', User)

module.exports = UserModel;