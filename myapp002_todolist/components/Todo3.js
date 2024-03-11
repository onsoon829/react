import React, { useContext } from "react";
import Label3 from "./Label3";
import { TodoContext } from "../context/TodoContext";

const Todo3 = () => {
  const { todos } = useContext(TodoContext);
  return (
    <>
      {todos.map((todo) => {
        return (
          <div className="todo" key={todo.id}>
            <Label3
              todo={todo}
              updateTodo={updateTodo}
              deleteTodo={deleteTodo}
            />
          </div>
        );
      })}
    </>
  );
};

export default Todo3;
