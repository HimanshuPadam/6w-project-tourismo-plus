const routes = require("express").Router()

const businessController = require("../apis/Business/businessController")
const touristController = require("../apis/Tourist/touristController")
routes.post("/business/getAll",businessController.getAll)
routes.post("/tourist/getAll",touristController.getAll)


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