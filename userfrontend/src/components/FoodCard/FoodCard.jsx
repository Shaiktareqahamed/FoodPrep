import React from 'react'
import './FoodCard.css'
import { useState,useContext,useEffect} from 'react'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

const FoodCard = ({id,name,price,description,image}) => {

  const {cartitems,setcartitems,addtocart,removefromcart,url}=useContext(StoreContext);


  return (
    <div className='food-item'>
        <div className="food-item-image-container">
            <img  src={`${url}/image/${image}`} 
 alt="" className="food-item-image" />
            { 
            !cartitems[id]?   <img onClick={() => addtocart(id)} src ={assets.add_icon_white} className ="add" />
              : <div className='food-item-counter'> 
                  <img onClick={() => removefromcart(id)} src ={assets.remove_icon_red} />
                  <p>{cartitems[id]}</p>
                  <img onClick={() => addtocart(id)} src ={assets.add_icon_green} />
              
              </div>
            } 
        </div>
        <div className="food-item-info">
          <p className='food-item-name'>{name} </p>
          <p className='food-item-desc'> {description}</p>
          <div className="food-item-price-rating">
            <p className='food-item-price'>₹{price} </p>
            <img src={assets.rating_stars} alt="" />
          </div>
        </div>
    </div>
  )
}

export default FoodCard