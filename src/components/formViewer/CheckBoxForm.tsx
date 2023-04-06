import { Stack, Checkbox, CheckboxGroup } from '@chakra-ui/react';
import { useAppSelector } from '@/store';
import { IFormSelectorProps } from './FormSelector';

const CheckBoxForm = ({ register, formData, isResult }: IFormSelectorProps) => {
  const { resultData } = useAppSelector((state) => state);

  return (
    <CheckboxGroup
      colorScheme="teal"
      isDisabled={isResult}
      defaultValue={isResult ? resultData[formData.id as keyof typeof resultData] : ['']}
    >
      <Stack>
        {formData.options.map((option) => (
          <Checkbox key={option.id} value={option.value || 'Null'} {...register(formData.id)}>
            {option.value || 'Null'}
          </Checkbox>
        ))}
      </Stack>
    </CheckboxGroup>
  );
};

export default CheckBoxForm;
