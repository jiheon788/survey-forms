import { Input } from '@chakra-ui/react';
import { IFormSelectorProps } from './FormSelector';

const ShortAnswerForm = ({ register, formData, isResult }: IFormSelectorProps) => {
  return <Input placeholder="단답형 텍스트" {...register(formData.id)} isDisabled={isResult} />;
};

export default ShortAnswerForm;
