import React from "react";
//http://reactjs.org/docs/events.html
const MyJsx004 = () => {
  const name = "css";
  //연산자 equal: ===로 나타낸다.
  return (
    <div>
      <p>
        {name === "react" ? <h1>리액트입니다.</h1> : <h1>리액트가 아닙니다</h1>}
        <p>{name === "react" ? <h1>리액트입니다.</h1> : null}</p>
      </p>
    </div>
  );
};

export default MyJsx004;
