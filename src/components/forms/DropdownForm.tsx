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
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { useAppDispatch, useAppSelector } from '@/store';
import { addItem } from '@/store/slices/formSlice';
import { IFormSelectorProps } from './FormSelector';

const DropdownForm = ({ formIndex }: Pick<IFormSelectorProps, 'formIndex'>) => {
  const question = useAppSelector((state) => state.formData.forms[formIndex]);
  const dispatch = useAppDispatch();

  return (
    <Stack>
      <OrderedList>
        {question.items.map((item) => (
          <ListItem key={item}>
            <Flex gap="5px">
              <Editable defaultValue={item} placeholder="옵션을 입력하세요">
                <EditablePreview />
                <EditableInput name="option" />
              </Editable>
            </Flex>
          </ListItem>
        ))}
      </OrderedList>
      <IconButton aria-label="add" icon={<AddIcon />} onClick={() => dispatch(addItem({ formIndex }))} />
    </Stack>
  );
};

export default DropdownForm;
