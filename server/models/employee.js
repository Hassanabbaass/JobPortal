const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const employeeSchema = new Schema({
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
     
        // match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
     
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
    Age: {
        type: Number,
        min: [18, "Min age is 18 years"],
        max: 75,
    },
   
    //  <a href="#" onclick="window.open('MyPDF.pdf', '_blank', 'fullscreen=yes'); return false;">MyPDF</a>
  Resume:{
  // type: 'application/pdf',
    type: String,
  },
  ProfilePicture:{
    //   required:true,
      type:String,
  }

}, { timestamps: true });

employeeSchema.pre('save',function(next){
    if(!this.isModified('Password'))
        return next();
    bcrypt.hash(this.Password,10,(err,passwordHash)=>{
        if(err)
            return next(err);
        this.Password = passwordHash;
        next();
    });
});

employeeSchema.methods.comparePassword = function(Password,cb){
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
const employeeModel = mongoose.model("employee", employeeSchema);
// export the created model
module.exports = employeeModel;