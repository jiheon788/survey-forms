import { Editable, EditableInput, EditablePreview, Flex, Stack, IconButton, Checkbox } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { useAppDispatch, useAppSelector } from '@/store';
import { addItem } from '@/store/slices/formSlice';
import { IFormSelectorProps } from './FormSelector';

const CheckBoxForm = ({ formIndex }: Pick<IFormSelectorProps, 'formIndex'>) => {
  const question = useAppSelector((state) => state.formData.forms[formIndex]);
  const dispatch = useAppDispatch();

  return (
    <Stack>
      {question.items.map((item) => (
        <Flex gap="5px" key={item}>
          <Checkbox isChecked={false} />
          <Editable defaultValue={item} placeholder="옵션을 입력하세요">
            <EditablePreview />
            <EditableInput name="option" />
          </Editable>
        </Flex>
      ))}
      <IconButton aria-label="add" icon={<AddIcon />} onClick={() => dispatch(addItem({ formIndex }))}>
        옵션 추가
      </IconButton>
    </Stack>
  );
};

export default CheckBoxForm;
