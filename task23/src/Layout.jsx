import React from "react";
import { Navbar,Home,About,Contact, Footer } from "./components";
import { Outlet } from 'react-router-dom'

export default function Layout(){
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}