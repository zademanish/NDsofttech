import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
import { toast } from "sonner";

// retrive user info and token from localstorage if available
const userFromStorage = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) :null;


// initial state
const initialState = {
    user: userFromStorage,
    loading:false,
    error:null,
};

// Async Thunk for User Login

export const loginUser = createAsyncThunk("auth/loginUser", async (userData, {rejectWithValue})=>{
    try{
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/users/login`,userData);
        localStorage.setItem("userInfo", JSON.stringify(response.data.user));
        localStorage.setItem("userToken", response.data.token);
        if(response.data){
            toast.success(response.data.message);
        }
        return response.data.user; //return the user object from the response

    } catch(error){
        toast.error(error.response.data.message);
        return rejectWithValue(error.response.data);
    }
})

// Async Thunk for User registration
export const registerUser = createAsyncThunk("auth/registerUser", async (userData, {rejectWithValue})=>{
    try{
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/users/register`,userData);
        localStorage.setItem("userInfo", JSON.stringify(response.data.user));
        localStorage.setItem("userToken", response.data.token);
        if(response.data){
            toast.success(response.data.message);
        }
        return response.data.user; //return the user object from the response

    } catch(error){
        toast.error(error.response.data.message);
        return rejectWithValue(error.response.data);
    }
})

// Slice
const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        logout:(state)=>{
            state.user = null;
           // Reset guest ID on logout
            localStorage.removeItem("userInfo");
            localStorage.removeItem("userToken");
           // Set a new guest ID in a localStorage
        },
      
    },
    extraReducers:(builder)=>{
        builder.addCase(loginUser.pending, (state)=>{
            state.loading = true;
            state.error = null;
        })
        .addCase(loginUser.fulfilled, (state, action)=>{
            state.loading = false;
            state.user = action.payload;
        })
        .addCase(loginUser.rejected, (state,action)=>{
            state.loading = false;
            state.error = action.payload.message;
        })

        .addCase(registerUser.pending, (state)=>{
            state.loading = true;
            state.error = null;
        })
        .addCase(registerUser.fulfilled, (state,action)=>{
            state.loading = false;
            state.user = action.payload;
        })
        .addCase(registerUser.rejected, (state,action)=>{
            state.loading = false;
            state.error = action.payload.message;
        })
       
    }

});

export const { logout, generateNewGuestId } = authSlice.actions;

export default authSlice.reducer;