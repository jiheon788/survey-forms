import { createSlice } from '@reduxjs/toolkit';
import FormMeta from '@/meta/FormMeta';
import { DefaultValue } from '@/constants/DefaultValue';

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
  id: DefaultValue.ID,
  questionBody: DefaultValue.QUESTION,
  answerType: Object.keys(FormMeta)[0],
  isMandatory: false,
  options: [{ id: DefaultValue.ID, value: DefaultValue.OPTION(1) }],
};

const initialState = {
  title: DefaultValue.TITLE,
  description: DefaultValue.DESCRIPTION,
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

    deleteForm(state, action) {
      const { formIndex } = action.payload;
      state.forms.splice(formIndex, 1);
    },

    toggleForm(state, action) {
      const { formIndex } = action.payload;
      state.forms[formIndex].isMandatory = !state.forms[formIndex].isMandatory;
    },

    swipeForm(state, action) {
      const { dragRef, dragOverRef } = action.payload;
      const copiedState = JSON.parse(JSON.stringify(state));
      const dragItem = copiedState.forms[dragRef.current];
      copiedState.forms.splice(dragRef.current, 1);
      copiedState.forms.splice(dragOverRef.current, 0, dragItem);
      state.forms = copiedState.forms;
    },

    addOption(state, action) {
      const { formIndex, id } = action.payload;
      state.forms[formIndex].options.push({
        id,
        value: DefaultValue.OPTION(state.forms[formIndex].options.length + 1),
      });
    },

    deleteOption(state, action) {
      const { formIndex, optionIndex } = action.payload;
      state.forms[formIndex].options.splice(optionIndex, 1);
    },

    setOption(state, action) {
      const { formIndex, optionIndex, value } = action.payload;
      state.forms[formIndex].options[optionIndex].value = value;
    },

    swipeOption(state, action) {
      const { formIndex, dragRef, dragOverRef } = action.payload;
      const copiedState = JSON.parse(JSON.stringify(state));
      const dragItem = copiedState.forms[formIndex].options[dragRef.current];
      copiedState.forms[formIndex].options.splice(dragRef.current, 1);
      copiedState.forms[formIndex].options.splice(dragOverRef.current, 0, dragItem);
      state.forms[formIndex].options = copiedState.forms[formIndex].options;
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
  swipeOption,
} = formSlice.actions;

export default formSlice.reducer;
