const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const JobSchema = new Schema({
    JobTitle: {
        type: String,
        required: true,
        
    },
    JobDescription: {
        type: String,
        required: true,
      
    },
    AboutCompany:{
        type:String,
        required: true,
      
    },
  
    JobCategory:{
        type: String,
        required:true,
       
    },
    JobType:{
        type: String,
        required:true,
       
    },
    SalaryFrom: {
        type: String,
        required:true,
       
    },
    SalaryTo: {
        type: String,
        required:true,
       
    },
 
    SalaryMonthFix: {
        type: String,
        required:true,
       
    },
    Language: {
        type: String,
        required:true,
       
    },
    DeadlineSubmission:{
       type: String,
       required: true,
  },
  JobLocation:{
    type: String,
    required: true,
}
  


}, { timestamps: true });

// Create a model with the specific schema
const JobModel = mongoose.model("Job", JobSchema);
// export the created model
module.exports = JobModel;