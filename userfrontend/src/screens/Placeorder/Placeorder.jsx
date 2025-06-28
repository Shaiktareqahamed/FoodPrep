/*import React from 'react'
import { useContext,useState,useEffect} from 'react'
import { StoreContext } from '../../context/StoreContext'
import './Placeorder.css'
const Placeorder = () => {
  const [data, setData] = useState({
  first_name: "",
  last_name: "",
  email: "",
  street: "",
  city: "",
  state: "",
  zip_code: "",
  country: "",
  phone: ""
});
  const {gettotalcartamount,food_list,cartItems,url,token} = useContext(StoreContext)
  const onChangeHandler = (e) => {
  const { name, value } = e.target;
  setData({ ...data, [name]: value });
};
const onSubmitHandler = async (e) => {
  e.preventDefault();

  let orderItem = [];
  food_list.map((item) => {
    if (cartItems[item.item_id] > 0) {
      let itemInfo = { ...item };
      itemInfo.quantity = cartItems[item.item_id];
      orderItem.push(itemInfo);
    }
  });

  let orderData = {
    address: data,
    items: orderItem,
    amount: getTotalCartAmount() + 20,
  };

  try {
    const response = await axios.post(url + "/api/order/place", orderData, {
      headers: { token },
    });
    const { session_url } = response.data;
    window.location.replace(session_url);
  } catch (error) {
    console.log(error);
  }
};


  return (
    <form onSubmit={onsubmitHandler} className='place-order'>
        <div className="place-order-left">
<p className='title'> Delivery Information</p>
<div className="multi-fields">
  <input required  name="first_name" value={data.first_name} onChange={(e)=>onChangeHandler(e)}type="text" placeholder="First Name" />
          <input required  name="last_name" value={data.last_name} onChange={(e)=>onChangeHandler(e)} type="text" placeholder="Last Name" />
        </div>
        <input required  name="email" value={data.email} onChange={(e)=>onChangeHandler(e)} type="email" placeholder="Email address" />
        <input required  name="street" value={data.street} onChange={(e)=>onChangeHandler(e)} type="text" placeholder="Street" />
        <div className="multi-fields">
          <input required  name="city" value={data.city} onChange={(e)=>onChangeHandler(e)} type="text" placeholder="City" />
          <input required  name="state" value={data.state} onChange={(e)=>onChangeHandler(e)} type="text" placeholder="State" />
        </div>
        <div className="multi-fields">
          <input required  name="zip_code" value={data.zip_code} onChange={(e)=>onChangeHandler(e)} type="text" placeholder="Zip Code" />
          <input required  name="country" value={data.country} onChange={(e)=>onChangeHandler(e)} type="text" placeholder="Country" />
        </div>
        <input required  name="phone" value={data.phone} onChange={(e)=>onChangeHandler(e)} type="text" placeholder="Phone" />
  
  
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
export default Placeorder*/
import React, { useContext, useState,useEffect } from 'react';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import './Placeorder.css';
import { useNavigate } from 'react-router-dom';


const Placeorder = () => {
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zip_code: "",
    country: "",
    phone: ""
  });

  const { gettotalcartamount, food_list, cartitems, url, token } = useContext(StoreContext);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    let orderItem = [];
    /*food_list.forEach((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = { ...item };
        itemInfo.quantity = cartItems[item._id];
        orderItem.push(itemInfo);
      }
    });*/
    //const quantity = cartitems?.[item._id] || 0;
  

food_list.forEach((item) => {
  if (!item || !item._id) return;

  const quantity = cartitems?.[item._id.toString()] || 0;

  if (quantity > 0) {
    let itemInfo = { ...item, quantity };
    orderItem.push(itemInfo);
  }
});






    let orderData = {
      address: data,
      items: orderItem,
      amount: gettotalcartamount() + 20
    };

    try {
      const response = await axios.post(url + "/api/order/place", orderData, {
        headers: { token }
      });

      const { session_url } = response.data;
      window.location.replace(session_url);
    } catch (error) {
      console.log(error);
    }
  };
  const navigate = useNavigate();

useEffect(() => {
  if (!token) {
    navigate('/cart');
  } else if (gettotalcartamount() === 0) {
    navigate('/cart');
  }
}, [token]);



  return (
    <form onSubmit={onSubmitHandler} className='place-order'>
      <div className="place-order-left">
        <p className='title'>Delivery Information</p>

        <div className="multi-fields">
          <input required name="first_name" value={data.first_name} onChange={onChangeHandler} type="text" placeholder="First Name" />
          <input required name="last_name" value={data.last_name} onChange={onChangeHandler} type="text" placeholder="Last Name" />
        </div>

        <input required name="email" value={data.email} onChange={onChangeHandler} type="email" placeholder="Email address" />
        <input required name="street" value={data.street} onChange={onChangeHandler} type="text" placeholder="Street" />

        <div className="multi-fields">
          <input required name="city" value={data.city} onChange={onChangeHandler} type="text" placeholder="City" />
          <input required name="state" value={data.state} onChange={onChangeHandler} type="text" placeholder="State" />
        </div>

        <div className="multi-fields">
          <input required name="zip_code" value={data.zip_code} onChange={onChangeHandler} type="text" placeholder="Zip Code" />
          <input required name="country" value={data.country} onChange={onChangeHandler} type="text" placeholder="Country" />
        </div>

        <input required name="phone" value={data.phone} onChange={onChangeHandler} type="text" placeholder="Phone" />
      </div>

      <div className='place-order-right'>
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>₹{gettotalcartamount()}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>₹{!gettotalcartamount() ? 0 : 20}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Total</p>
            <p>₹{!gettotalcartamount() ? 0 : gettotalcartamount() + 20}</p>
          </div>
          <hr />
          <button type="submit">Proceed to check out</button>
        </div>
      </div>
    </form>
  );
};

export default Placeorder;
