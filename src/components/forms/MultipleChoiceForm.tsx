import { Radio, Editable, EditableInput, EditablePreview, Flex, Stack, IconButton, Spacer } from '@chakra-ui/react';
import { AddIcon, CloseIcon } from '@chakra-ui/icons';
import { useAppDispatch, useAppSelector } from '@/store';
import { addItem, deleteItem } from '@/store/slices/formSlice';
import { IFormSelectorProps } from './FormSelector';

const MultipleChoiceForm = ({ formIndex }: Pick<IFormSelectorProps, 'formIndex'>) => {
  const question = useAppSelector((state) => state.formData.forms[formIndex]);
  const dispatch = useAppDispatch();

  return (
    <Stack>
      {question.items.map((item, itemIndex) => (
        <Flex gap="5px" key={item} alignItems="center">
          <Radio isChecked={false} value={item} />
          <Editable defaultValue={item} placeholder={`옵션 ${itemIndex + 1}`}>
            <EditablePreview />
            <EditableInput name="option" />
          </Editable>
          <Spacer />
          <IconButton
            aria-label="delete"
            icon={<CloseIcon />}
            size="sm"
            variant="ghost"
            onClick={() => dispatch(deleteItem({ formIndex, itemIndex }))}
          />
        </Flex>
      ))}

      <IconButton aria-label="add" icon={<AddIcon />} onClick={() => dispatch(addItem({ formIndex }))} />
    </Stack>
  );
};

export default MultipleChoiceForm;
