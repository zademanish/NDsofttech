import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


// Async thunk to fetch similar products

export const fetchAllProducts = createAsyncThunk("products/fetchAllProducts",
    async ()=>{
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/products`);
        return response.data;
    }
);

const productSlice = createSlice({
    name:"products",
    initialState: {
        products:[],
        loading: false,
        error:null,
    },
    
    extraReducers :(builder)=>{
        builder
        .addCase(fetchAllProducts.pending, (state)=>{
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchAllProducts.fulfilled, (state, action)=>{
            state.loading = false;
            state.products = action.payload;
        })
        .addCase(fetchAllProducts.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.error.message;
        })
    }
});

export const {setFilters, clearFilters} = productSlice.actions;
export default productSlice.reducer;