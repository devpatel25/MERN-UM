import React from "react";
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider,createBrowserRouter,createRoutesFromElements } from 'react-router-dom';
import Layout from './Components/Layout'
import PaymentForm from "./Components/Payment";
import LeftCon from "./Components/LeftCon";

export const router =createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route path="" element={<LeftCon />} />
            <Route path="payment" element={<PaymentForm />} />
        </Route>
    )
)

