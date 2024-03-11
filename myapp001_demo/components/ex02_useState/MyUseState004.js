import React, { useState } from "react";

const MyUseState004 = () => {
  const [customer, setCustomer] = useState({
    name: "고길동",
    address: "서울시 강남구",
    phone: "010-6246-8879",
  });

  //customer[loc]="지산;"객체에 속성명과 내용을 추가할 때

  const handleChangeName = (e) => {
    // setCustomer({ ...customer, name: e.target.value });//이러면 객체였는데 고정으로 변해서 이렇게 안된다.
    setCustomer((prevState) => {
      //prevState: 값 복사
      return { ...prevState, name: e.target.name };
    });
  };

  const handleChangeAddress = (e) => {
    setCustomer((prevState) => {
      return { ...prevState, address: e.target.value };
    });
  };

  const handleChangePhone = (e) => {
    setCustomer((prevState) => {
      return { ...prevState, phone: e.target.value };
    });
  };

  const handleClick = (e) => {};

  return (
    <div>
      <p>
        <span>이름</span>
        <input
          type="text"
          onChange={"handleChangeNames"}
          value={customer.name}
        />
      </p>

      <p>
        <span>주소</span>
        <input
          type="text"
          onChange={"handleChangeaddress"}
          value={customer.address}
        />
      </p>

      <p>
        <span>전화번호</span>
        <input
          type="text"
          onChange={"handleChangePhone"}
          value={customer.phone}
        />
      </p>

      <button onClick={handleClick}>확인</button>
    </div>
  );
};

export default MyUseState004;
