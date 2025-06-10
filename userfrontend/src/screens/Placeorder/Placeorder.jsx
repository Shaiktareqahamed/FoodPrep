import React from 'react'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import './Placeorder.css'
const Placeorder = () => {
  const {gettotalcartamount} = useContext(StoreContext)
  return (
    <form className='place-order'>
        <div className="place-order-left">
<p className='title'> Delivery Information</p>
<div className="multi-fields">
  <input type="text" placeholder='First Name' />
<input type="text"placeholder='Last Name' />
</div>
<input type="email" placeholder='Email-address' />
<input type="text" Placeholder="street"/>
<div className="multi-fields">
  <input type="text" placeholder='City' />
<input type="text"placeholder='State' />
</div>
<div className="multi-fields">
  <input type="text" placeholder='Zip Code' />
<input type="text"placeholder='Country' />
</div>
<input type="text" placeholder='Phone' />
        </div>

    <div className='place-order-right'> </div>
      <div className="cart-total">
       
    
    <h2>Cart Totals</h2>
    <div>

      <div className="cart-total-details">

        <p>sub total</p>
        <p>₹{gettotalcartamount()}</p>
      </div>
      <hr />
      <div className="cart-total-details">
        <p>delivery fee</p>
        <p>₹{!gettotalcartamount()?0:20}</p></div><hr />
      <div className="cart-total-details">
        <p>total</p>
        <p>₹{!gettotalcartamount()?0:gettotalcartamount()+20}</p></div>
        <hr />
    </div>
    <button onClick={()=>navigate('/Placeorder')} > Proceed to check out</button>
    
    
    
    </div>
    
   
  

  
    
    
    </form>

   
  )
}
export default Placeorder