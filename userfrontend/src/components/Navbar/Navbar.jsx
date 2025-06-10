import React from 'react'
import { assets } from '../../assets/assets'
import './Navbar.css'
import { useState ,useContext} from 'react'
import { Link } from 'react-router-dom'
import {StoreContext} from '../../context/StoreContext'

 
const Navbar = ({showlogin,setshowlogin}) => {
  const [menu,setmenu]=useState('home')
  const {gettotalcartamount} =useContext(StoreContext);
  


  return (
   <div className="navbar">
   



    <Link to="." onClick={()=>setmenu("home")}><img  className='logo' src={assets.logo} alt="" /></Link>
    <ul className='navbar-menu'>
    
        <Link to ='/' onClick={()=>setmenu("home")} className={menu==="home"?"active":""} > Home</Link>
       <a href="#explore-menu"> <li onClick={()=>setmenu("menu")} className={menu==="menu"?"active":""}>Menu</li> </a>
        <a href="#footer"><li onClick={()=>setmenu("contact-us")} className={menu==="contact-us"?"active":""}>Contact Us</li></a>
    </ul>

    <div className="navbar-right">

        <div className="navbar-basket-icon">
              
               <Link to ="/cart">  <img src={assets.basket_icon} alt="" /></Link>
               <div className={gettotalcartamount()===0? "":"dot"}></div>


        </div>
        <button onClick={()=>setshowlogin(true)}>Sign in</button>
     


    </div>
  
  
   </div>
  )
}

export default Navbar