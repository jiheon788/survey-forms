import { Radio, Editable, EditableInput, EditablePreview, Flex, Stack, IconButton, Spacer } from '@chakra-ui/react';
import { AddIcon, CloseIcon, DragHandleIcon } from '@chakra-ui/icons';
import uuid from 'react-uuid';
import { useAppDispatch, useAppSelector } from '@/store';
import { addOption, deleteOption, setOption, swipeOption } from '@/store/slices/formSlice';
import useDragNDrop from '@/hooks/useDragNDrop';
import { Message } from '@/constants/Message';
import { IFormSwitcherProps } from './FormSwitcher';

const MultipleChoiceForm = ({ formIndex }: Pick<IFormSwitcherProps, 'formIndex'>) => {
  const { options } = useAppSelector((state) => state.formData.forms[formIndex]);
  const dispatch = useAppDispatch();

  const { isDraggable, onDraggable, onDisDraggable, setDragRef, setDragOverRef, onSwipe } =
    useDragNDrop<'formData/swipeOption'>(swipeOption, formIndex);

  return (
    <Stack>
      {options.map((option, optionIndex) => (
        <Flex
          gap="2"
          key={option.id}
          alignItems="center"
          draggable={isDraggable}
          onDragStart={() => setDragRef(optionIndex)}
          onDragEnter={() => setDragOverRef(optionIndex)}
          onDragOver={(e) => e.preventDefault()}
          onDragEnd={onSwipe}
        >
          <DragHandleIcon color="gray.500" cursor="grab" onMouseOver={onDraggable} onMouseOut={onDisDraggable} />
          <Radio isChecked={false} />
          <Editable defaultValue={option.value} placeholder={Message.PLEASE_INPUT('옵션')}>
            <EditablePreview />
            <EditableInput onChange={(e) => dispatch(setOption({ formIndex, optionIndex, value: e.target.value }))} />
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

      <IconButton aria-label="add" icon={<AddIcon />} onClick={() => dispatch(addOption({ formIndex, id: uuid() }))} />
    </Stack>
  );
};

export default MultipleChoiceForm;
