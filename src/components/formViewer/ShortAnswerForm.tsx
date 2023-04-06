import { Input } from '@chakra-ui/react';
import { IFormSelectorProps } from './FormSelector';

const ShortAnswerForm = ({ register, formData }: Pick<IFormSelectorProps, 'register' | 'formData'>) => {
  return <Input placeholder="단답형 텍스트" {...register(formData.id)} />;
};

export default ShortAnswerForm;
