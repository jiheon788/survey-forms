import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: '제목 없는 설문지',
  description: '설문지 설명',
};

interface IFormState {
  name: 'title' | 'description';
  value: string;
}

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setForm(state, action) {
      const { name, value }: IFormState = action.payload;
      state[name] = value;
    },
  },
});

export const { setForm } = formSlice.actions;

export default formSlice.reducer;
