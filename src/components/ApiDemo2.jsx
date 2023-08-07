import axios from 'axios'
import React from 'react'

export const ApiDemo2 = () => {
    const getUserData = ()=>{

        axios.get("http://localhost:5000/user/user").then((res)=>{
            console.log(res.status)
            console.log(res.data.user)
        }).catch((err)=>{
            console.log(err)
        })
    }
  return (
    <div>ApiDemo2
        <button onClick={()=>{getUserData()}}>Get User Data</button>
    </div>
  )
}
