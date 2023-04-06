import { Textarea } from '@chakra-ui/react';
import { Message } from '@/constants/Message';
import { IFormSelectorProps } from './FormSelector';

const LongAnswerForm = ({ register, formData, isResult }: IFormSelectorProps) => {
  return (
    <Textarea placeholder={Message.PLEASE_INPUT('텍스트')} rows={5} {...register(formData.id)} isDisabled={isResult} />
  );
};

export default LongAnswerForm;
