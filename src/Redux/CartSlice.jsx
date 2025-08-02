import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

 export let cartSlice = createSlice({

    name :"cart",
    initialState:[],

    reducers:{
    add:(state ,action)=>{
        let item=state.find(
            (item)=>item.id== action.payload.id
        )
        if(item)
        {
            item.quantity += 1

        }
        else{

            state.push({...action.payload, quantity:1})
        }
    },

    remove:( state, action)=>{
       return state.filter(
            (item )=>item.id != action.payload
        )
        

    },

    clearCart:( state, action)=>{
        (state) =>[]
    },

    changeQuantity:(state ,action) =>{
     let {id,change} =action.payload;
     let item =state.find(
        (item)=>item.id == id
     )
        item.quantity += change
    } ,

    }
    
})

export default cartSlice