import React from 'react'
import { StudentDetail } from './StudentDetail'

export const Students = (props) => {

    var student ={
        id:1,
        name:"John",
        age:20
    }
    var title = "royal enfield"
  return (
    <div>
        <h1>{props.t}</h1>
        <h2 style={props.style}>{props.add}</h2>
        <h1>Students</h1>

        <StudentDetail stu = {student} t = {props.t}/>
    </div>
  )
}
