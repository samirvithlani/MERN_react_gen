import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const ApiDemo5 = () => {
  const [users, setusers] = useState([]);

  const deleteUser = async (id) => {
    console.log(id);
    
    //this id is contacat with url
    const res = await axios.delete("https://node5.onrender.com/user/user/"+id);
    console.log(res.data);
    //for getting update record from database..... get api need to call
    getUserData();
  }

  useEffect(() => {
    console.log("useEffect called");
    getUserData();
  }, []);

  const getUserData = async () => {
    try{
    const res = await axios.get("https://node5.onrender.com/user/user");
    console.log(res.data);
    setusers(res.data.data);
    }catch(err){
        alert("Something went wrong");
    }
  };
  return (
    <div>
      <h1>Api Demo 5</h1>
      <table className="table table-dark">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>AGe</th>
            <th>status</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>{
                    users?.map((user)=>{
                        return(
                            <tr>
                                <td>{user._id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.age}</td>
                                <td>{user.isActive ? "Active" :"Not Active"}</td>
                                <td>
                                    <button onClick={()=>{deleteUser(user._id)}} className="btn btn-danger">DELETE</button>
                                    <Link to = {`/update/${user._id}`} className="btn btn-primary">EDIT</Link>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
      </table>
    </div>
  );
};
