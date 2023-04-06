import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const resultSlice = createSlice({
  name: 'resultData',
  initialState,
  reducers: {
    setResult(state, action) {
      return action.payload;
    },
  },
});

export const { setResult } = resultSlice.actions;

export default resultSlice.reducer;
