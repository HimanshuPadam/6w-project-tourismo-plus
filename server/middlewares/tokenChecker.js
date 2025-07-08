const jwt = require ("jsonwebtoken")
const secretKey = "himanshu@shoray#$%^&*()"
module.exports = (req,res,next) => {
    let token = req.headers("authorization")
    if(!token){
        res.send({
            status:404,
            success: false,
            message: "Token not founddd!!!!"
        })
    }
    else{
        jwt.verify(token,secretKey,(err,data)=>{
            if(err)
                res.send({
                    status:403,
                    success: false,
                    message: "Invalid token!!"
                })
            else{
                req.decoded = data
                next()
            }
        })
    }
}