import { createSlice } from '@reduxjs/toolkit';
import { FormType } from '@/components/forms/FormSelector';

const initialState: IInitialState = {
  title: '제목 없는 설문지',
  description: '설문지 설명',
  forms: [],
};

interface IForms {
  name: 'title' | 'description';
  value: string;
}

interface IInitialState {
  title: string;
  description: string;
  forms: (typeof initialForm)[];
}

interface IForm {
  formIndex: number;
  target: 'questionBody' | 'answerType';
  value: string;
}

const initialForm = {
  questionBody: '제목없는 질문',
  answerType: Object.keys(FormType)[0],
  isMandatory: false,
  items: [''],
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
      const { formIndex, target, value }: IForm = action.payload;
      state.forms[formIndex][target] = value;
    },

    copyForm(state, action) {
      const { formIndex } = action.payload;
      state.forms.push({ ...state.forms[formIndex] });
    },

    deleteForm(state, action) {
      const { formIndex } = action.payload;
      state.forms.splice(formIndex, 1);
    },

    toggleForm(state, action) {
      const { formIndex } = action.payload;
      state.forms[formIndex].isMandatory = !state.forms[formIndex].isMandatory;
    },

    addItem(state, action) {
      const { formIndex } = action.payload;
      state.forms[formIndex].items.push(``);
    },

    deleteItem(state, action) {
      const { formIndex, itemIndex } = action.payload;
      state.forms[formIndex].items.splice(itemIndex, 1);
    },
  },
});

export const { setForms, addForm, setForm, copyForm, deleteForm, toggleForm, addItem, deleteItem } = formSlice.actions;

export default formSlice.reducer;
