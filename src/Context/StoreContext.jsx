import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export  const StoreContext =  createContext(null)

const StoreContextProvider = (props) =>{

    const [cartitem,setCartItem] = useState({})

    const addToCart = (itemId) => {
        if(!cartitem[itemId]){
            setCartItem((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }
    const removeFromCart =(itemId)=>{
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmout = ()=>{
        let totalAmout = 0;
        for(const item in cartitem){
            if(cartitem[item]>0){
                let itemInfo = food_list.find((product)=>product._id === item)
            totalAmout += itemInfo.price*cartitem[item]
            }
            
        }
        return totalAmout
    }
    const contextValue = {
        food_list,
        cartitem,
        setCartItem,
        addToCart,
        removeFromCart,
        getTotalCartAmout
    } 

    
    return (
        <StoreContext.Provider value={contextValue} >
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;