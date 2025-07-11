const touristModel = require("./touristModel")
const userModel = require("../User/userModel")
const businessModel = require("../Business/businessModel")

const register = (req,res) => {
    var errmsgs = []
    if(!req.body.name)
        errmsgs.push("name is required")
    if(!req.body.contact)
        errmsgs.push("contact is required")
    if(!req.body.location)
        errmsgs.push("location is required")
    if(!req.body.profileImage)
        errmsgs.push("image is required")
     if(!req.body.email)
        errmsgs.push("email is required!!")
    if(!req.body.password)
        errmsgs.push("password is required!!")
    
    if(errmsgs.length>0){
        res.send({
            status:422,
            success: false,
            message: errmsgs
        })
    }
    else{
        userModel.findOne({email: req.body.email})
        .then((userData)=>{
            if(userData == null){
                let userObj  = new userModel()
                userObj.email = req.body.email
                userObj.password = bcrypt.hashSync(req.body.password,10)  
                userObj.userType = 1
                userObj.save()
                .then((newuserdata)=>{
                    let touristObj = new touristModel()
                    // studentObj.userId = newuserdata._id
                    touristObj.name = req.body.name
                    touristObj.email = req.body.email
                    touristObj.contact = req.body.contact
                    touristObj.location = req.body.location
                    touristObj.profileImage = req.body.profileImage
                    touristObj.save()
                    .then( async(touristData)=>{  
                        res.send({
                            status:200,
                            success:true,
                            message:"student Register!!!",
                            data:studentdata,
                            userdata:newuserdata
                            
                        })    
                    })
                    .catch((err)=>{
                        console.log(err);

                        res.send({
                            status:500,
                            success:false,
                            message:"internel server error!!"
                        })
                    })


                })
                .catch((err)=>{
                    res.send({
                        status:500,
                        success:false,
                        message:"internel server error!!"
                    })
                })
            }
            else{
                res.send({
                    status: 422,
                    success: false,
                    message: "email already exists"
                })
            }
        })
        .catch((err)=>{
            console.log(err);
            
            res.send({
                status:500,
                success:false,
                message:"internel server error!!"
            })
        })
    }
}

const getAllBusinesses = (req,res) => {
    businessModel.find()
    .then((businessData)=>{
        res.send({
            status: 200,
            success: true,
            message: businessData
        })
    })
    .catch((err)=>{
        res.send({
            status: 500,
            success: false,
            message: "internal Server Error"
        })
    })
}

const SearchedBusiness = (req,res) => {
    var errMsgs = []
    if(!req.body.name)
        errMsgs.push("name is required")
    if(errMsgs.length>0){
        res.send({
            status:422,
            success: false,
            message: errMsgs
        })
    }
    else{
        businessModel.find({name:req.body.name})
        .then((searchedData)=>{
            res.send({
                staus: 200,
                succes: true,
                message: "data found",
                data: searchedData
            })
        })
        .catch((err)=>{
            res.send({
                status: 500,
                success: false,
                message: "internal Server Error"
            })
        })
    }
    

}

const setPreferences = (req,res) => {
    var errMsgs = []
    if(!req.body.intrest)
        errMsgs.push("show some interest")
    if(!req.body.minbuget)
        errMsgs.push("minimum amount of budget requiered")
    if(!req.body.maxbuget)
        errMsgs.push("maximum amount of budget requiered")
    if(errMsgs.length>0)
        res.send({
            status:422,
            succes: false,
            message: errMsgs
        })
    else{
        let touristObj = new touristModel()
        touristObj.preferences.interests = req.body.interest
        touristObj.preferences.min = req.body.minbuget
        touristObj.preferences.maxbuget = req.body.maxbuget
        touristObj.save()
        .then((touristData)=>{
            res.send({
                status: 200,
                success: true,
                message: "preferences added successfully"
            })
        })
        .catch((err)=>{
            res.send({
                status: 500,
                success: false,
                message: "internal server error"
            })
        })
    }
}

const softDelete = (req,res) => {}

module.exports = {register,getAllBusinesses,SearchedBusiness,setPreferences,softDelete}