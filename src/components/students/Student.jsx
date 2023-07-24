import React, { useState } from "react";
import { AddStudent } from "./AddStudent";

export const Student = () => {

  var [students, setstudents] = useState([
    {
      name: "amit",
      email: "amit@gmail.com",
      phone: "1234567890",
      address: "delhi",
    },
    {
      name: "raj",
      email: "raj@gmail.com",
      phone: "1234567890",
      address: "mumbai",
    },
  ]);


  const addStudent = (obj) => {
    console.log("student",obj);
    //students.push(obj);
    setstudents([...students,obj])
    
  }

  return (
    <div>
      <h1>STUDENT COMPONENT</h1>
      <table className="table table dark">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {students.map((st) => {
            return (
              <tr>
                <td>{st.name}</td>
                <td>{st.email}</td>
                <td>{st.phone}</td>
                <td>{st.address}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <AddStudent addStudent = {addStudent}  />
    </div>
  );
};
