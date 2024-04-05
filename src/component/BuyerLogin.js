import React, { useState } from 'react';
import { buyer } from './data';
import '../LoginSignup.css'

function BuyerLogin({ isLoggedIn1, setLoggedIn1 })  {
 
      const [formData, setFormData] = useState({
        name: '',
        password: '',
      });
      const [loginError, setLoginError] = useState('');
      const [logIn, setLogIn] = useState(false)
      
     // const [loginError, setLoginError] = useState('');
      
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleFormSubmit = (e) => {
        e.preventDefault();
     //  buyer authentication 
        const { name, password } = formData;
        
         for (let i=0; i<buyer.length; i++){
        if (name === buyer[i].name1 && password === buyer[i].password1) {
          // If authentication is successful, fetch employee data
          setLoggedIn1(true);
          setLogIn(!logIn)
          setLoginError({loginError})
          } else {
           // setEmployeeData(null);
      setLoginError('Invalid name or password');
        
        } 
    };
  }
   
  
   return (
    <>
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type='text' placeholder='Your Name'/>
          <input type='email' placeholder='Email Address' />
          <input type='password' placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">
          Already have an account?
          <span>Login here</span>
        </p>
        <div className="loginsignup-agree">
          <input type='checkbox' name='' id=''/>
          <p>By continuing, I agree to the terms of use and privacy policy</p>
        </div>
      
     

      <div>
        <h1>Sign In</h1>
        <form onSubmit={handleFormSubmit}>
        <div className='loginsignup-fields'>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className='loginsignup-fields'>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>

        <button type="submit">{logIn ? "Log out" : "Log in"}</button>
      </form>
      </div>
      </div>
      </div>
      </>
    );
   
  };
  export default BuyerLogin