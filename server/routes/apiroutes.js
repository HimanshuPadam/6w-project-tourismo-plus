const routes = require("express").Router()

const businessController = require("../apis/Business/businessController")
const touristController = require("../apis/Tourist/touristController")
const userController = require("../apis/User/userController")


routes.post("/business/getAll",businessController.getAll)
routes.post("/tourist/getAll",touristController.getAll)

routes.post("/user/login",userController.login)
routes.use(require("../middlewares/tokenChecker"))

routes.post("/business/add",businessController.add)
routes.post("/business/update",businessController.update)
routes.post("/business/hardDelete",businessController.hardDelete)
routes.post("/business/softDelete",businessController.softDelete)


routes.post("/tourist/add",touristController.add)
routes.post("/tourist/update",touristController.update)
routes.post("/tourist/hardDelete",touristController.hardDelete)
routes.post("/tourist/softDelete",touristController.softDelete)

module.exports = routes