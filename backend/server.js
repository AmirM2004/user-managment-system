const express = require("express"); 
const app = express();
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('connect-flash');
const mongoose = require('mongoose');

const passport = require("passport"); //New

const Mongostore = new require("connect-mongo")(session) ; // New >> for save cookies in database automaticlly
mongoose.connect('mongodb://127.0.0.1:27017/test');

require('dotenv').config();

global.config = require("./config");

app.use(express.static(__dirname + "/public")); 
app.use(express.urlencoded({extended : false})); 

app.set("view engine" , "ejs") ;

app.use(methodOverride('method'));

 
app.use(cookieParser(process.env.COOKIE_SECRET)); 
app.use(flash());
app.use(session({ secret: process.env.SESSION_SECRET, resave: true, saveUninitialized: true,
    cookie : {expires : new Date(Date.now() + (1000 * 3600 * 24 * 1))}, // New
    store : new Mongostore({mongooseConnection : mongoose.connection})
}));
  

require("./passport/passport-local.js")
app.use(passport.initialize())
app.use(passport.session())


app.use((req , res , next) =>{
    
    res.locals = {errors : req.flash('errors') , req} ; // after use login and log out function we have user information in here
    next();
}) // NEwww >>> for dont use this code in all code just use it once

app.get("/" , (req , res) => {res.render("index") ;}) ; 

app.use("/" , require("./routes/index.js"));
 
app.listen( config.port , ()=>{console.log(`server is runnig on port ${config.port}`)})