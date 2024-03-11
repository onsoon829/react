import React, { useState } from "react";

const MyUseState005 = () => {
  const [customer, setCustomer] = useState({
    name: "고수",
    address: "서울시 강남구",
    phone: "010-6246-8879",
  });

  const handleChange = (e) => {
    setCustomer({ ...customer, [e.target.id]: e.target.value });

    // setCustomer((prevState) => {
    //   return { ...prevState, [e.target.id]: e.target.value };
    // });

    console.log(e.target);
    const { id, value } = e.target;
    setCustomer((prevState) => {
      return { ...prevState, [id]: value };
    }); //위의 name등 객체에 값 추가해출 때 필요한 코드이다.
  };
  return (
    <div>
      <p>
        <span>이름</span>
        <input
          type="text"
          value={customer.name}
          id="name"
          onChange={handleChange}
        />
      </p>

      <p>
        <span>주소</span>
        <input
          type="text"
          value={customer.address}
          id="address"
          onChange={handleChange}
        />
      </p>

      <p>
        <span>전화번호</span>
        <input
          type="text"
          value={customer.phone}
          id="phone"
          onChange={handleChange}
        />
      </p>

      <button>확인</button>
    </div>
  );
};

export default MyUseState005;
