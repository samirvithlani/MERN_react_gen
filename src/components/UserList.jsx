import React from "react";

export const UserList = () => {
  var users = [
    {
      id: 1,
      name: "John",
      age: 20,
    },
    {
      id: 2,
      name: "Jill",
      age: 30,
    },
    {
      id: 3,
      name: "Peter",
      age: 40,
    },
  ];

  return (
    <div>
        
      {users.map((user) => {
        return (
          <div>
            <h1>Id:-{user.id}</h1>
            <h1>Name:-{user.name}</h1>
            <h2>age:-{user.age}</h2>
          </div>
        );
      })}
    </div>
  );
};
