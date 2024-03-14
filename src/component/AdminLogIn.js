import React, {useState} from 'react'
import { admin } from './data';
function AdminLogIn( {isLoggedIn, setLoggedIn}) {
    const [formData, setFormData] = useState({
        name: '',
        password: '',
      });
    const [loginError, setLoginError] = useState('');
      const [logIn, setLogIn] = useState(false)
      
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        
      };
    
      const handleFormSubmit = (e) => {
        e.preventDefault();
       //  admin authentication 
        const { name, password } = formData;
        
         for (let i=0; i<admin.length; i++){
        if (name === admin[i].name && password === admin[i].password) {
          // If authentication is successful, fetch employee data
          setLoggedIn(isLoggedIn);
          setLogIn(!logIn)
          setLoginError({loginError})
          } else {
           // setEmployeeData(null);
      setLoginError('Invalid name or password');
          }
    };
      }
     return (
    <div>
       <h3>Administrator Login</h3>
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
       
        <button type="submit">{logIn ? "Log out" : "Log in"}
       </button>
         </form>
           </div>
        )
}

export default AdminLogIn