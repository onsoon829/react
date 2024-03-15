import axios from "axios"; //axios: 백엔드로 데이터를 요청
import { boardReducers } from "../createSlice/board_createSlice";

function getBoardList(currentPage) {
  return async (dispatch) => {
    const data = await axios
      .get(`/board/list/${currentPage}`) ///board 뭐시기: 다 백엔드 주소(임의로 만든 것)백엔드로 method요청// 요청타입 종류 get post put delete
      .then((response) => response.data); //중괄호 있으면 return 붙여준다
    console.log(data);
    dispatch(boardReducers.getBoardList({ data }));
  };
}
//게시판 글쓰기
function getBoardWrite(formData, config) {
  return async () => {
    await axios
      .post(`/board/write`, formData, config) //백엔드 저 주소로 formdata, config(를 보내라.
      .then((response) => response.data);
  };
}

//상세페이지
function getBoardDetail(num) {
  return async (dispatch) => {
    const data = await axios
      .get(`/board/view/${num}`)
      .then((response) => response.data);
    dispatch(boardReducers.getBoardDetail({ data }));
  };
}

//첨부파일 다운로드
function getBoardDownload(upload) {
  return async (dispatch) => {
    const data = await axios
      .get(`/board/contentdownload/${upload}`)
      .then((response) => response.data);
    //dispatch(boardActions.getBoardDownload(data));
    return data;
  };
}

//수정하기
function getBoardUpdate(formData, config) {
  return async () => {
    await axios
      .put(`/board/update`, formData, config)
      .then((response) => response.data);
  };
}

//삭제하기
function getBoardDelete(num) {
  return async () => {
    await axios
      .delete(`/baord/delete/${num}`)
      .then((response) => response.data);
  };
}

export const boardActions = {
  getBoardList,
  getBoardWrite,
  getBoardDetail,
  getBoardDownload,
  getBoardUpdate,
  getBoardDelete,
};
