import React, { useContext } from "react"; // 리액트와 useContext 훅을 불러옵니다.
import { ThemeContext } from "./contexts/ThemeContext"; // ThemeContext를 불러옵니다.

const Left03 = () => {
  // Left03 함수형 컴포넌트를 선언합니다.
  const { number } = useContext(ThemeContext); // ThemeContext에서 number를 가져옵니다.

  // JSX를 반환합니다.
  return (
    <div>
      {" "}
      {/* div 요소 */}
      <h1>Left03:</h1> {/* 제목 */}
      <h1>Number:{number}</h1> {/* 숫자를 표시합니다. */}
    </div>
  );
};

export default Left03; // Left03 컴포넌트를 내보냅니다.
