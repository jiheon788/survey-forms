import { Radio, Stack, RadioGroup } from '@chakra-ui/react';
import { useAppSelector } from '@/store';
import { IFormSelectorProps } from './FormSelector';

const MultipleChoiceForm = ({ register, formData, isResult }: IFormSelectorProps) => {
  const { resultData } = useAppSelector((state) => state);

  return (
    <RadioGroup
      colorScheme="teal"
      defaultValue={isResult ? resultData[formData.id as keyof typeof resultData] : ''}
      isDisabled={isResult}
    >
      <Stack>
        {formData.options.map((option) => (
          <Radio key={option.id} value={option.value || 'Null'} {...register(formData.id)}>
            {option.value || 'Null'}
          </Radio>
        ))}
      </Stack>
    </RadioGroup>
  );
};

export default MultipleChoiceForm;
