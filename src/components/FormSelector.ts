import ShortAnswerForm from './ShortAnswerForm';

export const FormType = {
  SHORT_ANSWER: '단답형',
  LONG_ANSWER: '장문형',
  MULTIPLE_CHOICE: '객관식',
  CHECK_BOX: '체크박스',
  DROPDOWN: '드롭다운',
};

export type TFormTypeKeys = keyof typeof FormType;

const FormSelector = (formType: TFormTypeKeys) => {
  switch (formType) {
    case FormType.SHORT_ANSWER:
      return ShortAnswerForm;
    case FormType.LONG_ANSWER:
      return;
    case FormType.MULTIPLE_CHOICE:
      return;
    case FormType.CHECK_BOX:
      return;
    case FormType.DROPDOWN:
      return;
  }
};

export default FormSelector;
