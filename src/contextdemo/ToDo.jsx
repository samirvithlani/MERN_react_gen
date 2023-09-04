import React, { useState } from "react";
import { AppContext } from "../context";
import { TodoList } from "./TodoList";

export const ToDo = () => {
  const [todos, settodos] = useState([
    {
      id: 1,
      name: "go to school",
      desc: "go to school on time.",
      status: true,
    },
    {
      id: 2,
      name: "go for lunch",
      desc: "go to lunch with friends",
      status: true,
    },
  ]);

  //payload ->object
  const todoDispatcher = (payload, action) => {
    switch (action) {
      case "ADD_TODO":
        settodos([...todos, payload]);
        // todos = [...todos,payload]
        // settodos(todos)
        break;
      case "REMOVE_TODO":
        settodos(
          todos.filter((todo) => {
            return todo.id !== payload;
          })
        );
        break;

      default:
        break;
    }
  };

  return (
    <div>
      <h1>TODO COMPONENT</h1>
      <AppContext.Provider value={{ todos, todoDispatcher }}>
        <TodoList></TodoList>
      </AppContext.Provider>
    </div>
  );
};
