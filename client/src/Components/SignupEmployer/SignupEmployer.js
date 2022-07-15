import React from 'react'

function SignupEmployer() {
  return (
            <>
    
    <h3 className="title">Sign up as Employer</h3>
    <table>
        <tbody>
   
      <tr>
        <td>
          <div className="input-field" id='fname1'>
          <i className="bi bi-person" />
          <input type="text" placeholder="First Name" />
          </div>
        </td>

        <td>
          <div className="input-field" id='lname1'>
          <i className="bi bi-people-fill" />
          <input type="text" placeholder="Last Name" />
          </div>
        </td>
      </tr>

       <tr>
        <td>
          <div className="input-field" id='fname1'>
          <i className="bi bi-telephone-fill" />
          <input type="text" placeholder="Phone Nb" />
          </div>
        </td>

        <td>
          <div className="input-field" id='lname1'>
          <i className="bi bi-building" />
          <input type="text" placeholder="Company" />
          </div>
        </td>
      </tr>
      </tbody>
    </table>
      <div className="radio_container">
        <input type="radio" name="radio" id="one" defaultChecked="" />
        <label htmlFor="one"><i className="bi bi-gender-male" />Male</label>
        <input type="radio" name="radio" id="two" />
        <label htmlFor="two"><i className="bi bi-gender-female" />Female</label>
      </div>
        
        
        <div className="input-field">
          <i className="bi bi-envelope" />
          <input type="email" placeholder="Email" />
        </div>
        <div className="input-field">
          <i className="bi bi-lock" />
          <input type="password" placeholder="Password" />
        </div>

        <input type="submit" className="btnn" defaultValue="Sign up" />

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

export default SignupEmployer