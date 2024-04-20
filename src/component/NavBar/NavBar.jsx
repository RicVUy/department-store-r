import React, { useContext, useState, useRef} from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import cart_icon from '../Assets/Assets/cart_icon.png'
import ShopContextProvider from '../../Context/ShopContextProvider'
import logo from '../Assets/Assets/logo.png'
const Navbar = () => {
    const [menu, setMenu] = useState("shop")
    const {getTotalCartItems} = useContext(ShopContextProvider)
    const menuRef = useRef()

    const dropdown_toggle = (e) =>{
      menuRef.current.classList.toggle('nav-menu-visible')
      e.target.classList.toggle('open')
    }
  return (
    <div className='navbar'>
        <div className='nav-logo'>
        <img  src={logo} alt=" " />
        <p>SHOPPER</p>
    </div>
    <img className='nav-dropdown' onClick={dropdown_toggle} src="https://www.360webdesigns.com/wp-content/uploads/2016/07/Services_ECommerce_v2-01.png" alt="" />
    <ul ref={menuRef} className='nav-menu'>
       <li onClick={()=>{setMenu("shop")}}><Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
       <li onClick={()=>{setMenu("mens")}}><Link  style={{ textDecoration: 'none' }}to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
       <li onClick={()=>{setMenu("womens")}}><Link style={{ textDecoration: 'none' }} to='/womens'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
       <li onClick={()=>{setMenu("kids")}}><Link style={{ textDecoration: 'none' }} to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
    </ul>
    <div className='nav-login-cart'>
       <Link to='/login'><button>Login</button></Link>
       <Link to='/cart'><img src={cart_icon} alt="" /></Link>
       <div className="nav-cart-count">{getTotalCartItems()}</div>
    </div>
    </div>
  )
}

export default Navbar
