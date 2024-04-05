import React, { useState} from 'react';
import { buyer } from './data';
import '../LoginSignup.css'

function BuyerLogin({ isLoggedIn1, setLoggedIn1 })  {
 //const [buyers, setBuyers] = useState([])
  //const [username, setUsername] = useState('');
  //const [password, setPassword] = useState('');
  //const [error, setError] = useState('');
      const [formData, setFormData] = useState({
        name: '',
        password: '',

      });
      const [loginError, setLoginError] = useState('');
      const [logIn, setLogIn] = useState(false)
      const [formData1, setFormData1] =useState({
         name:'',
         username:'',
         email:'',
         password:'',
         cartContent:[
          {
            productdesc:'',
            price:0,
            quantity:0
          },
          {
            totalAmount:0,
            totalPlusTax:0,
            delFee:0,
            total:0
          }
         ]
      })
      
     // const [loginError, setLoginError] = useState('');
    /* useEffect(() => {
      fetch("http://localhost:3001/buyers")
          .then(r => r.json())
          .then(setBuyers) 
    }, []);*/

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
      /*const handleFormSubmit = (e) => {
        e.preventDefault();
        const user = buyers.find(user => user.username === username && user.password === password);

    if (user) {
      // Successful login
      console.log('Login successful');
      // Perform actions such as setting authentication state or redirecting
    } else {
      // Invalid credentials
      setError('Invalid username or password');
    }
      }*/
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/buyers", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData1)
      });
      if (response.ok) {
        alert('Signed up successfully!');
      } else {
        alert('Sign up failed!');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData1({ ...formData1, [name]: value });
  };
  
   return (
    <>
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
        <div className="loginsignup-fields">
          <h3>your name</h3>
          <input type='text' name="name" value={formData1.name} onChange={handleChange}/>
          <h3>your username</h3>
          <input type='username' name="username" value={formData1.username} onChange={handleChange}/>
          <h3>your email</h3>
          <input type='email' name="email" value={formData1.email} onChange={handleChange} />
          <h3>your password</h3>
          <input type='password' name="password" value={formData1.password}  onChange={handleChange}/>
        </div>
        <button type='submit'>Continue</button>
        </form>
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