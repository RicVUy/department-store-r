import React from 'react'
import 'LoginSignup.css'
import BuyerLogin from './BuyerLogin'

const LoginSignup = () => {
  return (
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
          <button onClick={<BuyerLogin/>}>Login here</button>
         {/*} <span>Login here</span>*/}
        </p>
        <div className="loginsignup-agree">
          <input type='checkbox' name='' id=''/>
          <p>By continuing, I agree to the terms of use and privacy policy</p>
        </div>
      </div>
      

    </div>
  )
}

export default LoginSignup