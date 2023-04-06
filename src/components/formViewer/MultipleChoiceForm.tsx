import { Radio, Stack, RadioGroup } from '@chakra-ui/react';
import { IFormSelectorProps } from './FormSelector';

const MultipleChoiceForm = ({ register, formData }: Pick<IFormSelectorProps, 'register' | 'formData'>) => {
  return (
    <RadioGroup colorScheme="teal">
      <Stack>
        {formData.options.map((option) => (
          <Radio key={option.id} value={option.value} {...register(formData.id)}>
            {option.value}
          </Radio>
        ))}
      </Stack>
    </RadioGroup>
  );
};

export default MultipleChoiceForm;
