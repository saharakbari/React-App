import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// export let fetchProducts = createAsyncThunk(
// "products/fetchProducts",
// ()=>{

// return fetch("https://fakestoreapi.com/products")
// .then((response)=>{response.json()})
// .catch((error)=>{
//     throw error
// })

// })

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, thunkAPI) => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      return await response.json();
    } 
    catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);




let productSlice = createSlice({
    name:"product",
    initialState :{
        data:[],
        status:""
    },
    reducers :{},

    extraReducers:(builder)=>{

        builder
        .addCase(fetchProducts.pending ,(state)=>{
          state.status ="Loading"
        })
        .addCase(fetchProducts.fulfilled ,(state,action)=>{
          state.status ="Success",
          state.data =action.payload
        })
           .addCase(fetchProducts.rejected ,(state)=>{
          state.status ="error"
        })
    }

})

export default productSlice

