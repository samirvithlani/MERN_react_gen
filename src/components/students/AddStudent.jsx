import React from 'react'
import { useForm } from 'react-hook-form';

export const AddStudent = (props) => {

   //[] 
   // ...spread opeararto
   //push ()
   //register.push({name:e.target.value})
    const {register, handleSubmit, formState: {errors}} = useForm({mode:'onBlur'});

    const registerStudent = (data)=>{
       // console.log(data);
        props.addStudent(data);
    }
    const validationSchema = {
        name:{
            required:{
                value:true,
                message:"Name is required"
            }
        },
        email:{
            required:{
                value:true,
                message:"Email is required"
            },
            maxLength:{
                value:20,
                message:"Max length is 20"
            }
        }
    }

  return (
    <div>
        <h1>Add Student</h1>
        <form onSubmit={handleSubmit(registerStudent)}>
            <div>
                <label>Name</label>
                
                <input type="text" {...register("name",validationSchema.name)}></input>
                {errors.name && <p>{errors.name.message}</p>}
            </div>
            <div>
                <label>Email</label>
                <input type="email" {...register("email",validationSchema.email)}></input>
                {errors.email && <p>{errors.email.message}</p>}
            </div>
            <div>
                <label>Phone</label>
                <input type="text" {...register("phone")}></input>
            </div>
            <div>
                <label>Address</label>
                <input type="text" {...register("address")}></input>
            </div>
            <div>
                <input type="submit" value="Add Student"></input>
            </div>

        </form>
    </div>
  )
}
