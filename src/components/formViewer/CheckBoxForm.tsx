import { Stack, Checkbox, CheckboxGroup } from '@chakra-ui/react';
import { IFormSelectorProps } from './FormSelector';

const CheckBoxForm = ({ register, formData }: Pick<IFormSelectorProps, 'register' | 'formData'>) => {
  return (
    <CheckboxGroup colorScheme="teal">
      <Stack>
        {formData.options.map((option, index) => (
          <Checkbox key={option.id} value={option.value || `옵션 ${index + 1}`} {...register(formData.id)}>
            {option.value || `옵션 ${index + 1}`}
          </Checkbox>
        ))}
      </Stack>
    </CheckboxGroup>
  );
};

export default CheckBoxForm;
