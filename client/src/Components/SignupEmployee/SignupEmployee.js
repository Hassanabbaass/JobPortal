import React , {useState} from 'react'


//axios
import { registerEmployee } from '../../Services/registerEmployee';

function SignupEmployee() {
    const [FnameEmployee, setFnameEmployee] = useState('');
    const [LnameEmployee, setLnameEmployee] = useState('');
    const [EmailEmployee, setEmailEmployee] = useState('');
    const [PasswordEmployee, setPasswordEmployee] = useState('');
    const [PhoneNumberEmployee, setPhoneNumberEmployee] = useState('');
    const [AgeEmployee, setAgeEmployee] = useState('');

    
    const [GenderEmployee, setGenderEmployee] = useState('');
    const handleGender = (e) => {
      const target = e.target;
      if (target.checked) {
        setGenderEmployee(target.value);
      }
    }

    const handleRegisterEmployee = (e) => {
      console.log({FnameEmployee,LnameEmployee,EmailEmployee,PasswordEmployee,PhoneNumberEmployee,AgeEmployee,GenderEmployee})
      registerEmployee(FnameEmployee,LnameEmployee,EmailEmployee,PasswordEmployee,PhoneNumberEmployee,GenderEmployee,AgeEmployee)
      .then(result=> {
          console.log(result)
      }).catch(error =>{ 
        console.log(error)
      })
    }




  return (
    <>
    
    <h3 className="title">Sign up as Employee</h3>
    <table>
        <tbody>
   
      <tr>
        <td>
          <div className="input-field" id='fname1'>
          <i className="bi bi-person" />
          <input type="text" placeholder="First Name" value={FnameEmployee} onChange={(e)=> setFnameEmployee(e.target.value) }/>
          </div>
        </td>

        <td>
          <div className="input-field" id='lname1'>
          <i className="bi bi-people-fill" />
          <input type="text" placeholder="Last Name" value={LnameEmployee} onChange={(e)=> setLnameEmployee(e.target.value) }/>
          </div>
        </td>
      </tr>

       <tr>
        <td>
          <div className="input-field" id='fname1'>
          <i className="bi bi-telephone-fill" />
          <input type="text" placeholder="Phone Nb" value={PhoneNumberEmployee} onChange={(e)=> setPhoneNumberEmployee(e.target.value) }/>
          </div>
        </td>

        <td>
          <div className="input-field" id='lname1'>
          <i className="bi bi-calendar-date" />
          <input type="number" placeholder="Age" value={AgeEmployee} onChange={(e)=> setAgeEmployee(e.target.value) }/>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
      <div className="radio_container">
        <input type="radio" name="radio" id="one" value='Male' checked={GenderEmployee === 'Male'} onChange={handleGender} />
        <label htmlFor="one"><i className="bi bi-gender-male" />Male</label>
        <input type="radio" name="radio" id="two" value='Female' checked={GenderEmployee === 'Female'} onChange={handleGender}/>
        <label htmlFor="two"><i className="bi bi-gender-female" />Female</label>
      </div>
        
        
        <div className="input-field">
          <i className="bi bi-envelope" />
          <input type="email" placeholder="Email" value={EmailEmployee} onChange={(e)=> setEmailEmployee(e.target.value) } />
        </div>
        <div className="input-field">
          <i className="bi bi-lock" />
          <input type="password" placeholder="Password" value={PasswordEmployee} onChange={(e)=> setPasswordEmployee(e.target.value) } />
        </div>

        <input className="btnn" defaultValue="Sign up" onClick={handleRegisterEmployee}/>

        <p className="social-text">Or Sign up with social platforms</p>
        <div className="social-media">
           <button type="button" className="btn btn-link btn-floating mx-1 " onClick={()=> {console.log("makbus")}}>
                  <i className="bi bi-facebook"></i>
            </button>

            <button type="button" className="btn btn-link btn-floating mx-1">
                  <i className="bi bi-google" />
            </button>
            
            <button type="button" className="btn btn-link btn-floating mx-1">
                  <i className="bi bi-twitter" />
            </button>

            <button type="button" className="btn mx-1">
                  <i className="bi bi-github" />
            </button>
        </div>
    
    </>
  )
}

export default SignupEmployee