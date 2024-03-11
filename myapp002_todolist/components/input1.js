const Input1 = (props) => {
  const { insertTodo, input, inputRef, handleChangeText } = props;
  return (
    <form onSubmit={insertTodo}>
      {" "}
      {/* 할일 추가를 위한 폼 */}
      <input
        type="text" // 텍스트 입력 타입
        value={input} // 입력값
        ref={inputRef} // 참조 설정
        id="work" // 식별자
        placeholder="오늘의 할일" // 입력란에 표시될 텍스트
        onChange={handleChangeText} // 입력값 변경 시 호출되는 함수
      />
      <input type="submit" value="Create" /> {/* 생성 버튼 */}
    </form>
  );
};

export default Input1;
