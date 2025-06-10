import React from 'react'
import Navbar from './components/Navbar/Navbar'
import {Routes,Route} from 'react-router-dom'
import Cart from './screens/Cart/Cart'
import Home from './screens/Home/Home'
import Placeorder from './screens/Placeorder/Placeorder'
import Footer from './components/Footer/Footer'
import Loginpopup from './components/Loginpopup/loginpopup'
import { useState } from 'react'



const App = () => {
  const [showlogin,setshowlogin] =useState(false);
  return (
    <>
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