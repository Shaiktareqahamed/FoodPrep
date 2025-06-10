import React from 'react'
import './loginpopup.css'
import { useState } from 'react'
import { assets } from '../../assets/assets'
const Loginpopup = ({setshowlogin}) => {
    const [curState,setcurstate]=useState("signin")
   
  return (
    <div className='login-popup'>
        <form action="" className="login-popup-container">
            <div className="login-popup-title">
                <h2>{curState}</h2>
                <img onClick={()=>setshowlogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
                {curState !=="signin"?  <input type="text"placeholder='Your name' required/>:""}
                <input type="email" placeholder='Your Email' required />
                <input type="password" placeholder='Password'  required/>
            </div>
            <button className="btn">
                {curState}
            </button>
            <div className="login-pop-condition">
                <input type="checkbox" required />
                <p>By continuing,i agree to terms and privacy policy</p>

            </div>
            {
  curState === "signin" ? (
    <p>
      Create new account?
      <span onClick={() => setcurstate("signup")}>Click here</span>
    </p>
  ) : (
    <p>
      Already have an account?
      <span onClick={() => setcurstate("signin")}>Login here</span>
    </p>
  )
}

      
        </form>
    </div>
  )
}

export default Loginpopup