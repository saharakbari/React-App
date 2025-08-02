import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../Redux/ProductSlice";
import cartSlice from "../Redux/CartSlice";



export default function Home(){

    let dispatch =useDispatch();

    let {add} = cartSlice.actions; //دسترسی به اکشنهای فرم کارت که در ردیوسر نوشته شده است

    useEffect(
        ()=>{
            dispatch(fetchProducts())
        } ,[])

        let {data,status} =useSelector((state)=>state.product)

        if (status =="Loading"){
            return <h2>عملیات در حال انجام هست</h2>
        }
        else if (status =="error"){
            return <h2>عملیات با خطا مواجه شد</h2>
        }

        if (data == undefined){
            return <h2>دیتا خالی است</h2>
        }

        return (

            <div className="row" style={{ display:"flex"}} >
                {
                    
                data.map(
                    
                    (item ,index)=>(

                        <div className="col-sm-6 col-md-4 col-lg-4"  key={index} style={{ width:"200px" ,padding:"10px" }} >
                            <img src={item.image} style={{heigth:"100px" , width:"100px"}}></img>
                            <p>{item.title}</p>
                            <p>{item.price}</p>
                            <button onClick={()=>dispatch(add(item))}>add to cart</button>

                        </div>
                    )
                    )
                }
            </div>
        )
   
}