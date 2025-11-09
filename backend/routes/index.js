const express = require("express"); 
// const { route } = require("./user.js");
const { config } = require("dotenv");
const {debug} = require("./../config.js");
const router = express.Router();

router.use("/user" , require("./user.js")); 
router.use("/auth" , require("./auth.js")); 
router.use("/dashbord" , require("./dashbord.js")); 

router.get("/logout" , (req , res , next) => {

    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/');
      });
      
}) //new

router.all("*" , async (req , res , next) => {
    try {
        let error = new Error("چنین صفحه ای یافت نشد !");
        error.status = 404 ;
        throw error ;
    }catch(error){
        next(error);
    }}); // NEw

router.use((error , req , res , next) => {
    const code = error.status || 500
    const message = error.message || "ارور سمت سرور"
    const stack = error.stack || ""
        
    if(debug){
            return res.render("./../views/errors/developer" , {message , stack})
    }else {
        return res.render(`./../views/errors/${code}` , {message})}
            
    });
    
module.exports = router ;