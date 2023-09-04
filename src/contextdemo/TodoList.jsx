import React, { useContext } from 'react'
import { AppContext } from '../context'
import { ToDoSub } from './ToDoSub'
import { ToDoAdd } from './ToDoAdd'

export const TodoList = () => {

  const {todos,todoDispatcher} = useContext(AppContext)
  return (
    <div>
      <table className='table table-dark'>
        <thead>
          <tr>
            <td>ID</td>
            <td>NAME</td>
            <td>DESC</td>
            <td>STATUS</td>
            <td>ACTION</td>
          </tr>
        </thead>
        <tbody>
          {
            todos?.map((todo)=>{
              return(<tr>
                <td>{todo.id}</td>
                <td>{todo.name}</td>
                <td>{todo.desc}</td>
                <td>{todo.status ===true ? "TRUE":"FALSE"}</td>
                <td>
                  <button onClick={()=>{todoDispatcher(todo.id,"REMOVE_TODO")}} className="btn btn-danger">DELETE</button>
                </td>
              </tr>)
            })
          }
        </tbody>
      </table>
      
      <ToDoSub/>

      <ToDoAdd/>
    </div>
  )
}
