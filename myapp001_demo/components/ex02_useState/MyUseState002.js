import React, { useState } from "react";
//useState함수를 쓰기 위해 위처럼 작성. 즉 React 객체와 useState함수를 가져오는 것.
//useState: React의 상태를 관리하기 위해 사용. 배열 형태로 사용.
const MyUseState002 = () => {
  //const[상태, 상태변경함수]=useState(초기값);
  let [cnt, setCnt] = useState(0);

  const handleClick = () => {
    cnt = cnt + 1;
    console.log(`cnt:${cnt}`);
  };
  return (
    <div>
      <p>
        <span>{cnt}</span>
        <bitton onClick={handleClick}>CNT UPDATE</bitton>
      </p>
    </div>
  );
};

export default MyUseState002;
