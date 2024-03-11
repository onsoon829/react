import React, { useEffect, useRef, useState } from "react";
import Input1 from "./components/input1";
import Todo1 from "./components/todo1";
import axios from "axios";
import { InputContext } from "./context/InputContext ";
import Input3 from "./components/input3";
import { TodoContext } from "./context/TodoContext";
import Todo3 from "./components/Todo3";

//전역상태관리중 하나인 context API로 리팩토링
const App3 = () => {
  const inputRef = useRef(""); // input 요소에 대한 참조를 생성

  const wrap = {
    // 스타일을 정의한 객체
    width: "500px", // 가로 너비
    border: "1px solid black", // 테두리 스타일
    margin: "10px auto", // 마진 설정
  };

  const [todos, setTodos] = useState([]); // 할일 목록과 완료 상태를 관리
  const [input, setInput] = useState(""); // 새로운 할일을 입력하는 input 상태

  const handleChangeText = (e) => {
    setInput(e.target.value); // input 요소의 값을 업데이트
  };

  const updateTodo = async (id) => {
    const completed = todos.find((todo) => todo.id === id)?.completed;
    await axios
      .put(`/todo/${id}`, { completed: completed ? 0 : 1 })
      .then((response) => {
        console.log(response);
        getTodos();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteTodo = async (id) => {
    await axios
      .delete(`/todo/${id}`)
      .then((response) => {
        console.log(response);
        getTodos();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const insertTodo = async (e) => {
    e.preventDefault();
    await axios
      .post("/todo", { todoname: input })
      .then((response) => {
        getTodos();
        setInput("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getTodos = async () => {
    await axios
      .get(`/todo/all`)
      .then((response) => {
        setTodos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getTodos();
  }, []);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="App" style={wrap}>
      <h1>TODO LIST</h1>
      <InputContext.Provoider
        value={{ insertTodo, input, inputRef, handleChangeText }}
      >
        <Input3 />
      </InputContext.Provoider>

      <TodoContext.Provider value={{ todos, updateTodo, deleteTodo }}>
        <Todo3 />
      </TodoContext.Provider>
    </div>
  );
};

export default App3;
