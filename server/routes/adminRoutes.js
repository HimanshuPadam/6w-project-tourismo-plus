const userController = require("../apis/User/userController")


routes.post("/user/login",userController.Login)
routes.use(require("../middleware/adminTokenChecker"))