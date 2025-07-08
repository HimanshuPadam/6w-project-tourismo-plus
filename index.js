const express = require("express");
const db = require("./server/config/db")
const seeder = require("./server/config/seeder")
seeder.registerAdmin()
const app= express();
app.use(express.urlencoded({
    extended: false
}))

const routes = require("./server/routes/apiroutes")
app.use("/apis",routes)

app.listen(5000,(err)=>{
    if(err)
        console.log("error occured during server connection");
    else
        console.log("server connected successfully");
})