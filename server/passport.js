const passport=require('passport');
const LocalStrategy=require('passport-local').Strategy;
const JwtStrategy=require('passport-jwt').Strategy;
const employeeModel =require('./models/employee');
const employerModel =require('./models/employer');

const cookieExtractor=req=>{
    let token=null;
    if(req && req.cookies){
        token = req.cookies["access_token"];
    }
    console.log(req.cookies);
    return token;
}

//Employee

//authorization to protect the end point(todos)
passport.use(new JwtStrategy({
    jwtFromRequest: cookieExtractor,
    secretOrKey:"NoobCoder"
},(payload,done)=>{
  
    employeeModel.findById({_id:payload.sub},(err,employee)=>{
        if(err){
            return done(err,false);
        }
        if(employee)
        return done (null,employee);
        else 
        return done(null,false);
    });
}));
//authenticated local strategy using username and password
passport.use(new LocalStrategy({
    usernameField: "Email",
    passwordField: "Password"
},(Email,Password,done)=>{
    employeeModel.findOne({Email},(err,employee)=>{
        if(err)
           return done(err);
        if(!employee)
           return done(null,false);
    //check if password is correct
        employee.comparePassword(Password,done);
        
    });
}));

//Employer

//authorization to protect the end point(todos)
passport.use(new JwtStrategy({
    jwtFromRequest: cookieExtractor,
    secretOrKey:"NoobCoder1"
},(payload,done)=>{
  
    employerModel.findById({_id:payload.sub},(err,employer)=>{
        if(err){
            return done(err,false);
        }
        if(employer)
        return done (null,employer);
        else 
        return done(null,false);
    });
}));
//authenticated local strategy using username and password
passport.use(new LocalStrategy({
    usernameField: "Email",
    passwordField: "Password"
},(Email,Password,done)=>{
    employerModel.findOne({Email},(err,employer)=>{
        if(err)
           return done(err);
        if(!employer)
           return done(null,false);
    //check if password is correct
        employer.comparePassword(Password,done);
        
    });
}));