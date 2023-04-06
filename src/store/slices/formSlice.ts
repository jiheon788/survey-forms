import { createSlice } from '@reduxjs/toolkit';
import FormMeta from '@/meta/FormMeta';

const cloneDeep = (obj: any) => {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  const copy: any = {};
  for (const key in obj) {
    copy[key] = cloneDeep(obj[key]);
  }
  return copy;
};

interface ISetFormsPayload {
  name: 'title' | 'description';
  value: string;
}

interface ISetFormPayload {
  formIndex: number;
  target: 'questionBody' | 'answerType';
  value: string;
}
const initialForm = {
  id: 'initial',
  questionBody: '제목없는 질문',
  answerType: Object.keys(FormMeta)[0],
  isMandatory: false,
  options: [{ id: 'initial', value: '' }],
};

const initialState = {
  title: '제목 없는 설문지',
  description: '설문지 설명',
  forms: [initialForm],
};

const formSlice = createSlice({
  name: 'formData',
  initialState,
  reducers: {
    setForms(state, action) {
      const { name, value }: ISetFormsPayload = action.payload;
      state[name] = value;
    },

    addForm(state, action) {
      const { id } = action.payload;
      state.forms.push({ ...initialForm, id });
    },

    setForm(state, action) {
      const { formIndex, target, value }: ISetFormPayload = action.payload;
      state.forms[formIndex][target] = value;
    },

    copyForm(state, action) {
      const { formIndex, id } = action.payload;
      state.forms.push({ ...state.forms[formIndex], id });
    },

    swipeForm(state, action) {
      const { dragItemRef, dragOverItemRef } = action.payload;
      const copiedState = JSON.parse(JSON.stringify(state));
      const dragItem = copiedState.forms[dragItemRef.current];
      copiedState.forms.splice(dragItemRef.current, 1);
      copiedState.forms.splice(dragOverItemRef.current, 0, dragItem);
      state.forms = copiedState.forms;
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
      const { formIndex, optionIndex } = action.payload;
      state.forms[formIndex].options.splice(optionIndex, 1);
    },

    setOption(state, action) {
      const { formIndex, optionIndex, value } = action.payload;
      state.forms[formIndex].options[optionIndex].value = value;
    },
  },
});

export const {
  setForms,
  addForm,
  setForm,
  copyForm,
  deleteForm,
  toggleForm,
  swipeForm,
  addOption,
  deleteOption,
  setOption,
} = formSlice.actions;

export default formSlice.reducer;
