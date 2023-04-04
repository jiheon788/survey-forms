import { Editable, EditableInput, EditablePreview, Flex, Stack, IconButton, Checkbox, Spacer } from '@chakra-ui/react';
import { AddIcon, CloseIcon } from '@chakra-ui/icons';
import uuid from 'react-uuid';
import { useAppDispatch, useAppSelector } from '@/store';
import { addOption, deleteOption } from '@/store/slices/formSlice';
import { IFormSelectorProps } from './FormSelector';

const CheckBoxForm = ({ formIndex }: Pick<IFormSelectorProps, 'formIndex'>) => {
  const question = useAppSelector((state) => state.formData.forms[formIndex]);
  const dispatch = useAppDispatch();

  return (
    <Stack>
      {question.options.map((option, optionIndex) => (
        <Flex gap="5px" key={option.id} alignItems="center">
          <Checkbox isChecked={false} />
          <Editable defaultValue={option.value} placeholder={`옵션 ${optionIndex + 1}`}>
            <EditablePreview />
            <EditableInput name="option" />
          </Editable>
          <Spacer />
          <IconButton
            aria-label="delete"
            icon={<CloseIcon />}
            size="sm"
            variant="ghost"
            onClick={() => dispatch(deleteOption({ formIndex, optionIndex }))}
          />
        </Flex>
      ))}
      <IconButton aria-label="add" icon={<AddIcon />} onClick={() => dispatch(addOption({ formIndex, id: uuid() }))}>
        옵션 추가
      </IconButton>
    </Stack>
  );
};

export default CheckBoxForm;
