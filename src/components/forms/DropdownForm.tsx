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

const DropdownForm = () => {
  return (
    <Stack>
      <OrderedList>
        <ListItem>
          <Flex gap="5px">
            <Editable defaultValue="옵션 1" placeholder="옵션을 입력하세요">
              <EditablePreview />
              <EditableInput name="option" />
            </Editable>
          </Flex>
        </ListItem>
      </OrderedList>
      <IconButton aria-label="add" icon={<AddIcon />}>
        옵션 추가
      </IconButton>
    </Stack>
  );
};

export default DropdownForm;
