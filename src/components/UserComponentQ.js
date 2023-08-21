import React, { useEffect } from "react";
import { useFetchUserData } from "../query/UserQuery";

export const UserComponentQ = () => {
  //const {register,handleSubmit,formState:{errors}} = useForm();
  const { data, isLoading, isError } = useFetchUserData();
  useEffect(() => {
    console.log("data", data);
    console.log("isLoading", isLoading);
    console.log("isError", isError);
  }, [data, isLoading]);

  return (
    <div>
        <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
    </div>
      <h1>React Query</h1>
      {
        isLoading && <h1>Loading...</h1>
      }
      
      
      <table className="table table-bordered">
      
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>age</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data?.data?.data?.map((user) => {
            return (
              <tr>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
