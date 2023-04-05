import {
  Editable,
  EditableInput,
  EditablePreview,
  Flex,
  Stack,
  IconButton,
  OrderedList,
  ListItem,
  Spacer,
} from '@chakra-ui/react';
import { AddIcon, CloseIcon } from '@chakra-ui/icons';
import uuid from 'react-uuid';
import { useAppDispatch, useAppSelector } from '@/store';
import { addOption, deleteOption, setOption } from '@/store/slices/formSlice';
import { IFormSelectorProps } from './FormSelector';

const DropdownForm = ({ formIndex }: Pick<IFormSelectorProps, 'formIndex'>) => {
  const { options } = useAppSelector((state) => state.formData.forms[formIndex]);
  const dispatch = useAppDispatch();

  return (
    <Stack>
      <OrderedList>
        {options.map((option, optionIndex) => {
          return (
            <ListItem key={option.id}>
              <Flex alignItems="center">
                <Editable defaultValue={option.value} placeholder={`옵션 ${optionIndex + 1}`}>
                  <EditablePreview />
                  <EditableInput
                    onChange={(e) => dispatch(setOption({ formIndex, optionIndex, value: e.target.value }))}
                  />
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
            </ListItem>
          );
        })}
      </OrderedList>
      <IconButton aria-label="add" icon={<AddIcon />} onClick={() => dispatch(addOption({ formIndex, id: uuid() }))} />
    </Stack>
  );
};

export default DropdownForm;
