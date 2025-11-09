let Controller = require("./controller") ;

const User = require("./../models/user")

const { body, validationResult } = require('express-validator'); 

const bcrypt = require('bcrypt');

class UserController extends Controller {


    async GetAllUsers(req, res , next) { 

        try {
    
            let users = await User.find({});
    
            res.render("users" , {users : users , title : "همه کاربران" , message : req.flash('message')});

        } catch (error) { next(error); } // we use this to go in the next router

    }

    async GetOneUser(req, res , next) { 

        try {

            let user = await User.findOne({_id : req.params.id});
            
            if(!user){this.error("چنین کاربری یافت نشد" , 500)}

            res.render("one_user" , {user : user , title : "یک کاربر"});

        } catch (error) {next(error);}

    }

    async AddUser(req , res  , next) { 

        try {
            
            const result = validationResult(req);
            if (!result.isEmpty()) {
                let myerrors = result.array().map(err => err.msg)
                req.flash('errors', myerrors);
                return res.redirect("/user");
            };
            
            let newUser = new User({ email : req.body.email , password : bcrypt.hashSync(req.body.password, 8) , name : req.body.name ,})
        
            await newUser.save();
            req.flash('message', "کاربر با موفقیت اضافه شد");
            return res.redirect("/user");

        } catch (error) {next(error);}
        
    }

    async  EditUser(req , res , next)  { 

        
        try {
            
            await User.updateMany({_id : req.params.id} , {$set : req.body}) ;
        
            req.flash('message', "کاربر با موفقیت ویرایش شد");
            return res.redirect(`/user`);
        } catch (error) {next(error);}
    
    }

    async  DeleteUser(req , res , next)  {

        
        try {
            
            await User.deleteOne({_id : req.params.id})
        
            req.flash('message', "کاربر با موفقیت حذف شد");
        
            return res.redirect("/user");
        } catch (error) {next(error);}
        
    
    }
}

module.exports = new UserController ; 