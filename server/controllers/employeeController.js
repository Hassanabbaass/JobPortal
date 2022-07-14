const mongoose = require('mongoose');
const employeeModel = require('../models/employee');
const passport = require('passport');
const passportConfig = require('../passport');
const JWT = require('jsonwebtoken');




// registration for employee
const registerEmployee = async  (req,res) => {
    const {Fname,Lname,Email,Password,PhoneNumber,Gender,Age,Resume,ProfilePicture} = req.body;
    employeeModel.findOne({Email},(err,employee) => {
        if(err)
            res.status(500).json({message : {msgBody: "Error has occured" , msgError: true}})
        if(employee)
            res.status(400).json({message : {msgBody: "Email already taken" , msgError: true}})
        else{
            const newEmployee = new employeeModel({Fname,Lname,Email,Password,PhoneNumber,Gender,Age,Resume,ProfilePicture});
            newEmployee.save(err=>{
                if(err)
                    res.status(500).json({message : {msgBody: "Error has occured" , msgError: true}})
                else
                    res.status(201).json({message : {msgBody: "Employee Successfully created" , msgError: false}})
            });
        }
    });
}

// //login for employee


const loginEmployee = ( passport.authenticate('local',{session:false}),(req,res)=>{
    if(req.isAuthenticated()){
       const {_id,Email,Password}=req.employee;
       const token=signToken(_id);
       res.cookie('access_token',token,{httpOnly:true, sameSite:true});
       res.status(200).json({isAuthenticated:true,employee:{Email,Password}});
    }
 
});
 



// POST request to add an employee
const addEmployee = async (req, res) => {
    try{
        const employee=req.body;
        const result = await employeeModel.create(employee);
        if(result){
            res.status(201).json({message:"added employee"})
        }else{
            res.status(409).json({message:"failed to add employee"})
        }
    
console.log(req.body)
    }catch(error){
        res.status(500).json({error})
    console.log(error);
    }
}


// GET request for a list of all cars
const getEmployee = async (req, res) => {
    try{
        const Fname=req.query.Fname;
        const Lname=req.query.Lname;
        const Email=req.query.Email;
        const Password=req.query.Password;
        const PhoneNumber=req.query.PhoneNumber;
        const Gender=req.query.Gender;
        const Age=req.query.Age;
        const Resume=req.query.Resume;
        const ProfilePicture=req.query.ProfilePicture;
        
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
        Age && (filters.Age=Age)
        Resume && (filters.Resume=Resume)
        ProfilePicture && (filters.ProfilePicture=ProfilePicture)

        
    const employee= await employeeModel.find(filters);
    if (employee){
        res.status(200).json(employee);
    }}
    catch(error){
        res.status(500).json({message : "internal error"})

    }
    }

    // PUT request to update a car
const updateEmployee = async (req, res) => {
    const id=req.params.id;
    const result = await employeeModel.findByIdAndUpdate(
        id,
        req.body
    )
    console.log(result)
    if(result){
        res.status(200).json({message:"updated employee"})
    }else{
        res.status(409).json({message:"failed to update employee"})
    }}
    
    // DELETE request to delete a car
const deleteEmployee = async (req, res) => {employeeModel.findByIdAndRemove(req.params.id, (err, data) => {
    if(!err) {
        // res.send(data);
        res.status(200).json({code: 200, message: 'employee deleted', deleteEmployee: data})
    } else {
        console.log(err);
    }
});
}


module.exports = {registerEmployee, addEmployee,getEmployee,updateEmployee,deleteEmployee}