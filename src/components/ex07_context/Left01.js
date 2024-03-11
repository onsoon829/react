import React, { useContext } from "react"; // 리액트와 useContext 훅을 불러옵니다.
import Left02 from "./Left02"; // Left02 컴포넌트를 불러옵니다.
import { UserContext } from "./contexts/UserContext"; // UserContext를 불러옵니다.

const Left01 = () => {
  // Left01 함수형 컴포넌트를 선언합니다.
  const { name, onHandleName } = useContext(UserContext); // UserContext에서 name과 onHandleName을 가져옵니다.

  // JSX를 반환합니다.
  return (
    <div>
      {" "}
      {/* div 요소 */}
      <h1>Left01:</h1> {/* 제목 */}
      <h1>Name:{name}</h1> {/* 이름을 표시합니다. */}
      <button onClick={onHandleName}>NameClick</button> {/* 이름 변경 버튼 */}
      <Left02 /> {/* Left02 컴포넌트를 렌더링합니다. */}
    </div>
  );
};

export default Left01; // Left01 컴포넌트를 내보냅니다.
