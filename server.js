const express = require("express");
const flash = require('express-flash');
var session = require("express-session")
var bodyParser = require('body-parser');
var mongoose = require("mongoose");
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const app = express();

app.listen(3000, function () { }) // i made it 3000 
app.use(flash());
var cors  = require('cors'); // hena
app.use(cors({
    origin:['http://localhost:3000','http://127.0.0.1:3000'],
    credentials:true
  }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ //hena 
    name:"hi",
    secret: "secretkey",
    resave: false,
    saveUninitialized: false,
    cookie:{
        maxAge:36000000,
        httpOnly:false,
        secure:false
    },
}));//*hena

require('./passport-config'); //hena

var passport = require('passport'); //hena

app.use(passport.initialize()); //hena
app.use(passport.session()); //hena

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.json());
app.use(cookieParser()); //hena

app.use(logger('dev')); //hena

//Database
mongoose.connect("mongodb://localhost/angular");
require("./server/config/mongoose.js");

app.use(express.static( __dirname + '/public/dist/formbuilder' ));

// app.use(express.static(__dirname + '/public'));
  
require('./server/config/routes.js')(app) 




