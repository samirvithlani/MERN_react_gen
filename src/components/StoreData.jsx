import React from 'react'

export const StoreData = () => {
    const storeDateToLocalStorage = ()=>{

        localStorage.setItem('name',"royal")
        localStorage.setItem('age',"25")
        sessionStorage.setItem('name',"ram")
        //store data. to cookies
        window.document.cookie = "name=royal"
        alert("data stored")

    }
    const removeDataFromLocalStorage = ()=>{
        localStorage.removeItem('name')

        sessionStorage.removeItem('name')
        // localStorage.clear()
    }
  return (
    <div>
        <h1>Store Data</h1>
        <button onClick={()=>{storeDateToLocalStorage()}}>Store Data</button>
        <button className='btn btn-danger' onClick={()=>{removeDataFromLocalStorage()}}>Remove Data</button>
    </div>
  )
}
