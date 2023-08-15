import axios from "axios";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

export const ApiDemo6 = () => {
  var id = useParams().id;
  var navigate = useNavigate();


//   const getUserById = async () => {

//     const res = await axios.get("https://node5.onrender.com/user/user/" + id);
//     console.log("single user....",res.data.data);
//   }

  useEffect(() => {
    
    //getUserById()
    
  }, [])
  
  const updateUser = async (data) => {
    console.log(data);
    var userObj = {
      name: data.name,
      email: data.email,
      age: data.age,
      isActive: data.isActive == "true" ? true : false,
    };
    // var userObj = {
    //     name:"raaj",
    //     email:"raj@gmail.com",
    //     age:23,
    //     isActive:true
    // }

    var res = await axios.put(
      "https://node5.onrender.com/user/user/" + id,
      userObj
    );
    console.log(res.data);
    if(res.status ===200){
        navigate("/apidemo5");
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    // defaultValues:{
    //     name:"ram"
    // }
    defaultValues: async ()=>{
        const res = await axios.get("https://node5.onrender.com/user/user/" + id);
        return res.data.data;
    }
  });

  return (
    <div>
      <h1>UPDATE USER</h1>
      <form onSubmit={handleSubmit(updateUser)}>
        <div>
          <label>Name</label>
          <input type="text" {...register("name")} />
        </div>
        <div>
          <label>Email</label>
          <input type="text" {...register("email")} />
        </div>
        <div>
          <label>Age</label>
          <input type="text" {...register("age")} />
        </div>
        <div>
          <label>isActive</label>
          <input type="text" {...register("isActive")} />
        </div>
        <div>
          <input type="submit" value="UPDATE USER" />
        </div>
      </form>
    </div>
  );
};
