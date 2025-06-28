/*import React, { useState, useEffect, useContext } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import { toast } from "react-toastify";
const LoginPopup = ({ setSowLogin }) => {
  const { url_token, setToken } = useContext(StoreContext);
  const [curState, setCurState] = useState("Log In");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    let newUrl = url;
    if (curState === "Log In") {
      newUrl += "/api/user/login";
    } else {
      newUrl += "/api/user/register";
    }

    try {
      const response = await axios.post(newUrl, data);
      if (curState === "Sign Up") {
        toast.success("Account created successfully! Please Log in");
        setCurState("Log In");
      } else {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        setShowLogin(false);
      }
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

 
  return (
    <div className='login-popup'>
        <form onSubmit={onsubmitHandler} action="" className="login-popup-container">
            <div className="login-popup-title">
                <h2>{curState}</h2>
                <img onClick={()=>setshowlogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
                {curState !=="signin"?  <input type="text"placeholder='Your name' required/>:""}
                <input name="email" value={data.email} onChange ={onChangeHandler}type='email' placeholder='Your Email' required />
                <input name="password" value={data.password} onChange ={onChangeHandler} type="password" placeholder='Password'  required/>
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
*/

/*import React, { useState, useEffect, useContext } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import { toast } from "react-toastify";

const LoginPopup = ({ setShowLogin }) => {
  const { url,token, setToken } = useContext(StoreContext);

  const [curState, setCurState] = useState("Log In");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    let newUrl = url;
    if (curState === "Log In") {
      newUrl += "/api/user/login";
    } else {
      newUrl += "/api/user/register";
    }

    try {
      const response = await axios.post(newUrl, data);
      if (curState === "Sign Up") {
        toast.success("Account created successfully! Please Log in");
        setCurState("Log In");
      } else {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        setShowLogin(false);
      }
    }catch (error) {
  console.log(error.response?.data?.message || error.message)
}
  }

  return (
    <div className='login-popup'>
      <form onSubmit={onSubmitHandler} className="login-popup-container">
        <div className="login-popup-title">
          <h2>{curState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="close" />
        </div>

        <div className="login-popup-inputs">
          {curState !== "Log In" && (
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={onChangeHandler}
              placeholder="Your Name"
              required
            />
          )}
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={onChangeHandler}
            placeholder="Your Email"
            required
          />
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={onChangeHandler}
            placeholder="Password"
            required
          />
        </div>

        <button className="btn">{curState}</button>

        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to terms and privacy policy</p>
        </div>

        {curState === "Log In" ? (
          <p>
            Create new account?{" "}
            <span onClick={() => setCurState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurState("Log In")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;*/
import React, { useState, useContext } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import { toast } from "react-toastify";

const LoginPopup = ({ setShowLogin }) => {
  const { url, token, setToken } = useContext(StoreContext);

  const [curState, setCurState] = useState("Log In");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    let newUrl = url;
    if (curState === "Log In") {
      newUrl += "/api/user/login";
    } else {
      newUrl += "/api/user/register";
    }

    try {
      const response = await axios.post(newUrl, data);
      if (curState === "Sign Up") {
        toast.success("Account created successfully! Please Log in");
        setCurState("Log In");
      } else {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        setShowLogin(false);
      }
    } catch (error) {
      console.log(error.response?.data?.message || error.message);
    }
  };

  return (
    <div className="login-popup">
      <form onSubmit={onSubmitHandler} className="login-popup-container">
        <div className="login-popup-title">
          <h2>{curState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt="close"
          />
        </div>

        <div className="login-popup-inputs">
          {curState !== "Log In" && (
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={onChangeHandler}
              placeholder="Your Name"
              required
            />
          )}
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={onChangeHandler}
            placeholder="Your Email"
            required
          />
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={onChangeHandler}
            placeholder="Password"
            required
          />
        </div>

        <button className="btn">{curState}</button>

        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to terms and privacy policy</p>
        </div>

        {curState === "Log In" ? (
          <p>
            Create new account?{" "}
            <span onClick={() => setCurState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurState("Log In")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;

