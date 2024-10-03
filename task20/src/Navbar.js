import './Navbar.css';
function Navbar(){
    return(
        <div className="navbar-con">
            <h1 className='logo'>ZneakPeak</h1>
            <ul>
                <li>Home</li>
                <li>Categories</li>
                <li>About Us</li>
            </ul>
            <button>Username</button>
        </div>
    )
}

export default Navbar;