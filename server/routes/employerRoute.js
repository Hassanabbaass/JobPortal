const {registerEmployer,addEmployer, getEmployer, updateEmployer,deleteEmployer} = require('../controllers/employerController')
const Router = require('express').Router;
const passport = require('passport');
const passportConfig = require('../passport');
const JWT = require('jsonwebtoken');

// initialize express router
const employerRouter = Router();

// POST request 
employerRouter.post('/add', addEmployer);

// GET request
employerRouter.get('/', getEmployer);

// PUT request 
employerRouter.put('/:id/update', updateEmployer);

// DELETE request
employerRouter.delete('/:id/delete', deleteEmployer);
//registration for employer
employerRouter.post('/registerEmployer', registerEmployer);

const signToken=employerID =>{
    return JWT.sign({
        iss :"NoobCoder1",
        //pk of the user
        sub : employerID
    },"NoobCoder1",{expiresIn:"7d"});
}

//login for employer
employerRouter.post('/loginEmployer',  passport.authenticate('local',{session:false}),(req,res)=>{
    if(req.isAuthenticated()){
       const {_id,Email,Password}=req.user;
       const token=signToken(_id);
       res.cookie('access_token',token,{httpOnly:true, sameSite:true});
       res.status(200).json({isAuthenticated:true,employer:{Email,Password}});
    }
});

employerRouter.get('/logoutEmployer',passport.authenticate('jwt',{session:false}),(req,res)=>{
    res.clearCookie('access_token');
    res.json({user:{usernameField:"",passwordField:""},success:true});
   
   });
  
  

module.exports = employerRouter;