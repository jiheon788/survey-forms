import { Stack, Checkbox, CheckboxGroup } from '@chakra-ui/react';
import { IFormSelectorProps } from './FormSelector';

const CheckBoxForm = ({ register, formData }: Pick<IFormSelectorProps, 'register' | 'formData'>) => {
  return (
    <CheckboxGroup colorScheme="teal">
      <Stack>
        {formData.options.map((option) => (
          <Checkbox key={option.id} value={option.value} {...register(formData.id)}>
            {option.value}
          </Checkbox>
        ))}
      </Stack>
    </CheckboxGroup>
  );
};

export default CheckBoxForm;
