import axios from "axios"
import { useMutation, useQuery } from "react-query"

const fetchUserData =()=>{

    //return axios.get("https://node5.onrender.com/user/user")
    return axios.get("/user/user")
}

export const useFetchUserData =()=>{
    
    return useQuery('user',fetchUserData,{
        retry:10,
        retryDelay:100,
        refetchOnMount:false,
        enabled:false
    })
}

const addUserData = (user)=>{

    console.log("user obj...",user)
    return axios.post("/user/user",user)
}
export const useAddUserData =()=>{
    return useMutation(addUserData)
}