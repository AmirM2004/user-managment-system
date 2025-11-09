let Controller = require("./controller") ;

const User = require("./../models/user")

const { body, validationResult } = require('express-validator'); 

class dashbordController extends Controller {

    async index(req, res , next) { 

        try {
            res.render("dashbord/index" , )
        } catch (error) { next(error); } }

    async edituser(req, res , next) { 

        try {


            const result = validationResult(req);
            if (!result.isEmpty()) {
                let myerrors = result.array().map(err => err.msg)
                req.flash('errors', myerrors);
                return res.redirect("/dashbord");
            };
            
            let data  = {name : req.body.name , }
            if (req.file){
                data.img = req.file.path.replace(/\\/g , "/").substring(6)
            }

            await User.updateOne({_id : req.user.id} , {$set : data})

            res.redirect("/dashbord")
            
        } catch (error) { next(error); } }

}



module.exports = new dashbordController ; 