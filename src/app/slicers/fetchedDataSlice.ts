import { createSlice } from "@reduxjs/toolkit";

type State = {
  data: {
    _id: string;
    bodyPart: string;
    equipment: string;
    gifUrl: string;
    id: string;
    name: string;
    target: string;
  }[];
};

const initialState: State = {
  data: [],
};

export const fetchDataSlice = createSlice({
  name: "fetchingData",
  initialState: initialState,
  reducers: {
    storeData: (state, action) => {
      state.data = [...action.payload];
    },
  },
});

export const { storeData } = fetchDataSlice.actions;

export default fetchDataSlice.reducer;
