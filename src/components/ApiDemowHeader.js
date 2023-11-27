import axios from 'axios'
import React, { useEffect } from 'react'

export const ApiDemowHeader = () => {
    const getUserData = async () => {

        try{
        const res = await axios.get('http://localhost:3000/user/user',{
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("token")
            }
        })
        console.log(res.data)
        }catch(err){
            console.log(err)
        }

    }
    useEffect(() => {
        getUserData()
    })
  return (
    <div>
        <h1>Api Demo</h1>
    </div>
  )
}
