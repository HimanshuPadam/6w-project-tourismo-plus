const db = require("mongoose")
db.connect("mongodb://localhost:27017/tourismo_plus")
.then(()=>{
    console.log("DataBase connected successfully!!")
})
.catch((err)=>{
    console.log("somthing went wrong!! \n error = ",err);    
})

