import { createSlice } from "@reduxjs/toolkit";
//
let initialState = {
  boardList: [],
  pv: { currentPage: 1 },
  boardDetail: {},
  boardFile: null,
};

const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    getBoardList: (state, action) => {
      state.boardList = action.payload.data.boardList;
      state.pv = action.payload.data.pv;
    },
    getBoardDetail(state, action) {
      state.boardDetail = action.payload.data;
    },
  },
});

//board_actions에서 사용함
//export const {getBoardList} = boardSlice.actions;
export const boardReducers = boardSlice.actions; //getboardList 호출할 수 있다.

//store에서 사용함
export default boardSlice;
