import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./CartSlice";
import productSlice from "./ProductSlice";

let store =configureStore({

    reducer:{
        cart:cartSlice.reducer,
        product:productSlice.reducer
    }
})

export default store