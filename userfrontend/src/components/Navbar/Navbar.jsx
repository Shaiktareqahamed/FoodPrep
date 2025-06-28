import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import { assets } from '../../assets/assets';
import './Navbar.css';

const Navbar = ({ showLogin, setShowLogin }) => {
  const [menu, setMenu] = useState('home');
  const { gettotalcartamount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  return (
    <>
      {/* Offer Roller / Coupon Banner */}
      <div className="offer-banner">
        <div className="offer-track">
          <span>
            🎉 Use code <strong>FOODIE50</strong> for 50% OFF! &nbsp;&nbsp;|&nbsp;&nbsp;
            🍔 Free delivery on orders above ₹499! &nbsp;&nbsp;|&nbsp;&nbsp;
            🥤 Buy 1 Get 1 Free on drinks!
          </span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="navbar">
        <Link to="/" onClick={() => setMenu('home')}>
          <img className="logo" src={assets.logo} alt="" />
        </Link>
        <ul className="navbar-menu">
          <Link to="/" onClick={() => setMenu('home')} className={menu === 'home' ? 'active' : ''}>Home</Link>
          <a href="#explore-menu">
            <li onClick={() => setMenu('menu')} className={menu === 'menu' ? 'active' : ''}>Menu</li>
          </a>
          <a href="#footer">
            <li onClick={() => setMenu('contact-us')} className={menu === 'contact-us' ? 'active' : ''}>Contact Us</li>
          </a>
        </ul>

        <div className="navbar-right">
          <div className="navbar-basket-icon">
            <Link to="/cart">
              <img src={assets.basket_icon} alt="" />
            </Link>
            <div className={gettotalcartamount() === 0 ? '' : 'dot'}></div>
          </div>

          {!token ? (
            <button onClick={() => setShowLogin(true)}>Sign in</button>
          ) : (
            <div className="navbar-profile">
              <img src={assets.profile_icon} alt='' />
              <ul className="nav-profile-dropdown">
                <Link to="/myorders">
                  <img src={assets.bag_icon} alt="" />
                  <p>Orders</p>
                </Link>
                <hr />
                <li onClick={logout}>
                  <img src={assets.logout_icon} alt='' />
                  <p>Logout</p>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
