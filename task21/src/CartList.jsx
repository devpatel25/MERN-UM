import Cart from "./Card";

function CartList({items}){
    return(
        items.map((item,index)=>
        (
            <div className="flex flex-wrap flex-row ">
            <Cart 
            key={index} 
            img={item.src}
            title={item.name}
            price={item.price}
            />
            </div>
        ))
    )
}

export default CartList;