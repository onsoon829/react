import React, { useState } from "react";

//useState을 동기화로 처리하는 방법
//setState의 인자로 함수로 넣는다.
const MyuseStateSync002 = () => {
  const [number, setNumber] = useState(0);

  const handleUpNumber = () => {
    //비동기화
    setNumber((number) => number + 3);
    console.log(number);

    setNumber((number) => number + 2);
    console.log(number);

    setNumber((number) => number + 1);
    console.log(number);
  };

  const handleDownNumber = () => {
    //비동기화
    setNumber((number) => number - 3);
    console.log(number);

    setNumber((number) => number - 2);
    console.log(number);

    setNumber((number) => number - 1);
    console.log(number);
  };

  return (
    <div>
      <p>{number}</p>
      <button onClick={handleUpNumber}>UP</button>
      <button onClick={handleDownNumber}>Down</button>
    </div>
  );
};

export default MyuseStateSync002;
