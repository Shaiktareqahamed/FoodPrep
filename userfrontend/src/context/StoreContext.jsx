import { createContext ,useState} from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext();


const StoreContextProvider =(props)=>{
        const [cartitems,setcartitems]=useState({})
        const addtocart =(itemid)=>{
            if(!cartitems[itemid]){
                setcartitems({...cartitems,[itemid]:1})}
            else{
                setcartitems({...cartitems,[itemid]:cartitems[itemid]+1})}
        }
        const removefromcart = (itemid)=>{
            setcartitems({...cartitems,[itemid]:cartitems[itemid]-1})
        }
        const gettotalcartamount =()=>{
            let total=0;
            for(let item in cartitems){
                if(cartitems[item]>0){
                    let iteminfo = food_list.find(food=>food._id===item)
                    total +=iteminfo.price*cartitems[item]
                }

            }
           return total;
        }




    const contextvalues={
        food_list,cartitems,setcartitems,addtocart,removefromcart,gettotalcartamount

    }
    return(
        <StoreContext.Provider value ={contextvalues}>
{props.children}

        </StoreContext.Provider>
    )
}
export default StoreContextProvider