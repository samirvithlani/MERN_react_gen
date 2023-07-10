import React from "react";

export const EmployeeList = (props) => {
  console.log("employeeList..", props);
  return (
    <div>
      <h1>EMPLOYEE LIST</h1>
      <button onClick={()=>{props.test("royal")}}>Click Me 1</button>
      <div>
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="row">Employee Id</th>
              <th>Employee Name</th>
              <th>Employee Age</th>
              <th>Employee Designation</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {props.employees.map((emp) => {
              return (
                <tr>
                  <td>{emp.id}</td>
                  <td>{emp.name}</td>
                  <td>{emp.age}</td>
                  <td>{emp.designation}</td>
                  <td>
                    <button onClick={()=>{props.delete(emp)}} className ="btn btn-danger">DELETE</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
