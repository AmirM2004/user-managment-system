const express = require("express"); 
const router = express.Router();
const { body, validationResult } = require('express-validator'); 
const User = require("./../models/user") // New

// controllers

const UserController = require("./../controllers/userController")

// validators 

const UserValidator =  require("./../validators/userValidator")

router.get('/', UserController.GetAllUsers.bind(UserController)) ;
router.get('/:id', UserController.GetOneUser.bind(UserController)) ;
router.post("/" , UserValidator.handel() ,  UserController.AddUser.bind(UserController)) ; // note : in the readme.txt
router.put("/:id" , UserController.EditUser.bind(UserController)) ;
router.delete("/:id" , UserController.DeleteUser.bind(UserController)) ;

module.exports = router ;