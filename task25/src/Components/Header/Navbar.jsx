function Navbar(){
    return(
        <div className="navbar-con flex h-20 fixed top-0 z-20 left-0 bg-black text-white right-0 items-center justify-between px-8">
            <h1 className='logo font-serif font-bold text-3xl'>ZneakPeak</h1>
            <ul className="flex gap-6">
                <li className="cursor-pointer">Home</li>
                <li className="cursor-pointer">Categories</li>
                <li className="cursor-pointer">About Us</li>
            </ul>
            <button className="bg-gray-900 h-10 w-24 rounded-xl">Username</button>
        </div>
    )
}

export default Navbar;