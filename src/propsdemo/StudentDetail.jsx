import React from 'react'

export const StudentDetail = (props) => {
    console.log(props)
  return (
    <div>StudentDetail

        <h1>Id ={props.stu.id}</h1>
        <h1>Name ={props.stu.name}</h1>
        <h1>Age ={props.stu.age}</h1>
    </div>

  )
}
