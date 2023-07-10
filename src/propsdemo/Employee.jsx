import React, { useState } from 'react'
import { EmployeeList } from './EmployeeList'

export const Employee = () => {

    function test(name){
        alert("test"+name)
    }

    function deleteEmployee (emp){
        console.log("deleteEmployee",emp)
        //apply filter

        employees = employees.filter((e)=>{
            return e.id != emp.id
        })
        console.log("after delete employees",employees)
        setemployees(employees)
        //after delete updated employee object -->
        //useSate using setemp function we are updateing our state
    }

    //data --> variable    var data
    //setData fuiton --> function   function setData()
    //useState --> hook
    //useState(initalValue)
    //arr =[]
    //const [data, setdata] = useState()
    var [employees, setemployees] = useState(
    [{
        id: 1,
        name: "John",
        age: 30,
        designation: "Manager"
      },
      {
        id: 2,
        name: "Rajan",
        age: 25,
        designation: "Software Engineer"
      },
      {
        id: 3,
        name: "Rahul",
        age: 35,
        designation: "Team Lead"
      },
      {
        id: 4,
        name: "Rohit",
        age: 40,
        designation: "Sr. Software Engineer"
      }
    ])
    
  return (
    <div>
        <h1>EMPLOYEE DATA</h1>
        <button onClick={()=>{test()}}>Click Me</button>
        <EmployeeList employees = {employees} test ={test} delete = {deleteEmployee}></EmployeeList>
    </div>
  )
}
