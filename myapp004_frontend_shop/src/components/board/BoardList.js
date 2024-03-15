import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { boardActions } from "../../toolkit/actions/board_action";
import TableRow from "./TableRow";
import PageNavigation from "./PageNavigation";

//redux

//http://localhost:3000/baord/list/1
//http://localhost:3000/baord/list/:currentPage
//const { currentPage } = useParams();
const BoardList = () => {
  const { currentPage } = useParams(); //currentPage로 받은 값
  const dispatch = useDispatch();

  //dispatch(=useState): browser에 메모리를 박아넣는다(저장의 의미)는 의미
  const getBoardList = (currentPage) => {
    console.log("getBoardList currentPage:", currentPage);
    //useDispatch(boardActions.getBoardList(currentPage));
    dispatch(boardActions.getBoardList(currentPage));
  };

  useEffect(() => {
    getBoardList(currentPage);
  }, []); //이 화면이 처음 실행(랜더링)됐을 때만 useEffect안의 함수를 실행
  //[]안에 currentPage 넣어놨다고 치면 currentPage가 변경됐을 때마다 useEffect안의 함수 다시 실행.

  // useEffect(() => {
  //   dispatch(boardActions.getBoardList(currentPage));
  // }, []);
  const boardList = useSelector((state) => state.board.boardList);
  const pv = useSelector((state) => state.board.pv);

  return (
    <div>
      <Link className="btn btn-danger" to="/board/write">
        글쓰기
      </Link>
      <h3 className="text-center">게시판 목록</h3>
      <table className="table table-striped" style={{ marginTop: 20 }}>
        <colgroup>
          <col width="8%" />
          <col width="*" />
          <col width="12%" />
          <col width="12%" />
        </colgroup>

        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>조회수</th>
          </tr>
        </thead>
        <tbody>
          {boardList &&
            boardList.map((board) => {
              return <TableRow board={board} key={board.num} />;
            })}
        </tbody>
      </table>
      {pv && <PageNavigation getBoardList={getBoardList} />}
    </div>
  );
};

export default BoardList;
