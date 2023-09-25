import { createSlice } from "@reduxjs/toolkit"

const initialState ={
    usersData:{}
}

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        //action....
        addUserToStore:(state,action)=>{
            state.usersData = action.payload
            //state.users.push(action.payload)
            //state.users = [...state.users,action.payload]
        }
    }
})
export const {addUserToStore} = userSlice.actions
export default userSlice.reducer