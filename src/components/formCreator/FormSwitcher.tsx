import FormMeta, { FormMetaValueType } from '@/meta/FormMeta';
import CheckBoxForm from './CheckBoxForm';
import DropdownForm from './DropdownForm';
import LongAnswerForm from './LongAnswerForm';
import MultipleChoiceForm from './MultipleChoiceForm';
import ShortAnswerForm from './ShortAnswerForm';

export interface IFormSwitcherProps {
  formType: FormMetaValueType;
  formIndex: number;
}

const FormSwitcher = ({ formType, formIndex }: IFormSwitcherProps) => {
  switch (formType) {
    case FormMeta.SHORT_ANSWER:
      return <ShortAnswerForm />;
    case FormMeta.LONG_ANSWER:
      return <LongAnswerForm />;
    case FormMeta.MULTIPLE_CHOICE:
      return <MultipleChoiceForm formIndex={formIndex} />;
    case FormMeta.CHECK_BOX:
      return <CheckBoxForm formIndex={formIndex} />;
    case FormMeta.DROPDOWN:
      return <DropdownForm formIndex={formIndex} />;
  }
};

export default FormSwitcher;
