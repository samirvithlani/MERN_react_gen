import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./redux/ProductSlice";
import userReducer from "./redux/UserSlice";

export const store = configureStore({
    reducer:{
        product:productReducer,
        user:userReducer
    }
})