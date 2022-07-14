const {addEmployee, getEmployee, updateEmployee,deleteEmployee,registerEmployee} = require('../controllers/employeeController')
const Router = require('express').Router;
const passport = require('passport');
const passportConfig = require('../passport');
const JWT = require('jsonwebtoken');



// initialize express router
const employeeRouter = Router();

// POST request to add a car
employeeRouter.post('/add', addEmployee);

// GET request for a list of all cars 
employeeRouter.get('/', getEmployee);

// PUT request to update a car 
employeeRouter.put('/:id/update', updateEmployee);

// DELETE request to delete a car
employeeRouter.delete('/:id/delete', deleteEmployee);

//registration for employee
employeeRouter.post('/registerEmployee', registerEmployee);

const signToken=employeeID =>{
    return JWT.sign({
        iss :"NoobCoder",
        //pk of the user
        sub : employeeID
    },"NoobCoder",{expiresIn:"7d"});
}

//login for employee
employeeRouter.post('/loginEmployee',  passport.authenticate('local',{session:false}),(req,res)=>{
    if(req.isAuthenticated()){
       const {_id,Email,Password}=req.user;
       const token=signToken(_id);
       res.cookie('access_token',token,{httpOnly:true, sameSite:true});
       res.status(200).json({isAuthenticated:true,employee:{Email,Password}});
    }
});

employeeRouter.get('/logoutEmployee',passport.authenticate('jwt',{session:false}),(req,res)=>{
    res.clearCookie('access_token');
    res.json({user:{usernameField:"",passwordField:""},success:true});
   
   });
  


module.exports = employeeRouter;