const mongoose = require('mongoose');
const adminModel = require('../models/admin')



// POST request to add a car
const addAdmin = async (req, res) => {
    try{
        const admin=req.body;
        const result = await adminModel.create(admin);
        if(result){
            res.status(201).json({message:"added admin"})
        }else{
            res.status(409).json({message:"failed to add admin"})
        }
    
console.log(req.body)
    }catch(error){
        res.status(500).json({message:"internal error"})
    
    }
}
// GET request for a list of all cars
const getAdmin = async (req, res) => {
    try{
        const Email=req.query.Email
        const Password=req.query.Password;
        
        const filters ={}

        // if(maker){
        //     filters.maker=maker
        // } or the syntax below

        Email && (filters.Email=Email)
        Password && (filters.Password=Password)
        
    const admin= await adminModel.find(filters);
    if (admin){
        res.status(200).json(admin);
    }}
    catch(error){
        res.status(500).json({message : "internal error"})

    }
    }

    // PUT request to update a car
const updateAdmin = async (req, res) => {
    const id=req.params.id;
    const result = await adminModel.findByIdAndUpdate(
        id,
        req.body
    )
    console.log(result)
    if(result){
        res.status(200).json({message:"updated admin"})
    }else{
        res.status(409).json({message:"failed to update admin"})
    }}
    
    // DELETE request to delete a car
const deleteAdmin = async (req, res) => {adminModel.findByIdAndRemove(req.params.id, (err, data) => {
    if(!err) {
        // res.send(data);
        res.status(200).json({code: 200, message: 'admin deleted', deleteAdmin: data})
    } else {
        console.log(err);
    }
});
}


module.exports = {addAdmin,getAdmin,updateAdmin,deleteAdmin}