import React, { useContext } from 'react';
import CartContext, { CartProvider } from '../CartContext'
import './Main.css';
import LeftCon from './LeftCon';
import RightCon from './RightCon';
import {Outlet} from 'react-router-dom'
import { RouterProvider } from 'react-router-dom';
import {router} from '../Main'
import Navbar from './Navbar';

export default function Layout() {
    const { cartItems, addToCart, addQty, minusQty,checkout,data } = useContext(CartContext);
    return (
        <div className="main">
          {/* <LeftCon /> */}
          <Navbar />
          <Outlet />
          <RightCon />
        </div>
    );
  }
  

