import { Textarea } from '@chakra-ui/react';
import { IFormSelectorProps } from './FormSelector';

const LongAnswerForm = ({ register, formData, isResult }: IFormSelectorProps) => {
  return <Textarea placeholder="장문형 텍스트" rows={5} {...register(formData.id)} isDisabled={isResult} />;
};

export default LongAnswerForm;
