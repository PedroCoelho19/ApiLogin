const router = require("express").Router();
const User = require("../models/User");
const ControllerUser = require("../controllers/userControllers");

//Register User
router.post("/register", ControllerUser.postUser);

//Login
router.post("/login", ControllerUser.login);

//Buscar usuários (Get)
router.get("/getAll",  ControllerUser.getUsers);

//Rota privada (usando para buscar a imagem de perfil)
router.get("/getId/:id", ControllerUser.userId);

module.exports = router;
