import React, { useContext } from 'react';
import CartContext, { CartProvider } from '../CartContext'
import './Main.css';
import { useNavigate } from 'react-router-dom';


export default function RightCon(){
    const { cartItems, addToCart, addQty, minusQty,data } = useContext(CartContext);
    const totalAmount = cartItems.reduce((total, cartItem) => total + cartItem.item.price * cartItem.qty, 0);
    let navigate= useNavigate();
    function checkout(){
        document.getElementById('checkout-btn').style.display="none";
        document.getElementById('back-btn').style.display="block";
        navigate('/payment');
    }
    function back(){
        document.getElementById('checkout-btn').style.display="block";
        document.getElementById('back-btn').style.display="none";
        navigate("/");
    }

    return (
        <div className="rightCon">
            <h1>Cart</h1>
            <div className="cart-con">
                <table className="cart-tbl" id="cart-con">
                    <tbody>
                    {cartItems.map((cartItem, index) => (
                        <tr className="cart-item" key={index}>
                        <td className="item-img-con">
                            <img src={cartItem.item.src} className="item-img" alt={cartItem.item.name} />
                        </td>
                        <td className="item-name-con"><p>{cartItem.item.name}</p></td>
                        <td className="quantity-btn" id='quantity-btn'>
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
                <h2>Total</h2>
                <h2 id="total">₹{totalAmount}</h2>
            </div>
            <button className="checkout-btn" id='checkout-btn' onClick={checkout}>Checkout</button>
            <button className="back-btn" id='back-btn' onClick={back}><img src='./backk.svg'/>Back</button>

        </div> 
    )

}