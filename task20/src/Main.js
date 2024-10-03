import React, { useState } from "react";
import './Main.css';

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

let cart = [];

function Main() {
    const [cartItems, setCartItems] = useState([]);

    // Function to add item to cart
    function addToCart(ind) {
        const item = data[ind];
        const existingItem = cartItems.find(cartItem => cartItem.item.name === item.name);

        if (existingItem) {
            const updatedCartItems = cartItems.map(cartItem => {
                if (cartItem.item.name === item.name) {
                    return { ...cartItem, qty: cartItem.qty + 1 };
                } else {
                    return cartItem;
                }
            });
            setCartItems(updatedCartItems);
        } else {
            setCartItems([...cartItems, { item, qty: 1 }]);
        }
    }

    // Left Container Function: Displays product cards
    function leftCon() {
        return (
            <div className="leftCon">
                {data.map((shoe, ind) => (
                    <div className="card" key={ind}>
                        <div className="img-con">
                            <img src={shoe.src} alt={shoe.name} id="item-img" />
                        </div>
                        <div className="card-body">
                            <h4 className="card-title" id="item-name">{shoe.name}</h4>
                            <span>Rs. {shoe.price}</span>
                            <button className="add-to-cart-btn" onClick={() => addToCart(ind)}>Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    // Right Container Function: Displays Cart
    function rightCon() {
        const totalAmount = cartItems.reduce((total, cartItem) => total + cartItem.item.price * cartItem.qty, 0);

        return (
            <div className="rightCon">
                <h1>Cart</h1>
                <div className="cart-con">
                    <table className="cart-tbl" id="cart-con">
                        <tbody>
                            {cartItems.map((cartItem, index) => (
                                <tr className="cart-item" key={index}>
                                    <td className="item-img-con"><img src={cartItem.item.src} className="item-img" alt={cartItem.item.name} /></td>
                                    <td className="item-name-con"><p>{cartItem.item.name}</p></td>
                                    <td className="quantity-btn">
                                        <button className="minus-btn" onClick={() => minusQty(index)}>-</button>
                                        <p className="quantity">{cartItem.qty}</p>
                                        <button className="plus-btn" onClick={() => addQty(index)}>+</button>
                                    </td>
                                    <td className="item-price-con"><p>₹{cartItem.item.price * cartItem.qty}</p></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="total-con">
                    <h2>Total</h2><h2 id="total">₹{totalAmount}</h2>
                </div>
            </div>
        );
    }

    // Increase quantity of a cart item
    function addQty(index) {
        const updatedCartItems = cartItems.map((cartItem, i) => {
            if (i === index) {
                return { ...cartItem, qty: cartItem.qty + 1 };
            } else {
                return cartItem;
            }
        });
        setCartItems(updatedCartItems);
    }

    // Decrease quantity of a cart item
    function minusQty(index) {
        const updatedCartItems = cartItems.map((cartItem, i) => {
            if (i === index) {
                if (cartItem.qty > 1) {
                    return { ...cartItem, qty: cartItem.qty - 1 };
                } else {
                    return delete cartItems.cartItem;
                }
            } else {
                return cartItem;
            }
        })
        .filter(cartItem => cartItem.qty > 0); // Remove item if qty is 0

        setCartItems(updatedCartItems);
    }

    return (
        <div className="main">
            {leftCon()}
            {rightCon()}
        </div>
    );
}

export default Main;
