let validator = require("./validator") ;

const { body, validationResult } = require('express-validator'); 

class UserValidator extends validator {
    register() {
        return [
        body("name" , "نام نمیتواند خالی باشد").notEmpty() ,
        body("email" , "فرمت ایمیل صحیح نیست").isEmail() ,
        body("password" , "طول پسورد باید حداقل 5 کاراکتر و حداکثر 10 کاراکتر باشد").isLength({min:5 , max:10})  ,]
    }

    login() {
        return [
            body("email" , "فرمت ایمیل صحیح نیست").isEmail() ,
            body("password" , "طول پسورد باید حداقل 5 کاراکتر و حداکثر 10 کاراکتر باشد").isLength({min:5 , max:10})  ,]
        }

}

module.exports = new UserValidator ; 