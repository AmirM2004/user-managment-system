let Controller = require("./controller") ;

const User = require("./../models/user")

const { body, validationResult } = require('express-validator'); 

const passport = require("passport")

// const Recaptcha = require('express-recaptcha').RecaptchaV3;
// const options = { hl: 'fa' };
// const SITE_KEY = "1" ;
// const SECRET_KEY = "1" ;
// const recaptcha = new Recaptcha(SITE_KEY, SECRET_KEY, options);


class UserController extends Controller {

    async registerform(req, res , next) { 

        try {
            res.render("auth/register" , )
        } catch (error) { next(error); } }

    async loginform(req, res , next) { 

        try {
            res.render("auth/login" ,)
        } catch (error) { next(error); }}

    async register(req, res , next) { 

        try {

            const result = validationResult(req);
            if (!result.isEmpty()) {
                let myerrors = result.array().map(err => err.msg)
                req.flash('errors', myerrors);
                return res.redirect("/auth/register");
            };

            passport.authenticate("local.register" , {
                failureFlash : true ,
                successRedirect : "/dashbord" ,
                failureRedirect : "/auth/register"

            })(req , res , next)

        } catch (error) { next(error); } 

    }

    async login(req, res , next) { 

        try {
    
            const result = validationResult(req);
            if (!result.isEmpty()) {
                let myerrors = result.array().map(err => err.msg)
                req.flash('errors', myerrors);
                return res.redirect("/auth/login");
            };
            
            passport.authenticate("local.login" , (error , user) =>{

                if(!user) {return res.redirect("/auth/login")}

                req.login(user , error => {return res.redirect("/dashbord")})
            })(req , res , next)


        } catch (error) { next(error); } 

    }
}

module.exports = new UserController ; 