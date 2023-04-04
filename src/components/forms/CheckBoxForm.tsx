import { Editable, EditableInput, EditablePreview, Flex, Stack, IconButton, Checkbox } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

const CheckBoxForm = () => {
  return (
    <Stack>
      <Flex gap="5px">
        <Checkbox isChecked={false}></Checkbox>
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

export default CheckBoxForm;
