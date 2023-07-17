import React, { useState } from 'react'

export const EmployeeForm = () => {
    const submit = (e)=>{
        e.preventDefault()
        alert(name+" "+age+" "+designation)
        //console.log(name+" "+age+" "+designation)
    }
    const [name, setname] = useState('')
    const [age, setage] = useState()
    const [designation, setdesignation] = useState('')
  return (
    <div>
        <form onSubmit={submit}>
            <div>
                <label>Name</label>
                <input type="text" name="name" placeholder="Name" onChange={(e)=>{setname(e.target.value)}}></input>
            </div>
            <div>
                <label>Age</label>
                <input type="text" name="age" placeholder="Age" onChange={(e)=>{setage(e.target.value)}}></input>
            </div>
            <div>
                <label>Designation</label>
                <input type="text" name="designation" placeholder="Designation" onChange={(e)=>{setdesignation(e.target.value)}}></input>
            </div>
            <div>
                <input type="submit" value="Add Employee"></input>
            </div>
        </form>
    </div>
  )
}
