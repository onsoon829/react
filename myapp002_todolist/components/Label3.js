import React, { useContext } from "react";

import { TodoContext } from "../context/TodoContext";

const Label3 = () => {
  const { todos } = useContext(TodoContext);

  return (
    <>
      {todos.map((todo) => {
        return (
          <div className="todo" key={todo.id}>
            <Label3 todo={todo} />
          </div>
        );
      })}
    </>
  );
};

export default Label3;
