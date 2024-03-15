import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
//board action에서 받아오는 거다. 밑에 거.
const TableRow = ({ board }) => {
  return (
    <tr>
      <td>{board.num}</td>
      <td>
        {board.re_level > 0 && (
          <>
            <img
              alt="level"
              src="/images/level.gif"
              width={board.re_level * 20}
              height="15"
            />
            <img alt="re" src="/images/re.gif" />
          </>
        )}
        <Link to={`/board/view/${board.num}`}>{board.subject}</Link>
      </td>
      <td>null</td>
      <td>{board.readcount}</td>
    </tr>
  );
};

export default TableRow;
