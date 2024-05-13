import React, { createContext,useState,useEffect } from "react";
export const ShopContext=createContext(null);


const ShopContextProvider=(props)=>{
    const [productData, setProductData] = useState([]);
    const [cartItems, setCartItems] = useState({});
   
  
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => {
                setProductData(json);
                if (json.length > 0) {
                    setCartItems(getDefaultCart(json));
                }
            });
    }, []);
   
    const getDefaultCart = (products) => {
        let cart = {};
        products.forEach(product => {
            cart[product.id] = 0;
        });
        return cart;
    };


   const addToCart=(itemId)=>{
    setCartItems((prev)=>(
        {...prev,[itemId]:prev[itemId]+1}))
   }
   const removeFromCart=(itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    
   }
const removeProductFromCart=(itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:0}))

}
const clearAllCart=()=>{
    setCartItems(getDefaultCart(productData))
}
   const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
        if (cartItems[item] > 0) {
            let itemInfo = productData.find((product) => product.id === Number(item));
            console.log(itemInfo);
            totalAmount += itemInfo.price * cartItems[item];
        }
    }
    console.log(totalAmount);
    return totalAmount.toFixed(2);
};

const getTotalCartItem = () => {
    let totalCartItem = 0;
    for (const item in cartItems) {
        if (cartItems[item] > 0) {
           totalCartItem+=cartItems[item];
        }
    }
    return totalCartItem;
};


   console.log(cartItems);
   const contextValue={productData,cartItems,addToCart,removeFromCart,getTotalCartAmount,getTotalCartItem,removeProductFromCart,clearAllCart};
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )

}
export default ShopContextProvider;