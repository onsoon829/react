import React from "react"; // 리액트를 불러옵니다.
import Right02 from "./Right02"; // Right02 컴포넌트를 불러옵니다.

const Right01 = () => {
  // Right01 함수형 컴포넌트를 선언합니다.
  return (
    // JSX를 반환합니다.
    <div>
      {" "}
      {/* div 요소 */}
      <h1>Right01:</h1> {/* 제목 */}
      <Right02 /> {/* Right02 컴포넌트를 렌더링합니다. */}
    </div>
  );
};

export default Right01; // Right01 컴포넌트를 내보냅니다.
