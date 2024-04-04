import React, { useState } from 'react';
import { buyer } from './data';

function BuyerLogin({ isLoggedIn1, setLoggedIn1 })  {
 
      const [formData, setFormData] = useState({
        name: '',
        password: '',
      });
    
      
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
          
        } 
    };
      }
    
    return (
      <div>
        <h3>Buyer Login</h3>
        <form onSubmit={handleFormSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>

      
      </div>
    );
  };
  export default BuyerLogin