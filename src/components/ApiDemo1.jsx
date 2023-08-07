import axios from 'axios'
import React, { useState } from 'react'

export const ApiDemo1 = () => {

    const [users, setusers] = useState([])
    const getUserData = async () => {

        const res = await axios.get("https://reqres.in/api/users?page=2")
        console.log(res.status)
        console.log(res.data.data)
        setusers(res.data.data)
    }
  return (
    <div>
        <button onClick={()=>{getUserData()}}>Get User Data</button>
        <table className='table table-dark'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Email</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Avatar</th>
                </tr>
            </thead>
            <tbody>
                {
                    users?.map((user)=>{
                        return(
                            <tr>
                                <td>{user.id}</td>
                                <td>{user.email}</td>
                                <td>{user.first_name}</td>
                                <td>{user.last_name}</td>
                                <td>
                                    <img src ={user.avatar} alt="Avatar" />
                                </td>
                                </tr>
                        )
                    })
                }
            </tbody>
        
        </table>
    </div>
  )
}
