import axios from "axios"
import { useQuery } from "react-query"

const fetchUserData =()=>{

    //return axios.get("https://node5.onrender.com/user/user")
    return axios.get("/user/user")
}

export const useFetchUserData =()=>{
    
    return useQuery('user',fetchUserData)
}