import React from "react";
import ShowTodo from "./ShowTodo";
import AddNewTodo from "./AddNewTodo";

const TodoApp = props => {
  return (
    <>
      <AddNewTodo />
      <ShowTodo />
    </>
  );
};

export default TodoApp;
