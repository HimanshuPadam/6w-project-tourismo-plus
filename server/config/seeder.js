const userModel = require("../apis/User/userModel")
const bcrypt = require("bcrypt")

const registerAdmin = () => {
    userModel.findOne({email: "admin@gmail.com"})
    .then((userdata)=>{
            if(userdata == null){
                let userObj = new userModel()
                userObj.name = "admin"
                userObj.email = "admin@gmail.com"
                userObj.password = bcrypt.hashSync("admin@123",10)
                userObj.userType = "admin"
                userObj.save()
                .then(()=>{
                    console.log("admin added successfully!!");
                })
                .catch((err)=>{
                        console.log("something went wrong",err);       
                })
            }
            else{
                console.log("admin aleady exists!!");
            }
    })
    .catch((err)=>{
            console.log("something went wrong",err);
            
    })
}
module.exports = {registerAdmin}