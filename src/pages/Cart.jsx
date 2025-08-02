import { useDispatch, useSelector } from "react-redux"
import cartSlice from "../Redux/CartSlice";
import { useNavigate } from 'react-router-dom';

export default function Cart(){


    let cartproducts = useSelector((state)=>state.cart)
    let dispatch = useDispatch();
    let {remove,clearCart,changeQuantity}= cartSlice.actions
    let navigate = useNavigate();

    let total =0;
    function calculateTotal(){
        cartproducts.map(
            (item)=> total += item.quantity * item.price
        )
        return total
    }

    return(

        <div>

            {
        cartproducts.map(

            (item ,index)=>(
            <div key ={index}>
                        <img src={item.image} style={{heigth:"100px" , width:"100px"}} ></img>
                        <div>
                        <button disabled={item.quantity <=1} onClick={()=>dispatch(changeQuantity({id:item.id,change:-1}))}>-</button>

                        <p >{item.quantity}</p>

                        <button onClick={()=>dispatch(changeQuantity({id:item.id,change:+1}))}>+</button>
                        </div>
                           <p>{item.title}</p>
                            <p> {item.price}</p>
                            <p>total price is :{item.quantity * item.price}$</p>
                            <button onClick={()=>dispatch(remove(item.id))}>remove</button>

            </div>


            )
        )

            }

            <div>
                <p>total price for all product :{calculateTotal()}$</p>
                <button onClick={()=>(dispatch(clearCart() , navigate('/'))) }>clear cart</button>
            </div>
        </div>
    )
}