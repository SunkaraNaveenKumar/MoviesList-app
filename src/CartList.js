import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleDecrease } from "./Actions/MovieListAction";

const CartList=(props)=>{
    const dispatch=useDispatch()
   const {cart}=props
    return(
        <div>
            cart-{cart.length}
            <ul>
                {cart.map(ele=>{
                    return <li key={ele.id}>{ele.product}- <button onClick={()=>{dispatch(handleDecrease(ele.id))}}>-</button> {ele.quantity} <button>+</button></li>
                })}
            </ul>
        </div>
    )
}
export default CartList