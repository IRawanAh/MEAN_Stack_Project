var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

const AnswerSchema = new mongoose.Schema({
    element_name: {type:String },
    answer: {type:String},
    created_at : {type: Date, default: Date.now },
    updated_at : {type: Date, default: Date.now },
 },{timestamps: true });


 const SubmitSchema = new mongoose.Schema({
    answers: [AnswerSchema],
    created_at : {type: Date, default: Date.now },
    updated_at : {type: Date, default: Date.now },
 },{timestamps: true });


const EelementSchema = new mongoose.Schema({
    type: {type:String , required:true},
    icon: { type: String },
    label: { type: String },
    description:{ type: String },
    required:{type:Boolean, default:false},
    placeholder: { type: String },
    className: { type: String },
    subtype: { type: String },
    regex : { type: String },
    handle:{type:Boolean},
 },{timestamps: true });

 const Element = mongoose.model('Element', EelementSchema);


 const FormSchema = new mongoose.Schema({
    name: {type:String , required:true},
    description:{type:String},
    theme:{
      bannerImage: {type:String },
      bgColor: {type:String },
      textColor: {type:String },
    },
    attributes: [mongoose.Schema.Types.Mixed],
    submissions: [mongoose.Schema.Types.Mixed],
 },{timestamps: true });

 const Form = mongoose.model('Form', FormSchema);


 var UserSchema = new mongoose.Schema({
   email: { type: String, required: true},
   username: { type: String, required: true},
   password: { type: String, required: true},
   forms:[FormSchema],
}, { timestamps: true })

// const User = mongoose.model('User', UserSchema);

UserSchema.statics.hashPassword = function hashPassword(password){
   return bcrypt.hashSync(password,10);
}

UserSchema.methods.isValid = function (hashedPassword){
   return bcrypt.compareSync(hashedPassword,this.password);
}

mongoose.model('User',UserSchema);

module.exports = mongoose.model('User',UserSchema);