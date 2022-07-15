import React, {useState} from 'react'
import './Signup.css'

import SignupEmployee from '../SignupEmployee/SignupEmployee';
import SignupEmployer from '../SignupEmployer/SignupEmployer';



  //axios
import { loginEmployee } from '../../Services/LoginEmployeeService';
import { loginEmployer } from '../../Services/LoginEmployerService';

//axios test
import { EmployeeInfo } from '../../Services/getEmployeeInfo';

function Signup() {

const [Email,setEmail] = useState('');
const [Password,setPassword] = useState('');
  //handeling email and pass 
const HandleEmail = (e) => {
  setEmail(e.target.value)
}
const HandlePassword = (e) => {
  setPassword(e.target.value)
}
  //handeling login 
const HandleLogin = (e) => {

  e.preventDefault()
  
    loginEmployee(Email,Password)

    loginEmployer(Email,Password)
 
  

                     
}


//axios text still here
const HandleEmployeeInfo = () => {
  EmployeeInfo().then(result =>{
    console.log(result.data[0]._id)
  })
}




const [active, setActive] = useState(false);
const [mode, setMode] = useState(false);

function setactivityEmployee() {
  setActive(true)
  setMode(true)
}

function setactivityEmployer(){
  setActive(false)
  setMode(true)
}

function setloginpage(){
  setMode(false)
}



  return (
    <div>
      <div className={mode ? 'container sign-up-mode' : 'container'}>
      
  <div className="forms-container">
    <div className="signin-signup">

      <form action="#" className="sign-in-form">
        <h2 className="title">Sign in</h2>
        <div className="input-field">
          <i className="bi bi-person" />
          <input type="text" placeholder="Email" value={Email} onChange={HandleEmail}/>
        </div>
        <div className="input-field">
          <i className="bi bi-lock" />
          <input type="password" placeholder="Password" value={Password} onChange={HandlePassword}/>
        </div>
        <input type="submit" defaultValue="Login" className="btnn solid" onClick={HandleLogin} />

         {/* tajrobe ma tdee3 */}
        <button className="btnn" id="sign-up-btn" onClick={function(event){ HandleEmployeeInfo()}}>
          get user info after login
        </button>
        <p> Hi my name is alex</p>

       
      </form>
     
      <form className="sign-up-form">
          <>
            {active ? <SignupEmployee/> : <SignupEmployer />}
          </>
      </form>

    </div>
  </div>
  <div className="panels-container">
    <div className="panel left-panel">
      <div className="content">
        <h3>New here ?</h3>
        <p>
          Sign up as either an employee or an employer
        </p>
        <button className="btnn transparent" id="sign-up-btn" onClick={function(event){ setactivityEmployee()}} >
          Employee
        </button>
        <button className="btnn transparent" id="sign-up-btn" onClick={function(event){ setactivityEmployer()}}>
          Employer
        </button>
      </div>
      <img src={require("../img/office.png")} className="image" alt="" />
    </div>
    <div className="panel right-panel">
      <div className="content">
        <h3>One of us ?</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          laboriosam ad deleniti.
        </p>
        <button className="btnn transparent" id="sign-in-btnn" onClick={function(event){ setloginpage()}}>
          Sign in
        </button>




      </div>
      <img src={require("../img/company.png")} className="image" alt="" />
    </div>
  </div>
</div>

    </div>
  )




}

export default Signup