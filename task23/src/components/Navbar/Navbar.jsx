import React from "react";
import { Link, NavLink } from "react-router-dom";



function Navbar(){
    return(
        <nav className="flex justify-between items-center relative top-0 left-0 right-0 bg-transparent h-20 w-screen px-12">
            <Link to="/"><h1 className="text-4xl text-black font-bold">Logo<span className='text-sm relative left-0 -top-4'>®</span></h1></Link>
            <ul className="flex flex-row w-auto gap-8 text-l text-gray-800 cursor-pointer">
                <li>
                    <NavLink to='/' className={({isActive})=>`${isActive ? "text-orange-700" : "text-gray-800"}`}>
                        Home
                    </NavLink>
                </li>
                <li><NavLink to='/about' className={({isActive})=>`${isActive ? "text-orange-700" : "text-gray-800"}`}>
                        About Us
                    </NavLink></li>
                <li><NavLink to='/contact' className={({isActive})=>`${isActive ? "text-orange-700" : "text-gray-800"}`}>
                        Contact Us
                    </NavLink></li>
            </ul>
            <ul className="flex flex-row w-auto gap-4 text-l text-white cursor-pointer">
            <li className="bg-orange-700 px-3 py-2 rounded-xl hover:opacity-75">
                <NavLink to="/signup">Sign Up</NavLink></li>
            <li className="bg-orange-700 px-3 py-2 rounded-xl hover:opacity-75">
                <NavLink to="/login">Login</NavLink>
            </li>
            </ul>
        </nav>
    )
}

export default Navbar;