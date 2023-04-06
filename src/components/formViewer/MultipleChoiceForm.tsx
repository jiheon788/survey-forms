import { Radio, Stack, RadioGroup } from '@chakra-ui/react';
import { IFormSelectorProps } from './FormSelector';

const MultipleChoiceForm = ({ register, formData }: Pick<IFormSelectorProps, 'register' | 'formData'>) => {
  return (
    <RadioGroup colorScheme="teal">
      <Stack>
        {formData.options.map((option, index) => (
          <Radio key={option.id} value={option.value || `옵션 ${index + 1}`} {...register(formData.id)}>
            {option.value || `옵션 ${index + 1}`}
          </Radio>
        ))}
      </Stack>
    </RadioGroup>
  );
};

export default MultipleChoiceForm;
