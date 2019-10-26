const mongoose = require('mongoose');
var User = mongoose.model("User");
Form = mongoose.model('Form');
Element = mongoose.model('Element');
var passport = require('passport');
var user_id = 0;
module.exports = {
    addToDB: async function(req, res) {
        var user = User({
            email: req.body.email,
            username: req.body.username,
            password: User.hashPassword(req.body.password)
        })
        try{
            doc = await user.save();
            console.log("hey soso");
            return res.status(201).json(doc);
        }
        catch(err){
            return res.status(501).json(err);
        }
    },
    login: function(req,res,next){
        passport.authenticate('local', function(err, user, info) {
            if (err) {         console.log("hey so");
            return res.status(501).json(err); }
            if (!user) { return res.status(501).json(info); }
            req.logIn(user, function(err) {
              if (err) { return res.status(501).json(err); }
              user_id = user._id;
              return res.status(200).json({message:user.username});
            });
          })(req, res, next);
    },
    homePage: function(req,res,next){
        // return res.status(200).json(req.user);
        Form.find({} , function(err , data){
            if(err){
                console.log("Error")
            }
            else{
                return res.status(200).json(data);
            }
        })
    },
    getUser: function(req,res,next){
        return res.status(200).json(user_id);
    },
    logout: function(req,res,next){
        req.logout();
        return res.status(200).json({message:'Logout Success'});
    },
    createForm: function (req, res) {
        console.log("____")

        Form.create(req.body, function (err, data) {
            if (err) {
               console.log("Error" , err)
            }
            else {
                User.findOneAndUpdate({ _id: req.params.id }, { $push: { forms: data } }, function (err, data) {
                    if (err) {
                        console.log("Error" , err)
                    }
                    // else {
                    //     res.json(data)
                    // }
                })
            }
            res.json(data._id)
        })
    },
    createSubmit: function (req, res) {
        console.log(req.body )
        Form.findOneAndUpdate({ _id: req.params.id }, { $push: { submissions: req.body } }, function (err, data) {
            if (err) {
                console.log("Error" , err)
            }
            else {
                console.log("ssuuuuuuuuccccess" )

            }
        })

    },
    getForm: function(req,res,next){

        Form.find({ _id: req.params.id }, function (err, data) {
            if (err) {
                console.log("Error" , err)
            }
            else {
                return res.status(200).json(data);
             } 
        })
    },
    deleteform: function(req,res,next){
        Form.remove({ _id:  req.params.id  }, function (err, data) {
            if (err) {
                console.log("Error" , err)
            }
            else {
                User.findOneAndUpdate( { _id: user_id }, { $pull: { forms: { _id: req.params.id  } } } ,function (err, data) {
                    if (err) {
                        console.log("Error" , err)
                    }
                    else {
                        console.log("success deleting", req.params.id);
                     } 
                })
             } 

        })

    },
    getForms: function(req,res,next){

        User.find({ _id: req.params.id }, function (err, data) {
            if (err) {
                console.log("Error" , err)
            }
            else {
                return res.status(200).json(data[0].forms);
             } 
        })
    },
    createEelement: function (req, res) {
        // Element.create(req.body, function (err, data) {
        //     if (err) {
        //        console.log("Error" , err)
        //     }
        //     else {
        //         User.find({ _id: user_id }, function (err, data) {
        //             if (err) {
        //                 console.log("Error" , err)
        //              }
        //              else {
        //                  Form.findAndModify({ _id: body.params.id },  { $push: { elements: data } },function (err, data) {
        //                      if (err) {
        //                          console.log("Error" , err)
        //                      }
        //                      else {
        //                          res.json("i am here")
        //                      }
        //                  })
        //              }
        //             //  res.json(data._id)
        //         })
        //     }
        //     // res.json(data._id)
        // })


        
        // another solution 



        // Element.create(req.body, function (err, data) {
        //     Element.save()
        //         .then(newData => {
        //             User.find({ _id: user_id})
        //             .then(
        //                 form.findOneAndUpdate({ _id: req.params.id} , { $push: { elements: data } } )
        //             )
        //         })
        //     })
        // var usere;
        // var forme;
        // console.log("____")
        // Element.create(req.body, function (err, data) {
            // if (err) {
            //     console.log("Error" , err)
            // }
            // else 
            // {
            //     User.findOneAndUpdate({ _id: user_id}, function (err, data) {
            //         if (err) {
            //             console.log("Error" , err)
            //         }
            //         else {
            //             usere = data
            //         }
            //     })
            //     Form.find({ _id: body.params.id}, { $push: { elements: data } }, function (err, data) {
            //         if (err) {
            //             console.log("Error" , err)
            //         }
            //         else {
            //             forme = data
            //         }
            //     })
            // }
            
        // })
    
    }
};