import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ApidDemo4 = () => {
  var navigate = useNavigate();
  const postData = async (data) => {
    // var objData = {
    //     name:"Rahul",
    //     job:"Developer"
    // }
    console.log("data.....", data);
    //https://node5.onrender.com/user/user/
    var res = await axios.post("https://reqres.in/api/users", data);
    if (res.status === 201) {
      //alert("Data Inserted");
      toast.success("User inserted....", {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      console.log(res.data);
      setTimeout(() => {
        navigate("/aboutus");
      }, 3100);
    }
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div>
      <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <h1>Api Demo 4</h1>
      {/* <button onClick={()=>{postData()}}>Post Data</button> */}
      <form onSubmit={handleSubmit(postData)}>
        <div>
          <label>Name</label>
          <input type="text" {...register("name", { required: true })} />
        </div>
        <div>
          <label>Job</label>
          <input type="text" {...register("job", { required: true })} />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};
