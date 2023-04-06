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
