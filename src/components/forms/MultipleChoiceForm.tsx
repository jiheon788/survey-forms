import { Radio, Editable, EditableInput, EditablePreview, Flex, Stack, IconButton } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { useAppDispatch, useAppSelector } from '@/store';
import { addItem } from '@/store/slices/formSlice';
import { IFormSelectorProps } from './FormSelector';

const MultipleChoiceForm = ({ formIndex }: Pick<IFormSelectorProps, 'formIndex'>) => {
  const question = useAppSelector((state) => state.formData.forms[formIndex]);
  const dispatch = useAppDispatch();

  return (
    <Stack>
      {question.items.map((item) => (
        <Flex gap="5px" key={item}>
          <Radio isChecked={false} value={item} />
          <Editable defaultValue={item} placeholder="옵션을 입력하세요">
            <EditablePreview />
            <EditableInput name="option" />
          </Editable>
        </Flex>
      ))}

      <IconButton aria-label="add" icon={<AddIcon />} onClick={() => dispatch(addItem({ formIndex }))} />
    </Stack>
  );
};

export default MultipleChoiceForm;
