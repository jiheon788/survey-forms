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
      {formData.options.map((option) => (
        <option key={option.id} value={option.value || 'Null'}>
          {option.value || 'Null'}
        </option>
      ))}
    </Select>
  );
};

export default DropdownForm;
