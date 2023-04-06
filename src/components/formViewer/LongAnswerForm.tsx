import { Textarea } from '@chakra-ui/react';
import { IFormSelectorProps } from './FormSelector';

const LongAnswerForm = ({ register, formData }: Pick<IFormSelectorProps, 'register' | 'formData'>) => {
  return <Textarea placeholder="장문형 텍스트" rows={5} {...register(formData.id)} />;
};

export default LongAnswerForm;
