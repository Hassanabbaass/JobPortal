const mongoose = require('mongoose');
const employerModel = require('../models/employer');
const passport = require('passport');
const passportConfig = require('../passport');
const JWT = require('jsonwebtoken');



// registration for employer
const registerEmployer = async  (req,res) => {
    const {Fname,Lname,Email,Password,PhoneNumber,Gender,CompanyName} = req.body;
    employerModel.findOne({Email},(err,employee) => {
        if(err)
            res.status(500).json({message : {msgBody: "Error has occured" , msgError: true}})
        if(employee)
            res.status(400).json({message : {msgBody: "Email already taken" , msgError: true}})
        else{
            const newEmployer = new employerModel({Fname,Lname,Email,Password,PhoneNumber,Gender,CompanyName});
            newEmployer.save(err=>{
                if(err)
                    res.status(500).json({message : {msgBody: "Error has occured" , msgError: true}})
                else
                    res.status(201).json({message : {msgBody: "Employer Successfully created" , msgError: false}})
            });
        }
    });
}
// POST request 
const addEmployer = async (req, res) => {
    try{
        const employer=req.body;
        const result = await employerModel.create(employer);
        if(result){
            res.status(201).json({message:"added employer"})
        }else{
            res.status(409).json({message:"failed to add employer"})
        }
    
console.log(req.body)
    }catch(error){
        res.status(500).json({error})
    console.log(error);
    }
}
// GET request 
const getEmployer = async (req, res) => {
    try{
        const Fname=req.query.Fname;
        const Lname=req.query.Lname;
        const Email=req.query.Email;
        const Password=req.query.Password;
        const PhoneNumber=req.query.PhoneNumber;
        const Gender=req.query.Gender;
        const CompanyName=req.query.CompanyName;
       
        
        const filters ={}

        // if(maker){
        //     filters.maker=maker
        // } or the syntax below

        Fname && (filters.Fname=Fname)
        Lname && (filters.Lname=Lname)
        Email && (filters.Email=Email)
        Password && (filters.Password=Password)
        PhoneNumber && (filters.PhoneNumber=PhoneNumber)
        Gender && (filters.Gender=Gender)
        CompanyName && (filters. CompanyName= CompanyName)
       





        
    const employer= await employerModel.find(filters);
    if (employer){
        res.status(200).json(employer);
    }}
    catch(error){
        res.status(500).json({message : "internal error"})

    }
    }

    // PUT request to update
const updateEmployer = async (req, res) => {
    const id=req.params.id;
    const result = await employerModel.findByIdAndUpdate(
        id,
        req.body
    )
    console.log(result)
    if(result){
        res.status(200).json({message:"updated employer"})
    }else{
        res.status(409).json({message:"failed to update employer"})
    }}
    
    // DELETE request 
const deleteEmployer = async (req, res) => {employerModel.findByIdAndRemove(req.params.id, (err, data) => {
    if(!err) {
        // res.send(data);
        res.status(200).json({code: 200, message: 'employer deleted', deleteEmployer: data})
    } else {
        console.log(err);
    }
});
}


module.exports = {registerEmployer,addEmployer,getEmployer,updateEmployer,deleteEmployer}