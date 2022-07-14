const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const resumeSchema = new Schema({
    Fname: {
        type: String,
        required: false,
        unique: true,
    },
    Lname: {
        type: String,
        required: false,
        // match: /[a-z]/,
    },
    Email:{
        type:String,
        // required: 'Email address is required',
        // validate: [validateEmail, 'Please fill a valid email address'],
        // match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
     
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
    DateOfBirth: {
        type: String,
        // default : Date.now
     },
    //  <a href="#" onclick="window.open('MyPDF.pdf', '_blank', 'fullscreen=yes'); return false;">MyPDF</a>
 About:{
    type: String,
    required: true,
  },
  Education:{
    type: String,
    required: true,
  },
  Experience:{
    type: String,
    required: true,
  },
  Skills:{
    type: String,
    required: true,
  }
  


}, { timestamps: true });

// Create a model with the specific schema
const resumeModel = mongoose.model("resume", resumeSchema);
// export the created model
module.exports = resumeModel;