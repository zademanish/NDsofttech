import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./Slices/authSlice";
import productReducer from "./Slices/productSlice"
import adminProductReducer from "./Slices/adminProductSlice"

const store = configureStore({
    reducer:{
        auth: authReducer,
        products: productReducer,
        adminProducts: adminProductReducer,
    }
})

export default store;