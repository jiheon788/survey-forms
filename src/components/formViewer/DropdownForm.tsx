import { Select } from '@chakra-ui/react';
import { useAppSelector } from '@/store';
import { IFormSelectorProps } from './FormSelector';

const DropdownForm = ({ register, formData, isResult }: IFormSelectorProps) => {
  const { resultData } = useAppSelector((state) => state);

  return (
    <Select
      placeholder={isResult ? `${resultData[formData.id as keyof typeof resultData]}` : 'Select option'}
      {...register(formData.id)}
      isDisabled={isResult}
    >
      {formData.options.map((option, index) => (
        <option key={option.id} value={option.value || `옵션 ${index + 1}`}>
          {option.value || `옵션 ${index + 1}`}
        </option>
      ))}
    </Select>
  );
};

export default DropdownForm;
