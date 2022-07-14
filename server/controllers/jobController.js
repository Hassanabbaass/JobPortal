const mongoose = require('mongoose');
const JobModel = require('../models/jobs')



// POST request to add a job
const addJob = async (req, res) => {
    try{
        const job=req.body;
        const result = await JobModel.create(job);
        if(result){
            res.status(201).json({message:"job added"})
        }else{
            res.status(409).json({message:"failed to add job"})
        }
    
console.log(req.body)
    }catch(error){
        res.status(500).json({error})
    console.log(error);
    }
}
// GET request for a list of all jobs
const getJob = async (req, res) => {
    try{
        const JobTitle=req.query.JobTitle;
        const JobDescription=req.query.JobDescription;
        const AboutCompany=req.query.AboutCompany;
        const JobCategory=req.query.JobCategory;
        const JobType=req.query.JobType;
        const SalaryFrom=req.query.SalaryFrom;
        const SalaryTo=req.query.SalaryTo;
        const SalaryMonthFix=req.query.SalaryMonthFix;
        const Language=req.query.Language;
        const DeadlineSubmission= req.body.DeadlineSubmission;
        const JobLocation= req.body.JobLocation;
        
        const filters ={}

        // if(maker){
        //     filters.maker=maker
        // } or the syntax below

        JobTitle && (filters.JobTitle=JobTitle)
        JobDescription && (filters.JobDescription=JobDescription)
        AboutCompany && (filters.AboutCompany=AboutCompany)
        JobCategory && (filters.JobCategory=JobCategory)
        JobType && (filters.JobType=JobType)
        SalaryFrom && (filters.SalaryFrom=SalaryFrom)
        SalaryTo && (filters.SalaryTo=SalaryTo)
        SalaryMonthFix && (filters.SalaryMonthFix=SalaryMonthFix)
        Language && (filters.Language=Language)
        DeadlineSubmission && (filters.DeadlineSubmission=DeadlineSubmission)
        JobLocation && (filters.JobLocation=JobLocation)





        
    const job= await JobModel.find(filters);
    if (job){
        res.status(200).json(job);
    }}
    catch(error){
        res.status(500).json({message : "internal error"})
        console.log(error);
    }
    }

    // PUT request to update a car
const updateJob = async (req, res) => {
    const id=req.params.id;
    const result = await JobModel.findByIdAndUpdate(
        id,
        req.body
    )
    console.log(result)
    if(result){
        res.status(200).json({message:"Job Updated"})
    }else{
        res.status(409).json({message:"failed to update Job"})
    }}
    
    // DELETE request to delete a car
const deleteJob = async (req, res) => {JobModel.findByIdAndRemove(req.params.id, (err, data) => {
    if(!err) {
        // res.send(data);
        res.status(200).json({code: 200, message: 'Job deleted', deleteJob: data})
    } else {
        console.log(err);
    }
});
}


module.exports = {addJob,getJob,updateJob,deleteJob}