import React, { useState } from 'react'

export const GetStorageDate = () => {
    const [name, setname] = useState()
    const [age, setage] = useState()
    const [name1, setname1] = useState()
    const getDataFromLocalStorage = ()=>{

        //var name = localStorage.getItem('name')
        setname(localStorage.getItem('name'))
        setage(localStorage.getItem('age'))
        setname1(sessionStorage.getItem('name'))

        //get cokkie data
        var cookieData = document.cookie.split(';')
        console.log(cookieData)
        
    }
    console.log(name)
  return (
    <div>GetStorageDate
        <button onClick={()=>{getDataFromLocalStorage()}}>Get Data</button>
        {
            name ? <h1>{name}</h1> : <h1>No Data</h1>
        }
        {
            age ? <h1>{age}</h1> : <h1>No Data</h1>
        }
        {
             name1 ? <h1>{name1}</h1> : <h1>No Data</h1>   
        }
    </div>
  )
}
