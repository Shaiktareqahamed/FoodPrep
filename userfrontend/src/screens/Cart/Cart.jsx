import {useContext, useState}from 'react'
import { StoreContext } from '../../context/StoreContext'
import { food_list } from '../../assets/assets'
import { assets } from '../../assets/assets'
import './Cart.css'
import { useNavigate } from 'react-router-dom'
const Cart = () => {
  const navigate = useNavigate();
  const { food_list,cartitems,setcartitems,addtocart,removefromcart,gettotalcartamount,url}=useContext(StoreContext)
      return(
        <div className='cart'>
  <div className="cart-items-title">
    <p>Items</p>
    <p>Title</p>
    <p>Price</p>
    <p>Quantity</p>
    <p>Total</p>
    <p>Modify</p>
  </div>
  <br />
  <hr />
  {
    food_list.map((food,index)=>{
      if(cartitems[food._id]>0){
        return(
                  <>
                  <div className="cart-items-item">
                        <img className='food-image' src={`${url}/image/${food.image}`} alt="" />
                        <p>{food.name}</p>
                        <p>{food.price}</p>
                        <p>{cartitems[food._id]}</p>
                        <p>{cartitems[food._id]*food.price}</p>
                          <div className='food-item-counter cart-counter'> 
                                          <img onClick={() => removefromcart(food._id)} src ={assets.remove_icon_red} alt='remove' />
                                          <p>{cartitems[food._id]}</p>
                                          <img onClick={() => addtocart(food._id)} src ={assets.add_icon_green} alt='add'/>
                                      </div>
                       
                  </div>      
                  <hr />            
                      </>
        )
      }
    })
  }
  <div className="cart-bottom">
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
    <div className="cart-promocode">
      <p>if you have a promo code,enter it here</p>
      <div className="cart-promocode-input"><input type="text" placeholder='Enter Promo Code' />
      <button>Apply</button>
      
      </div>
    </div>
  </div>
</div>
      )
}
export default Cart
/*

*/