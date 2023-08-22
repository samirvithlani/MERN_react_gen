import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAddUserData } from "../query/UserQuery";

export const AddUserWithQ = () => {
  //const {isLoading, error, data,isIdle} = useAddUserData()
  const mutation = useAddUserData();
  useEffect(() => {
    console.log("is loading.....?", mutation.isLoading);
    console.log("is idle.....?", mutation.isIdle);
    console.log("is error.....?", mutation.error);
    console.log("is data.....?", mutation.data);
    if (mutation.isSuccess) {
      alert("user added successfully");
    }
  }, [mutation.isLoading, mutation.isIdle]);
  var userObj = {
    name: "amit",
    email: "amit@gmail.com",
    age: 30,
    isActive: true,
  };
  const { register, handleSubmit } = useForm();
  const submitHandler = (data) => {
    var userObj = {
      name: data.name,
      email: data.email,
      age: data.age,
      isActive: data.isActive === "true" ? true : false,
    };
    //api...
    mutation.mutate(userObj);
  };

  return (
    <div>
      <h1>AddUserWithQ</h1>
      {/* <button onClick={()=>{mutation.mutate(userObj)}}>Add User</button> */}
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" {...register("name")} />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" {...register("email")} />
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input type="text" id="age" {...register("age")} />
        </div>
        <div>
          <label htmlFor="isActive">isActive</label>
          <input type="text" id="isActive" {...register("isActive")} />
        </div>
        <div>
          <input type="submit" value="add suer"></input>
        </div>
      </form>
    </div>
  );
};
