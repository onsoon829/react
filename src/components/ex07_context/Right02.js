import React, { useContext } from "react"; // 리액트와 useContext 훅을 불러옵니다.
import Reight03 from "./Right03"; // Reight03 컴포넌트를 불러옵니다.
import { ThemeContext } from "./contexts/ThemeContext"; // ThemeContext를 불러옵니다.
import { UserContext } from "./contexts/UserContext"; // UserContext를 불러옵니다.

const Right02 = () => {
  // Right02 함수형 컴포넌트를 선언합니다.
  // useContext 훅을 사용하여 UserContext와 ThemeContext에서 필요한 값을 가져옵니다.
  const { name } = useContext(UserContext); // UserContext에서 name을 가져옵니다.
  const { number } = useContext(ThemeContext); // ThemeContext에서 number를 가져옵니다.

  // JSX를 반환합니다.
  return (
    <div>
      {" "}
      {/* div 요소 */}
      <h1>Right02</h1> {/* 제목 */}
      <h1>Number:{number}</h1> {/* 숫자를 표시합니다. */}
      <h1>Name:{name}</h1> {/* 이름을 표시합니다. */}
      <Reight03 /> {/* Reight03 컴포넌트를 렌더링합니다. */}
    </div>
  );
};

export default Right02; // Right02 컴포넌트를 내보냅니다.
