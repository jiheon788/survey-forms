import { createSlice } from '@reduxjs/toolkit';
import { FormType } from '@/components/forms/FormSelector';

interface IInitialState {
  title: string;
  description: string;
  forms: (typeof initialForm)[];
}

const initialState: IInitialState = {
  title: '제목 없는 설문지',
  description: '설문지 설명',
  forms: [],
};

interface IForms {
  name: 'title' | 'description';
  value: string;
}

interface IForm {
  index: number;
  target: 'question' | 'answerType';
  value: string;
}

const initialForm = {
  question: '제목없는 질문',
  answerType: Object.keys(FormType)[0],
};

const formSlice = createSlice({
  name: 'formData',
  initialState,
  reducers: {
    setForms(state, action) {
      const { name, value }: IForms = action.payload;
      state[name] = value;
    },

    addForm(state) {
      state.forms.push(initialForm);
    },

    setForm(state, action) {
      const { index, target, value }: IForm = action.payload;
      state.forms[index][target] = value;
    },
  },
});

export const { setForms, addForm, setForm } = formSlice.actions;

export default formSlice.reducer;
