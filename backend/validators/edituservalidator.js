let validator = require("./validator") ;

const { body, validationResult } = require('express-validator'); 
const path = require("path");

class UserValidator extends validator {
    handel() {
        return [
            body("name" , "نام نمیتواند خالی باشد").notEmpty() , 
            body("img" , "وجود تصویر الزامیست").notEmpty() , 
            body("img" , "وجود تصویر الزامیست").custom(async value => {
                if(!value){return}
                if(![".jpg" , ".jpeg" , ".png"].includes(path.extname(value))){throw new Error("پسوند فایل آپلود شده صحیح نیست")}
            }) , 

            ]
        }
}

module.exports = new UserValidator ; 