import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

export const LoginComponent = () => {
    const {register, handleSubmit} = useForm();
    const [user, setuser] = useState({
        id:101,
        email: 'raj@gmail.com',
        password: '123456'
    })
    const LoginUser = (data) => {
        console.log(data);
        //compare data and user object if both compare then user is valid
        if(data.email === user.email && data.password === user.password){
            alert('Login Successfull');
            localStorage.setItem('id',user.id);
        }
        else{
            alert('Login Failed');
        }
    }
  return (
    <div>
        <h1>LOGIN COMPOENNT</h1>
        <form onSubmit={handleSubmit(LoginUser)}>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" {...register('email')} />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" {...register('password')} />
            </div>
            <div>
                <input type="submit" value="Login" />
            </div>
        </form>
    </div>
  )
}
