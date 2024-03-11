import { useEffect, useRef, useState } from "react"; // React에서 제공하는 훅들을 가져옴
import "./App.css"; // App 컴포넌트에 대한 CSS 파일을 가져옴
import Input1 from "./components/input1";
import Todo1 from "./components/todo1";

//props로 리팩토링
function App1() {
  // App 컴포넌트 선언
  const inputRef = useRef(""); // input 요소에 대한 참조를 생성

  const wrap = {
    // 스타일을 정의한 객체
    width: "500px", // 가로 너비
    border: "1px solid black", // 테두리 스타일
    margin: "10px auto", // 마진 설정
  };

  // 할일 목록 초기값 설정
  let boardList = [
    { id: 1, todoname: "운동하기", completed: 0 }, // 할일 항목 1
    { id: 2, todoname: "SNS꾸미기", completed: 1 }, // 할일 항목 2
    { id: 3, todoname: "사진정리하기", completed: 0 }, // 할일 항목 3
  ];

  // useState 훅을 사용하여 상태값 초기화
  const [todos, setTodos] = useState([...boardList]); // 할일 목록과 완료 상태를 관리
  const [input, setInput] = useState(""); // 새로운 할일을 입력하는 input 상태

  // input 값이 변경될 때 호출되는 함수
  const handleChangeText = () => {
    setInput(document.querySelector("#work").value); // input 요소의 값을 업데이트
  };

  // 할일의 완료 상태를 업데이트하는 함수
  const updateTodo = (id) => {
    setTodos((todo) => {
      return todo.id === id
        ? { ...todo, completed: todo.completed === 1 ? 0 : 1 } // 완료 상태를 토글
        : todo;
    });
  };

  // 할일을 삭제하는 함수
  const deleteTodo = (id) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id; // 삭제할 id와 다른 할일만 필터링하여 남김
      })
    );
  };

  // 새로운 할일을 추가하는 함수
  const insertTodo = (e) => {
    e.preventDefault(); // 기본 이벤트 페이지 이동 방지
    setTodos((prevState) => {
      return [
        ...prevState,
        { id: todos.length + 1, todoname: input, completed: 0 }, // 새로운 할일 추가
      ];
    });

    setInput(""); // 입력값 초기화
  };

  // useEffect 훅을 사용하여 렌더링 이후에 실행되는 부분
  useEffect(() => {
    inputRef.current.focus(); // 페이지가 렌더링 된 후에 input 요소에 포커스를 줌
  });

  // 컴포넌트 렌더링
  return (
    <div className="App" style={wrap}>
      {" "}
      {/* 스타일을 적용한 div */}
      <h1>TODO LIST</h1> {/* 제목 */}
      <Input1
        insertTodo={insertTodo}
        input={input}
        inputRef={inputRef}
        handleChangeText={handleChangeText}
      />
      {/* 할일 목록을 매핑하여 렌더링 */}
      <Todo1 todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App1; // App 컴포넌트를 내보냄
