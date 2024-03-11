import React from "react";

const Label1 = (props) => {
  const { todo, updateTodo, deleteTodo } = props;
  return (
    <>
      <h3>
        <label
          onClick={() => updateTodo(todo.id)} // 클릭 시 완료 상태 변경 함수 호출
          className={todo.completed === 1 ? "completed" : null} // 완료된 할일에 대한 스타일 지정
        >
          {todo.todoname} {/* 할일 이름 */}
        </label>
        &nbsp;&nbsp; {/* 공백 */}
        {/* 할일 삭제 버튼 */}
        <button onClick={() => deleteTodo(todo.id)}>삭제</button>
      </h3>
    </>
  );
};

export default Label1;
