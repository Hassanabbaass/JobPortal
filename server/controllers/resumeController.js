const mongoose = require('mongoose');
const resumeModel = require('../models/resume')



// POST request to add a car
const addResume = async (req, res) => {
    try{
        const resume=req.body;
        const result = await resumeModel.create(resume);
        if(result){
            res.status(201).json({message:"resume added"})
        }else{
            res.status(409).json({message:"failed to add resume"})
        }
    
console.log(req.body)
    }catch(error){
        res.status(500).json({error})
    console.log(error);
    }
}
// GET request for a list of all cars
const getResume = async (req, res) => {
    try{
        const Fname=req.query.Fname;
        const Lname=req.query.Lname;
        const Email=req.query.Email;
        const PhoneNumber=req.query.PhoneNumber;
        const Gender=req.query.Gender;
        const DateOfBirth=req.query.DateOfBirth;
        const About=req.query.About;
        const Education=req.query.Education;
        const Experience=req.query.Experience;
        const Skills=req.query.Skills;
        const filters ={}

        // if(maker){
        //     filters.maker=maker
        // } or the syntax below

        Fname && (filters.Fname=Fname)
        Lname && (filters.Lname=Lname)
        Email && (filters.Email=Email)
        PhoneNumber && (filters.PhoneNumber=PhoneNumber)
        Gender && (filters.Gender=Gender)
        DateOfBirth && (filters.DateOfBirth=DateOfBirth)
        About && (filters.About=About)
        Education && (filters.Education=Education)
        Experience && (filters.Experience=Experience)
        Skills && (filters.Skills=Skills)
      





        
    const resume= await resumeModel.find(filters);
    if (resume){
        res.status(200).json(resume);
    }}
    catch(error){
        res.status(500).json({message : "internal error"})

    }
    }

    // PUT request to update a car
const updateResume = async (req, res) => {
    const id=req.params.id;
    const result = await resumeModel.findByIdAndUpdate(
        id,
        req.body
    )
    console.log(result)
    if(result){
        res.status(200).json({message:"resume updated"})
    }else{
        res.status(409).json({message:"failed to update resume"})
    }}
    
    // DELETE request to delete a car
const deleteResume = async (req, res) => {resumeModel.findByIdAndRemove(req.params.id, (err, data) => {
    if(!err) {
        // res.send(data);
        res.status(200).json({code: 200, message: 'resume deleted', deleteResume: data})
    } else {
        console.log(err);
    }
});
}


module.exports = {addResume,getResume,updateResume,deleteResume}