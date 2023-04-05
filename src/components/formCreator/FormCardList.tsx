import { IconButton } from '@chakra-ui/react';
import { PlusSquareIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import uuid from 'react-uuid';
import { useAppDispatch, useAppSelector } from '@/store';
import { addForm } from '@/store/slices/formSlice';
import FormCard from './FormCard';

const FormCardList = () => {
  const [focusedIndex, setFocusedIndex] = useState<number | null>(0);
  const { forms } = useAppSelector((state) => state.formData);
  const dispatch = useAppDispatch();

  return (
    <>
      {forms.map((form, formIndex) => (
        <FormCard
          key={form.id}
          form={form}
          formIndex={formIndex}
          focusedIndex={focusedIndex}
          setFocusedIndex={setFocusedIndex}
        />
      ))}
      <IconButton
        aria-label="Add database"
        icon={<PlusSquareIcon />}
        height="100px"
        fontSize="30px"
        color="teal.600"
        borderRadius="md"
        border="3px"
        borderStyle="dashed"
        borderColor="teal.600"
        onClick={() => {
          dispatch(addForm({ id: uuid() }));
          setFocusedIndex(forms.length);
        }}
      />
    </>
  );
};

export default FormCardList;
