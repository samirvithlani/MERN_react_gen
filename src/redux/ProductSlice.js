import { createSlice } from "@reduxjs/toolkit"

//intialstate
const initialState ={
    products:[],
    
}

const productSlice = createSlice({
    name:"product",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            state.products.push(action.payload)
        },
        removeFromCart:(state,action)=>{
            state.products = state.products.filter(item=>item.id!==action.payload.id)
        }
        
    }
})
export const {addToCart,removeFromCart} = productSlice.actions
export default productSlice.reducer