const routes = require("express").Router()
const userController = require("../apis/User/userController")
const touristController = require("../apis/Tourist/touristController")

routes.post("/tourist/register", touristController.register)

routes.post("/user/login",userController.Login)
routes.use(require("../middleware/adminTokenChecker"))

routes.post("/tourist/getAllBusinesses",touristController.getAllBusinesses)
routes.post("/tourist/searchBusinesses",touristController.SearchedBusiness)
routes.post("/tourist/setpreferences",touristController.setPreferences)