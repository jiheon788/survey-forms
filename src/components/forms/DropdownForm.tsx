import {
  Editable,
  EditableInput,
  EditablePreview,
  Flex,
  Stack,
  IconButton,
  Checkbox,
  OrderedList,
  ListItem,
  Spacer,
} from '@chakra-ui/react';
import { AddIcon, CloseIcon } from '@chakra-ui/icons';
import { useAppDispatch, useAppSelector } from '@/store';
import { addItem, deleteItem } from '@/store/slices/formSlice';
import { IFormSelectorProps } from './FormSelector';

const DropdownForm = ({ formIndex }: Pick<IFormSelectorProps, 'formIndex'>) => {
  const question = useAppSelector((state) => state.formData.forms[formIndex]);
  const dispatch = useAppDispatch();

  return (
    <Stack>
      <OrderedList>
        {question.items.map((item, itemIndex) => (
          <ListItem key={item}>
            <Flex alignItems="center">
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
          </ListItem>
        ))}
      </OrderedList>
      <IconButton aria-label="add" icon={<AddIcon />} onClick={() => dispatch(addItem({ formIndex }))} />
    </Stack>
  );
};

export default DropdownForm;
