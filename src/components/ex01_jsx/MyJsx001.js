import React from "react";
// rsc + 엔터 치면 이렇게 기본 식이 나온다.
/*
  리액트 17이전 버전에서는 JSX 구문이 있는 파일은 반드시 import React from 'react'문을 사용해야 한다.
  그러나 17이후 버전부터는 JSX 구문이 있어도 import React from 'react' 생략 가능하다.
*/

//function MyJsx001(){}
const MyJsx001 = () => {
  //MyJsx001이라는 함수형 컴포넌트 정의
  return (
    //함수가 반환할 것임을 나타내는데, 여러 줄의 JSX(javascript XML)코드 포함.
    <div>
      <div>hello</div>
      <div>React</div>
    </div>
  );
};

export default MyJsx001;
