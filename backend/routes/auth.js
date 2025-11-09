const express = require("express"); 
const router = express.Router();
const { body, validationResult } = require('express-validator'); 
const User = require("./../models/user") // New

// controllers

const authController = require("./../controllers/authcontroller")

// validators 

const authValidator =  require("./../validators/authvalidator")


router.use((req , res , next) => {

    if(req.isAuthenticated()){
        return res.redirect("/dashbord") ;
    }
    
    next();

})

router.get('/login', authController.loginform.bind(authController)) ;
router.get('/register', authController.registerform.bind(authController)) ;


router.post('/login', authValidator.login() , authController.login.bind(authController)) ;
router.post('/register', authValidator.register() , authController.register.bind(authController)) ;

module.exports = router ;