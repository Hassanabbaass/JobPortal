const mongoose = require("mongoose");
const Schema = mongoose.Schema;


var validateEmail = function(Email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(Email)
};


const adminSchema = new Schema({
    Email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        // validate: [validateEmail, 'Please fill a valid email address'],
        // match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    Password:{
            type:String,
            required:true,
            match:/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,
            minlength:5
    }

}, { timestamps: true });

// Create a model with the specific schema
const adminModel = mongoose.model("admin", adminSchema,'admin');
// export the created model
module.exports = adminModel;