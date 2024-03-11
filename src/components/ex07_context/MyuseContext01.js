import React, { useState } from "react"; // 리액트와 useState 훅을 불러옵니다.
import Left01 from "./Left01"; // Left01 컴포넌트를 불러옵니다.
import Right01 from "./Right01"; // Right01 컴포넌트를 불러옵니다.
import { UserContext } from "./contexts/UserContext"; // UserContext를 불러옵니다.
import { ThemeContext } from "./contexts/ThemeContext"; // ThemeContext를 불러옵니다.
import "./MyuseContext01.css"; // MyuseContext01.css 스타일을 불러옵니다.

const MyuseContext01 = () => {
  // MyuseContext01 함수형 컴포넌트를 선언합니다.
  const [name, setName] = useState("홍길동"); // name 상태와 setName 함수를 정의하고 기본값을 "홍길동"으로 설정합니다.
  const [number, setNumber] = useState(0); // number 상태와 setNumber 함수를 정의하고 기본값을 0으로 설정합니다.

  // 이름 변경 함수를 정의합니다.
  const onHandleName = () => {
    // name 상태를 변경합니다. 현재 이름이 "홍길동"이면 "여진그"로, 그렇지 않으면 "홍길동"으로 설정합니다.
    setName(name === "홍길동" ? "여진그" : "홍길동");
  };

  // 숫자 증가 함수를 정의합니다.
  const onHandleIncrease = () => {
    // number 상태를 이전 상태에 1을 더한 값으로 업데이트합니다.
    setNumber((number) => number + 1);
  };

  // 숫자 감소 함수를 정의합니다.
  const onHandleDecrease = () => {
    // number 상태를 이전 상태에 1을 뺀 값으로 업데이트합니다.
    setNumber((number) => number - 1);
  };

  // JSX를 반환합니다.
  return (
    <div id="page">
      {" "}
      {/* 페이지 컨테이너 */}
      <h1>page</h1> {/* 제목 */}
      <div className="grid">
        {" "}
        {/* 그리드 컨테이너 */}
        {/* UserContext.Provider로 name, setName, onHandleName을 제공합니다. */}
        <UserContext.Provider value={{ name, setName, onHandleName }}>
          {/* ThemeContext.Provider로 number, setNumber, onHandleIncrease, onHandleDecrease를 제공합니다. */}
          <ThemeContext.Provider
            value={{ number, setNumber, onHandleIncrease, onHandleDecrease }}
          >
            <Left01 /> {/* Left01 컴포넌트를 렌더링합니다. */}
            <Right01 /> {/* Right01 컴포넌트를 렌더링합니다. */}
          </ThemeContext.Provider>
        </UserContext.Provider>
      </div>
    </div>
  );
};

export default MyuseContext01; // MyuseContext01 컴포넌트를 내보냅니다.
