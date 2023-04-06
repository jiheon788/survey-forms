import { Select } from '@chakra-ui/react';
import { IFormSelectorProps } from './FormSelector';

const DropdownForm = ({ register, formData }: Pick<IFormSelectorProps, 'register' | 'formData'>) => {
  return (
    <Select placeholder="Select option" {...register(formData.id)}>
      {formData.options.map((option, index) => (
        <option key={option.id} value={option.value || `옵션 ${index + 1}`}>
          {option.value || `옵션 ${index + 1}`}
        </option>
      ))}
    </Select>
  );
};

export default DropdownForm;
