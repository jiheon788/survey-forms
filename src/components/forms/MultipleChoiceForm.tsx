import { Radio, Editable, EditableInput, EditablePreview, Flex, Stack, IconButton } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

const MultipleChoiceForm = () => {
  return (
    <Stack>
      <Flex gap="5px">
        <Radio isChecked={false}></Radio>
        <Editable defaultValue="옵션 1" placeholder="옵션을 입력하세요">
          <EditablePreview />
          <EditableInput name="option" />
        </Editable>
      </Flex>
      <IconButton aria-label="add" icon={<AddIcon />}>
        옵션 추가
      </IconButton>
    </Stack>
  );
};

export default MultipleChoiceForm;
