import { FieldValues, UseFormRegister } from 'react-hook-form';
import FormMeta, { FormMetaKeysType } from '@/meta/FormMeta';
import { IForm } from '@/interface/main';
import CheckBoxForm from './CheckBoxForm';
import DropdownForm from './DropdownForm';
import LongAnswerForm from './LongAnswerForm';
import MultipleChoiceForm from './MultipleChoiceForm';
import ShortAnswerForm from './ShortAnswerForm';

export interface IFormSelectorProps {
  register: UseFormRegister<FieldValues>;
  formData: IForm;
  isResult?: boolean;
}

const FormSelector = ({ register, formData, isResult }: IFormSelectorProps) => {
  switch (FormMeta[formData.answerType as FormMetaKeysType]) {
    case FormMeta.SHORT_ANSWER:
      return <ShortAnswerForm register={register} formData={formData} isResult={isResult} />;
    case FormMeta.LONG_ANSWER:
      return <LongAnswerForm register={register} formData={formData} isResult={isResult} />;
    case FormMeta.MULTIPLE_CHOICE:
      return <MultipleChoiceForm register={register} formData={formData} isResult={isResult} />;
    case FormMeta.CHECK_BOX:
      return <CheckBoxForm register={register} formData={formData} isResult={isResult} />;
    case FormMeta.DROPDOWN:
      return <DropdownForm register={register} formData={formData} isResult={isResult} />;
    default:
      return <></>;
  }
};

export default FormSelector;
