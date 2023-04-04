import CheckBoxForm from './CheckBoxForm';
import DropdownForm from './DropdownForm';
import LongAnswerForm from './LongAnswerForm';
import MultipleChoiceForm from './MultipleChoiceForm';
import ShortAnswerForm from './ShortAnswerForm';

export const FormType = {
  SHORT_ANSWER: '단답형',
  LONG_ANSWER: '장문형',
  MULTIPLE_CHOICE: '객관식',
  CHECK_BOX: '체크박스',
  DROPDOWN: '드롭다운',
} as const;

export type TFormTypeKeys = keyof typeof FormType;
export type TFormTypeValues = (typeof FormType)[TFormTypeKeys];

export interface IFormSelectorProps {
  formType: TFormTypeValues;
  formIndex: number;
}

const FormSelector = ({ formType, formIndex }: IFormSelectorProps) => {
  switch (formType) {
    case FormType.SHORT_ANSWER:
      return <ShortAnswerForm />;
    case FormType.LONG_ANSWER:
      return <LongAnswerForm />;
    case FormType.MULTIPLE_CHOICE:
      return <MultipleChoiceForm formIndex={formIndex} />;
    case FormType.CHECK_BOX:
      return <CheckBoxForm formIndex={formIndex} />;
    case FormType.DROPDOWN:
      return <DropdownForm formIndex={formIndex} />;
  }
};

export default FormSelector;
