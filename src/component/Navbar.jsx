import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router ,Route,Routes } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export default function Navbar(){

     let dispatch =useDispatch();
    let cartproducts = useSelector((state)=>state.cart)
    let navigate = useNavigate();
    

    let totalBasket = cartproducts.length
   

    return (

        <div style={{top:"0", position:"fixed" , width:"100%",
            backgroundColor: "#f0f0f0",
            color: "#333",
            fontSize: "14px" ,
             padding:"2px"
        }} >
       
<div style={{float: "left"}}>
         <button style={{textAlign: "left"}} onClick={() => {
                
                navigate('/');
                }}>sahar shop
                       </button>
                       </div>
         <div style={{float: "right"}}>
                <button onClick={() => {
                
                navigate('/cart');
                }}>   <FontAwesomeIcon icon={faShoppingCart} />
                       </button>

               <p>total:{totalBasket}</p> 
             </div>
                </div>
    )
}