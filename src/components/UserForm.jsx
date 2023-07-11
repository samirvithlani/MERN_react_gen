import React, { useState } from 'react'

export const UserForm = () => {

    const submit = (e)=>{
        //form action...
        //action prevent
        e.preventDefault() //prevent default action
        //console.log("submit",e)
        console.log("submit",firstName,lastName,age,gender)
        alert("submit"+firstName+lastName+age+gender)
        //e.target.value
    }
    const [firstName, setfirstName] = useState('')  // firstname
    const [lastName, setlastName] = useState('')
    const [age, setage] = useState()
    const [gender, setgender] = useState('')

    const firstNameHandler = (e)=>{
        console.log("firstNameHandler",e.target.value)
        setfirstName(e.target.value) //
    }
  return (
    <div>
        <h1>ADD USER</h1>
        <form onSubmit={submit}>
            <div>
                <label>First Name</label>
                <input type="text" name="firstName" placeholder="First Name" onChange={(e)=>{firstNameHandler(e)}}></input>
                {firstName}
            </div>
            <div>
                <label>Last Name</label>
                <input type="text" placeholder="Last Name" onChange={(e)=>{setlastName(e.target.value)}}></input>
                {lastName}
            </div>
            <div>
                <label>Age</label>
                <input type="text" placeholder="Age" onChange={(e)=>{setage(e.target.value)}}></input>
                {age}
            </div>
            <div>
                <label>Gender</label>
                MALE :<input type="radio" value="male" name='gender' onChange={(e)=>{setgender(e.target.value)}}></input>
                FEMALE :<input type="radio" value="female" name='gender' onChange={(e)=>{setgender(e.target.value)}}></input>
                <br/>
                {gender}
            </div>
            <div>
                <input type="submit" value="Add User"></input>
            </div>
        </form>
    </div>
  )
}
