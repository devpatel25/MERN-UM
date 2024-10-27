import React, {useContext} from "react";
import CartContext, {CartProvider} from "../CartContext";
import './Main.css'

export default function LeftCon() {
    const { cartItems, addToCart, addQty, minusQty, showCheckoutForm, checkout,data } = useContext(CartContext);
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
                <button className="add-to-cart-btn" onClick={() => addToCart(shoe)}>Add to Cart</button>
                </div>
            </div>
            ))}
        </div>  
    )
}