


import { createContext, useState, useEffect } from "react";
import axios from 'axios';

export const StoreContext = createContext();

const StoreContextProvider = (props) => {
  const [cartitems, setcartitems] = useState({});
  const [food_list, setFoodList] = useState([]);
  const [token, setToken] = useState("");
  const url = "https://foodprep-lm5n.onrender.com";

  const fetchFoodList = async () => {
    const response = await axios.get(url + '/api/food/list');
    setFoodList(response.data.data);
  };

  const loadCartData = async (userToken) => {
    try {
      const response = await axios.get(url + "/api/cart/get", {
        headers: { token: userToken },
      });
      setcartitems(response.data.cartData);
    } catch (error) {
      console.error(error);
      setcartitems({});
    }
  };

  useEffect(() => {
    async function loadData() {
      await fetchFoodList();
      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"));
        await loadCartData(localStorage.getItem("token"));
      }
    }
    loadData();
  }, []);

  const addtocart = async(itemid) => {
    setcartitems((prevItems) => {
      const newItems = { ...prevItems };
      newItems[itemid] = (newItems[itemid] || 0) + 1;
      return newItems;
    });

    if (token) {
      try {
        const response = await axios.post(url + "/api/cart/add", { itemId: itemid }, { headers: { token } });
        if (response.data.success) {
          setcartitems(response.data.cartData);
        } else {
          console.error(response.data.message);
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  const removefromcart = async(itemid) => {
    setcartitems((prevItems) => {
      const newItems = { ...prevItems };
      if (newItems[itemid] && newItems[itemid] > 0) {
        newItems[itemid] -= 1;
        if (newItems[itemid] <= 0) {
          delete newItems[itemid];
        }
      }
      return newItems;
    });

    if (token) {
      try {
        const response = await axios.delete(`${url}/api/cart/remove?itemId=${itemid}`, {
          headers: { token }
        });
        if (response.data.success) {
          setcartitems(response.data.cartData);
        } else {
          console.error(response.data.message);
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  const gettotalcartamount = () => {
    let total = 0;
    for (let item in cartitems) {
      if (cartitems[item] > 0) {
       let iteminfo = food_list.find((food) => food._id.toString() === item);
        if (iteminfo) {
          total += iteminfo.price * cartitems[item];
        }
      }
    }
    return total;
  };

  const contextvalues = {
    food_list,
    cartitems,
    setcartitems,
    addtocart,
    removefromcart,
    gettotalcartamount,
    url,
    token,
    setToken,
  };

  return (
    <StoreContext.Provider value={contextvalues}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;




