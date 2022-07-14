const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const employerSchema = new Schema({
    Fname: {
        type: String,
        required: true,
        // unique: true,
    },
    Lname: {
        type: String,
        required: true,
        // match: /[a-z]/,
    },
    Email:{
        type:String,
        required: 'Email address is required',
     
    },
    Password:{
            type:String,
            required:true,
            // match:/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,
            // minlength:5
    },
    PhoneNumber:{
        type: Number,
        required:true,
        // length:8
    },
    Gender: {
        type: String,
        enum: ["Male", "Female"],
    },
   CompanyName:{
    type: String,
    required:true,
   }

}, { timestamps: true });

employerSchema.pre('save',function(next){
    if(!this.isModified('Password'))
        return next();
    bcrypt.hash(this.Password,10,(err,passwordHash)=>{
        if(err)
            return next(err);
        this.Password = passwordHash;
        next();
    });
});

employerSchema.methods.comparePassword = function(Password,cb){
    bcrypt.compare(Password,this.Password,(err,isMatch)=>{
        if(err)
            return cb(err);
        else{
            if(!isMatch)
                return cb(null,isMatch);
            return cb(null,this);
        }
    });
}

// Create a model with the specific schema
const employerModel = mongoose.model("employer", employerSchema);
// export the created model
module.exports = employerModel;