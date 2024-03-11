import React, { useContext } from "react"; // 리액트와 useContext 훅을 불러옵니다.
import { ThemeContext } from "./contexts/ThemeContext"; // ThemeContext를 불러옵니다.

const Right03 = () => {
  // Right03 함수형 컴포넌트를 선언합니다.
  // useContext 훅을 사용하여 ThemeContext에서 필요한 값을 가져옵니다.
  const { number, onHandleIncrease, onHandleDecrease } =
    useContext(ThemeContext); // ThemeContext에서 number, onHandleIncrease, onHandleDecrease를 가져옵니다.

  // JSX를 반환합니다.
  return (
    <div>
      {" "}
      {/* div 요소 */}
      <h1>Right03</h1> {/* 제목 */}
      <h1>Number:{number}</h1> {/* 숫자를 표시합니다. */}
      <input type="button" value="+" onClick={onHandleIncrease} />{" "}
      {/* 숫자 증가 버튼 */}
      <input type="button" value="-" onClick={onHandleDecrease} />{" "}
      {/* 숫자 감소 버튼 */}
    </div>
  );
};

export default Right03; // Right03 컴포넌트를 내보냅니다.
