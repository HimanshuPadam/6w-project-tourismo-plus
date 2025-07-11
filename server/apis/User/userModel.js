const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    email: {type:String, default: ""},
    password: {type:String, default: ""},
    userType: {type: String, default:"tourist"},// "tourist" | "business" | "admin",
    status: {type:Boolean, default: true},
    createdAt: {type:Date, default: Date.now()}
})
module.exports = new mongoose.model("users",userSchema)