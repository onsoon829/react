import React from "react";
import "./MyJsx003.css";

const MyJsx003 = () => {
  //javascript 문법
  const numX = 3;
  const numY = 5;
  return (
    <>
      <div>{`${numX}+${numY}=${numX + numY}`}</div>
      <div className="line">Line Test</div>
    </>
  );
};

export default MyJsx003;
