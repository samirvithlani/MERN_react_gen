import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { AppContext } from '../context'

export const ToDoAdd = () => {
    const {register,handleSubmit} = useForm()
    const {todoDispatcher} = useContext(AppContext)
    const submitHandler = (data)=>{
        todoDispatcher(data,"ADD_TODO")
    }

  return (
    <div>
        <h1>ADD YOUR TODO</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>id</label>
                <input type="text" {...register("id")}></input>
            </div>
            <div>
                <label>name</label>
                <input type="text" {...register("name")}></input>
            </div>
            <div>
                <label>desc</label>
                <input type="text" {...register("desc")}></input>
            </div>
            <div>
                <label>status</label>
                <input type="text" {...register("status")}></input>
            </div>
            <div>
                
                <input type="submit" value="ADD"></input>
            </div>
        </form>
    </div>
  )
}
