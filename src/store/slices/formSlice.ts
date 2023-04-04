import { createSlice } from '@reduxjs/toolkit';
import { FormType } from '@/components/FormSelector';

interface IInitialState {
  title: string;
  description: string;
  forms: any[];
}

const initialState: IInitialState = {
  title: '제목 없는 설문지',
  description: '설문지 설명',
  forms: [],
};

interface IFormState {
  name: 'title' | 'description';
  value: string;
}

const initialForm = {
  question: '제목없는 질문',
  type: Object.keys(FormType)[0],
};

const formSlice = createSlice({
  name: 'formData',
  initialState,
  reducers: {
    setForm(state, action) {
      const { name, value }: IFormState = action.payload;
      state[name] = value;
    },

    addForm(state) {
      state.forms.push(initialForm);
    },
  },
});

export const { setForm, addForm } = formSlice.actions;

export default formSlice.reducer;
