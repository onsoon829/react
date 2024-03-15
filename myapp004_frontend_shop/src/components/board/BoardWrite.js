import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { boardActions } from "../../toolkit/actions/board_action";

const BoardWrite = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const { num } = useParams();

  const [inputs, setInputes] = useState({
    subject: "",
    content: "",
    filename: null,
  });

  const { subject, content, filename } = inputs;
  const boardDetail = useSelector((state) => state.board.boardDetail);
  const pv = useSelector((state) =>
    state.board.pv ? state.board.pv : { currentPage: 1 }
  );

  const handleValueChange = (e) => {
    // let nextState = {};
    // nextState[e.target.name] = e.target.value;
    // setInputes(...inputs, ...nextState);
    setInputes((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleFileChange = (e) => {
    e.preventDefault();
    setInputes((prev) => {
      return { ...prev, [e.target.name]: e.target.files[0] };
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("subject", subject);
    formData.append("content", content);
    if (filename !== null) formData.append("filename", filename);
    //첨부파일일대는 인코딩파일이 enctype = multipart/form-data

    //답변글이면 추가한다
    if (num !== undefined) {
      formData.append("num", boardDetail.num);
      formData.append("ref", boardDetail.ref);
      formData.append("re_step", boardDetail.re_step);
      formData.append("re_level", boardDetail.re_level);
    }

    console.log("formData", formData);
    const config = {
      //config: 보안용 변수?
      headers: {
        "Content-Type": "multipart/form-data", //보안용 타입
      },
    };

    await dispatch(boardActions.getBoardWrite(formData, config));

    setInputes({
      subject: "",
      content: "",
      filename: null,
    });

    navigator(`/board/list/${num ? pv.currentPage : 1}`); //boardList 화면으로 넘어간다.
  };
  //form으로 감싸기: 정석
  return (
    <>
      <form onSubmit={onSubmit}>
        <table>
          <tbody>
            <tr>
              <th>글쓴이</th>
              <td>
                <input type="text" readOnly />
              </td>
            </tr>
            <tr>
              <th>
                <th width="20%" align="center"></th>
                제목
              </th>
              <td>
                <input
                  type="text"
                  name="subject"
                  size="40"
                  placeholder={num !== undefined ? "답변" : null}
                  onChange={handleValueChange}
                />
              </td>
            </tr>

            <tr>
              <th width="20%" align="center">
                내용
              </th>
              <td>
                <textarea
                  name="content"
                  cols="40"
                  rows="13"
                  onChange={handleValueChange}
                ></textarea>
              </td>
            </tr>
            <tr>
              <th width="20" align="center">
                첨부파일
              </th>
              <td>
                <input
                  type="file"
                  name="filename"
                  id="filepath"
                  onChange={handleFileChange}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <Link className="btn btn-primary" to={`/board/list/1`}>
          리스트
        </Link>
        <input type="submit" className="btn btn-primary" value="등록" />
      </form>
    </>
  );
};

export default BoardWrite;
