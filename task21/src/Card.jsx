import './Cart.css'

function Cart({img,title,price}){
    return (
        <div className="cart bg-white flex flex-col w-auto min-h-48 gap-4 justify-center items-center">
            <img className="rounded-lg" src={img} alt={title} />
            <h2>{title}</h2>
            <p>Rs. {price}.00</p>
        </div>
    )

}

export default Cart;