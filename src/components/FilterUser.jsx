import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export const FilterUser = () => {
  const [users, setusers] = useState([]);

  const getUserData = async () => {
    const res = await axios.get("https://node5.onrender.com/user/user/");
    setusers(res.data.data);
  };
  useEffect(() => {
    getUserData();
  }, []);

  const {register, handleSubmit} = useForm();

  const submitHandler = async (data) => {

    console.log("data....",data);
    var dataobj = {
        name: data.name,
        age: data.age,
        isActive: data.isActive === "true" ? true : false
    }
    let keyParams ={}
    
    for(let key in dataobj){
        if(dataobj[key] !== ""){
            keyParams[key] = dataobj[key]
            console.log("key",key);
        }
    }
    console.log("keyParams",keyParams);
    const res = await axios.get("https://node5.onrender.com/user/filter",{
        // params:{
        //     name: data.name,
        //     age: data.age
        // }
        params: keyParams
    })
    /////
    console.log(res.data.data);
    setusers(res.data.data);

  }

  return (
    <div>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" {...register("name")} />
            </div>
            <div>
                <label htmlFor="age">age</label>
                <input type="number" className="form-control" {...register("age")} />
            </div>
            <div>
                <label htmlFor="status">status</label>
                TRUE : <input type ="radio" value="true" {...register("isActive")} />
                false : <input type ="radio" value="false" {...register("isActive")} /> 

            </div>
            <div>
                <input type="submit" className="btn btn-primary" />
            </div>
        </form>
      <table className="table table-bordered table-dark">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email Id</th>
            <th scope="col">Age</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
            {
                users?.map((user) => {
                    return (<tr>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.age}</td>
                        <td>
                            {
                                user.isActive ? <span className="badge bg-success">Active</span> : <span className="badge bg-danger">Inactive</span>
                            }
                        </td>
                    </tr>)
                })
            }
        </tbody>
      </table>
    </div>
  );
};
