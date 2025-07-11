const userModel = require("./userModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const secret = "himanshu@shoray#$%^&*()"

const login = (req,res) => {
    var errMsgs = []
    if(!req.body.email){
        errMsgs.push("email is required!!")
    }
    if(!req.body.password){
        errMsgs.push("password is required!!")
    }
    if(errMsgs.length>0){
            res.send({
                status:422,
                success:false,
                message:errMsgs
            })
    }
    else{
        userModel.findOne({email:req.body.email})
        .then((userData)=>{
            if(userData == null){
                res.send({
                    status:404,
                    success:false,
                    message:"user not found!!"
                })
            }
            else{
                bcrypt.compare(req.body.password,userData.password,function(err,ismatch){
                    if(!ismatch){
                            res.send({
                                status:400,
                                success:false,
                                message:"wrong password!!"
                            })
                    }
                    else{
                        let payload = {
                            userId:userData._id,
                            name:userData.name,
                            email:userData.email,
                            userType:userData.userType
                        }
                        let token = jwt.sign(payload,secret,{expiresIn:"24hr"})
                        res.send({
                            status:200,
                            success:true,
                            message:"login successfully!!",
                            data:userData,
                            token:token
                        })
                    }
                })


            }
            
        })
        .catch((err)=>{
            console.log("err is",err);
            res.send({
                status:500,
                success:false,
                message:"Something went wrong!!"
            })
        })
    }
}

module.exports = {login}