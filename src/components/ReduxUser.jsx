import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import{addUserToStore} from '../redux/UserSlice'

export const ReduxUser = () => {

    const dispatch = useDispatch()

    const getUserData = async() => {

        const res = await axios.get("https://node5.onrender.com/user/user")
        //useState...
        dispatch(addUserToStore(res.data))


    }
    useEffect(() => {

      getUserData()
    
      
    }, [])
    
  return (
    <div>
        <h1>Redux User</h1>
    </div>
  )
}

