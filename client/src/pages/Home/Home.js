import React from 'react'
import '../Home/Home.css'



const Home = () => {



  return (
    
    <div className="container">
    
    <section className="banner">
  <div className="container">
    <div className="banner-text">
      <h1>We are hiring</h1>
      <p><strong>We make it easy to get the most out of your virtual machine.</strong> Our tools make it simple to track how your Droplets are performing and help you to respond quickly if there is a problem</p>
      <button>Sign Up</button>
    </div>
  </div>
  <img src={require("../Home/img.png")} className = "banner-image" alt ="monitoring"/>
  {/* <img  src="https://preview.ibb.co/bMi5Y6/banner_img.png" className="banner-image"alt="monitoring" > */}
</section>

<div className="container">
  <div className="row">
    <div className="mb-30 col-md-6 col-lg-4">
      <div className="card">
      {/* <img className="card-icon" src="https://image.ibb.co/cFV8mR/monitoring.png" alt="monitoring" > */}
      
      <h3 className="card-title">Employee</h3>
      <img src={require("../Home/icon3.jfif")} className = "card-icon" alt ="monitoring"/>
      <p className="card-text">As an employee i can build my own resume , check job offers and apply for jobs added by employer.</p>
      <a className="card-link" >Learn more</a>
      </div>
    </div>
    <div className="mb-30 col-md-6 col-lg-4">
      <div className="card">
      {/* <img className="card-icon" src="https://image.ibb.co/jfmg6R/cloud_firewalls.png" alt="monitoring" > */}
      
      <h3 className="card-title">Employer</h3>
      <img src={require("../Home/icon2.jfif")} className = "card-icon" alt ="monitoring"/>
      <p className="card-text">As an employer i can post a new job, check employee resume and accept job applications.</p>
      <a className="card-link" >Learn more</a>
      </div>
    </div>
    <div className="mb-30 col-md-6 col-lg-4">
      <div className="card">
      {/* <img className="card-icon" src="https://image.ibb.co/fcnzt6/team_management.png" alt="team management" > */}
      
      <h3 className="card-title">Community</h3>
      <img src={require("../Home/icon1.jfif")} className = "card-icon" alt ="monitoring"/>
      <p className="card-text">This website is designed to be a community for employee and employers. It facilitates the communication and connections between employees and employers</p>
      <a className="card-link">Learn more</a>
      </div>
    </div>
    <div className="mb-30 col-md-6 col-lg-4">
      <div className="card">
      {/* <img className="card-icon" src="https://image.ibb.co/evyiLm/backups.png" alt="monitoring" > */}
      
      <h3 className="card-title">How do i build my Resume?</h3>
      <img src={require("../Home/icon4.jfif")} className = "card-icon" alt ="monitoring"/>
      <p className="card-text">As an employee i can build my own resume by simply signingUp as employee then login and finally build my resume.</p>
      <a className="card-link">Learn more</a>
      </div>
    </div>
    <div className="mb-30 col-md-6 col-lg-4">
      <div className="card">
      {/* <img className="card-icon" src="https://image.ibb.co/g9bERR/snapshots.png" alt="snapshots" > */}
      {/* <img src={require("../Home/image3.jpg")} className = "card-icon" alt ="snapshots"/> */}
      
      <h3 className="card-title">Recruitment</h3>
      <img src={require("../Home/icon5.jfif")} className = "card-icon" alt ="monitoring"/>
      <p className="card-text">When the employee upload his resume, the employer will be able to view it and recruit him/her based on it </p>
      <a className="card-link" >Learn more</a>
      </div>
    </div>
    <div className="mb-30 col-md-6 col-lg-4">
      <div className="card">
      {/* <img className="card-icon" src="https://image.ibb.co/cFV8mR/monitoring.png" alt="monitoring" > */}
      {/* <img src={require("../Home/image4.jpg")} className = "card-icon" alt ="monitoring"/> */}
      
      <h3 className="card-title">User friendly</h3>
      <img src={require("../Home/icon6.jfif")} className = "card-icon" alt ="monitoring"/>
      <p className="card-text">This website is build to be easy to use either by the empoyee or by the employer and get them more chance to find a job or hire for a job.</p>
      <a className="card-link" >Learn more</a>
      </div>
    </div>
  </div>
</div>
<footer>
  <div className="container">
  <div className="row">
    <div className="col-md-4">
      <ul>
        <li>Footer Link</li>
        <li>Footer Link</li>
       
      </ul>
    </div>
    <div className="col-md-4">
      <ul>
        <li>Footer Link</li>
        <li>Footer Link</li>
       
      </ul>
    </div>
    <div className="col-md-4">
      <ul>
        <li>Footer Link</li>
        <li>Footer Link</li>
        
      </ul>
    </div>
  </div>
  </div>
</footer>
  </div>
  
  )
}
export default Home;