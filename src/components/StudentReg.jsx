import React from 'react'
import { useForm } from 'react-hook-form';

export const StudentReg = () => {
    const {register, handleSubmit} = useForm();
    const submit = (data)=>{
        console.log(data);
    }
    //... speraed operator
    //register array 
    //name push
  return (
    <div>
        
        <h1>STUDENT Registration</h1>
        <form onSubmit={handleSubmit(submit)}>
        <div>
            <label htmlFor="name">Name</label>
            <input type="text" {...register("name")}></input>
        </div>
        <div>
            <label htmlFor="email">Email</label>
            <input type="email" {...register("email")}></input>
        </div>
        <div>
            <label>age</label>
            <input type="number" {...register("age")}></input>
        </div>
        <div>
            <label>GENDER</label>
            <br></br>
            MALE: <input type="radio" name ="gender" value="male" {...register("gender")}></input>
            FEMALE: <input type="radio" name ="gender" value="female" {...register("gender")}></input>
        </div>
        <div>SELECT STREAM</div>
            <select {...register("stream")}>
                <option value="science">SCIENCE</option>
                <option value="commerce">COMMERCE</option>
                <option value="arts">ARTS</option>
            </select>
        <div>
            <input type="submit" value="Submit"></input>
        </div>
        </form>
    </div>
  )
}
