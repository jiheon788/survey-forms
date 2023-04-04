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

interface IItem {
  formIndex: number;
  optionIndex: number;
  value: string;
}

const initialForm = {
  id: 'initial',
  questionBody: '제목없는 질문',
  answerType: Object.keys(FormType)[0],
  isMandatory: false,
  options: [{ id: 'initial', value: '' }],
};

const formSlice = createSlice({
  name: 'formData',
  initialState,
  reducers: {
    setForms(state, action) {
      const { name, value }: IForms = action.payload;
      state[name] = value;
    },

    addForm(state, action) {
      const { id } = action.payload;
      state.forms.push({ ...initialForm, id });
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

    addOption(state, action) {
      const { formIndex, id } = action.payload;
      state.forms[formIndex].options.push({ id, value: '' });
    },

    deleteOption(state, action) {
      const { formIndex, optionIndex }: IItem = action.payload;
      state.forms[formIndex].options.splice(optionIndex, 1);
    },

    setOption(state, action) {
      const { formIndex, optionIndex, value }: IItem = action.payload;
      state.forms[formIndex].options[optionIndex].value = value;
    },
  },
});

export const { setForms, addForm, setForm, copyForm, deleteForm, toggleForm, addOption, deleteOption, setOption } =
  formSlice.actions;

export default formSlice.reducer;
