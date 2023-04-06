import { Select } from '@chakra-ui/react';
import { IFormSelectorProps } from './FormSelector';

const DropdownForm = ({ register, formData }: Pick<IFormSelectorProps, 'register' | 'formData'>) => {
  return (
    <Select placeholder="Select option" {...register(formData.id)}>
      {formData.options.map((option) => (
        <option key={option.id} value={option.value}>
          {option.value}
        </option>
      ))}
    </Select>
  );
};

export default DropdownForm;
