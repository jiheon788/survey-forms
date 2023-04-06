import { Input } from '@chakra-ui/react';
import { Message } from '@/constants/Message';
import { IFormSelectorProps } from './FormSelector';

const ShortAnswerForm = ({ register, formData, isResult }: IFormSelectorProps) => {
  return <Input placeholder={Message.PLEASE_INPUT('텍스트')} {...register(formData.id)} isDisabled={isResult} />;
};

export default ShortAnswerForm;
