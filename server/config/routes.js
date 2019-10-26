var methods = require("../controllers/users.js");
const mongoose = require('mongoose');
var User = mongoose.model("User");
var passport = require('passport');

module.exports = function (app) {
    app.post('/register', methods.addToDB)
    app.post('/login', methods.login)
    app.get('/user', methods.homePage)
    app.get('/logout', isValidUser, methods.logout)
    app.post('/new/form/:id', methods.createForm)
    app.post('/new/element/:id', methods.createEelement)
    app.get('/getUser', methods.getUser)
    app.get('/viewForm/:id', methods.getForm)
    app.get('/getForms/:id', methods.getForms)
    app.post('/submitForm/:id', methods.createSubmit)
    app.get('/deleteForm/:id', methods.deleteform)
}

function isValidUser(req,res,next){
    if(req.isAuthenticated()) next();
    else return res.status(401).json({message: 'Unauthorized Request'});
}