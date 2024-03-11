import React, { useEffect, useRef } from "react";

const MyUseRef002 = () => {
  const nameRef = useRef("");

  const handleBtn = () => {
    console.log(document.querySelector("#data").value);
    document.querySelector("#data").value = "";
  };

  useEffect(() => {
    nameRef.current.focus();
  });

  return (
    <div>
      <input type="text" placeholder="이름입력" id="data" />
      <button>click</button>
    </div>
  );
};

export default MyUseRef002;
