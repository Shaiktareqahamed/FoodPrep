/*import React from 'react'
import Navbar from './components/Navbar/Navbar'
import {Routes,Route} from 'react-router-dom'
import Cart from './screens/Cart/Cart'
import Home from './screens/Home/Home'
import Placeorder from './screens/Placeorder/Placeorder'
import Footer from './components/Footer/Footer'
import Loginpopup from './components/Loginpopup/Loginpopup'
import { ToastContainer } from 'react-toastify'
import { useState } from 'react'



const App = () => {
  const [showlogin,setshowlogin] =useState(false);
  return (
    <>
  <ToastContainer />
{showlogin? <Loginpopup setshowlogin={setshowlogin}/>:<></>}
    <div className="app"> 
      <Navbar showlogin={showlogin} setshowlogin={setshowlogin} />
    <Routes>
      <Route path='/' element={<Home/>}  ></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/Placeorder' element={<Placeorder/>}></Route>
    </Routes>
       </div>
       <Footer/>
       </>
  

  )
}

export default App
*/
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Cart from './screens/Cart/Cart';
import Home from './screens/Home/Home';
import Placeorder from './screens/Placeorder/Placeorder';
import Footer from './components/Footer/Footer';
import Loginpopup from './components/Loginpopup/Loginpopup';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Verify from './screens/Verify/Verify';
import MyOrders from './screens/MyOrders/MyOrders'

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <ToastContainer />
      {showLogin && <Loginpopup setShowLogin={setShowLogin} />}
      
      <div className="app">
        <Navbar showLogin={showLogin} setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/placeorder" element={<Placeorder />} />
          <Route path="/verify" element={<Verify/>}></Route>
          <Route path="/myorders" element={<MyOrders/>}></Route>
        </Routes>
      </div>

      <Footer />
    </>
  );
};

export default App;
