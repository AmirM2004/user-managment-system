const express = require("express"); 
const router = express.Router();


const dashbordController = require("./../controllers/dashbordController")
const UserValidator =  require("./../validators/edituservalidator")
const uploadUserProfile = require("./../upload/uploadUserProfile")

  
router.use((req , res , next) => {if(req.isAuthenticated()){ return next();}
    res.redirect("/") ;
})

router.get('/', dashbordController.index.bind(dashbordController)) ;

router.post('/edituser', uploadUserProfile.single("img")  ,  (req , res  , next) => {
    if(!req.file){
        req.body.img = null
    }else{
        req.body.img = req.file.filename 
    }
    next();
}

, UserValidator.handel() , dashbordController.edituser.bind(dashbordController)) ;

module.exports = router ;