import React, { useContext } from 'react'
import { AppContext } from '../context'

export const ToDoSub = () => {
    const {todos} = useContext(AppContext)
  return (
    <div>
        <h1>TO DO SUB</h1>
        <ul>
            {
                todos?.map((todo)=>{
                    return(
                        <li>
                            <p>{todo.name}</p>
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}
