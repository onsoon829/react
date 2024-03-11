import React from "react"; // 리액트를 불러옵니다.
import Left03 from "./Left03"; // Left03 컴포넌트를 불러옵니다.

const Left02 = () => {
  // Left02 함수형 컴포넌트를 선언합니다.
  return (
    // JSX를 반환합니다.
    <div>
      {" "}
      {/* div 요소 */}
      <h1>Left02:</h1> {/* 제목 */}
      <Left03 /> {/* Left03 컴포넌트를 렌더링합니다. */}
    </div>
  );
};

export default Left02; // Left02 컴포넌트를 내보냅니다.
