import { FieldValues, UseFormRegister } from 'react-hook-form';
import FormMeta, { FormMetaKeysType } from '@/meta/FormMeta';
import CheckBoxForm from './CheckBoxForm';
import DropdownForm from './DropdownForm';
import LongAnswerForm from './LongAnswerForm';
import MultipleChoiceForm from './MultipleChoiceForm';
import ShortAnswerForm from './ShortAnswerForm';

export interface IFormSelectorProps {
  register: UseFormRegister<FieldValues>;
  formData: {
    id: string;
    questionBody: string;
    answerType: string;
    isMandatory: boolean;
    options: {
      id: string;
      value: string;
    }[];
  };
}

const FormSelector = ({ register, formData }: IFormSelectorProps) => {
  switch (FormMeta[formData.answerType as FormMetaKeysType]) {
    case FormMeta.SHORT_ANSWER:
      return <ShortAnswerForm register={register} formData={formData} />;
    case FormMeta.LONG_ANSWER:
      return <LongAnswerForm register={register} formData={formData} />;
    case FormMeta.MULTIPLE_CHOICE:
      return <MultipleChoiceForm register={register} formData={formData} />;
    case FormMeta.CHECK_BOX:
      return <CheckBoxForm register={register} formData={formData} />;
    case FormMeta.DROPDOWN:
      return <DropdownForm register={register} formData={formData} />;
    default:
      return <></>;
  }
};

export default FormSelector;
