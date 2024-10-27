import React, { createContext, useState } from 'react';
const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const data = [
        { name: "Puma Suede FEATHER GREY", price: 8999, src: "https://images.vegnonveg.com/resized/400X328/12043/x-one-piece-suede-3-feather-greyplatinum-grey-grey-66fbae0574c35.jpg" },
        { name: "Puma ONE PIECE Suede RED", price: 9999, src: "https://images.vegnonveg.com/resized/400X328/12042/x-one-piece-suede-redultra-blue-red-66fbabc42d518.jpg" },
        { name: "New Balance 327 White", price: 9999, src: "https://images.vegnonveg.com/resized/400X328/11564/327-white-white-66d850c9ab779.jpg" },
        { name: "Air Jordan 1 Mid SE White/ Legend Blue", price: 12295, src: "https://images.vegnonveg.com/resized/400X328/11958/air-jordan-1-mid-se-whitelegend-blue-white-66ed3bf6d3610.jpg" },
        { name: "Air Jordan 1 Low ARCHAEO Brown/White", price: 8295, src: "https://images.vegnonveg.com/resized/400X328/11954/air-jordan-1-low-archaeo-brownwhite-brown-66ed3b3f5d74c.jpg" },
        { name: "Air Jordan 1 Alternate Bread Toe", price: 12000, src: "https://images.vegnonveg.com/resized/400X328/10353/air-jordan-1-low-whiteblack-varsity-red-white-653f3e2ba4700.jpg" },
        { name: "New Balance BB550 RED/WHITE", price: 12999, src: "https://images.vegnonveg.com/resized/400X328/11559/bb550-whitered-white-66d84e4239e98.jpg" },
        { name: "SAMBA ADV X KADER CARBON BLACK", price: 10999, src: "https://images.vegnonveg.com/resized/400X328/11946/samba-adv-x-kader-carbon-blackbrown-gum-black-66f2b73120ade.jpg" },
        { name: "ATHLETICS 86 High Sesame", price: 21999, src: "https://images.vegnonveg.com/resized/400X328/11945/athletics-86-high-sesame-grey-66f2b6a36544e.jpg" },
        { name: "Khaki Metallic Silver-Metallic Platinum", price: 70990, src: "https://images.vegnonveg.com/resized/400X328/11660/p-6000-khakimetallic-silver-metallic-platinum-brown-66dadcde4d126.jpg" },
        
    ];
    const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const existingItem = cartItems.find(cartItem => cartItem.item.name === item.name);
    if (existingItem) {
      setCartItems(cartItems.map(cartItem =>
        cartItem.item.name === item.name
          ? { ...cartItem ,qty: cartItem.qty + 1 }
          : cartItem
      ));
    } else {
      setCartItems([...cartItems, { item, qty: 1 }]);
    }
  };

  const addQty = (index) => {
    setCartItems(cartItems.map((cartItem, i) =>
      i === index
        ? { ...cartItem, qty: cartItem.qty + 1 }
        : cartItem
    ));
  };

  const minusQty = (index) => {
    setCartItems(cartItems.map((cartItem, i) =>{
    if (i===index){
      if (cartItem.qty > 1){
        return {... cartItem, qty: cartItem.qty - 1 }
      }
      else{
        return delete cartItems.cartItem;
      }
    }else{
      return cartItem;
    }
  }
    ).filter(cartItem=> cartItem.qty>0));
  };


 

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      addQty,
      minusQty,
      data,
      
    }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
