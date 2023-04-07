import {
  IconButton,
  Editable,
  EditableInput,
  EditablePreview,
  Select,
  Switch,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  ButtonGroup,
  FormControl,
  FormLabel,
  Center,
  Flex,
  Spacer,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Portal,
  Button,
} from '@chakra-ui/react';
import { PlusSquareIcon, CopyIcon, DeleteIcon, DragHandleIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import uuid from 'react-uuid';
import { useAppDispatch, useAppSelector } from '@/store';
import { addForm, setForm, deleteForm, copyForm, toggleForm, swipeForm } from '@/store/slices/formSlice';
import FormMeta, { FormMetaKeysType } from '@/meta/FormMeta';
import FormSwitcher from '@/components/formCreator/FormSwitcher';
import useDragNDrop from '@/hooks/useDragNDrop';
import { Message } from '@/constants/Message';

const FormCreate = () => {
  const [focusedIndex, setFocusedIndex] = useState<number | null>(0);
  const { forms } = useAppSelector((state) => state.formData);
  const dispatch = useAppDispatch();
  const { isDraggable, onDraggable, onDisDraggable, setDragRef, setDragOverRef, onSwipe } =
    useDragNDrop<'formData/swipeForm'>(swipeForm);

  return (
    <>
      {forms.map((form, formIndex) => (
        <Card
          key={form.id}
          bg="white"
          w="100%"
          borderRadius="md"
          boxShadow={focusedIndex === formIndex ? 'md' : 'sm'}
          borderLeft={focusedIndex === formIndex ? '8px' : ''}
          borderColor="teal.500"
          onClick={() => setFocusedIndex(formIndex)}
          draggable={isDraggable}
          onDragStart={() => setDragRef(formIndex)}
          onDragEnter={() => setDragOverRef(formIndex)}
          onDragOver={(e) => e.preventDefault()}
          onDragEnd={onSwipe}
        >
          <Center p="5px 0 0 0">
            <DragHandleIcon
              transform="rotate(90deg)"
              cursor="grab"
              onMouseOver={onDraggable}
              onMouseOut={onDisDraggable}
            />
          </Center>
          <CardHeader>
            <Flex>
              <Editable defaultValue={form.questionBody} placeholder={Message.PLEASE_INPUT('질문')} fontSize="xl">
                <EditablePreview />
                <EditableInput
                  name="questionBody"
                  onChange={(e) => {
                    dispatch(setForm({ formIndex, target: e.target.name, value: e.target.value }));
                  }}
                />
              </Editable>
              <Spacer></Spacer>
              <Select
                w="200px"
                defaultValue={form.answerType}
                onChange={(e) => {
                  dispatch(setForm({ formIndex, target: 'answerType', value: e.target.value }));
                }}
              >
                {Object.keys(FormMeta).map((formKey) => (
                  <option key={formKey} value={formKey}>
                    {FormMeta[formKey as FormMetaKeysType]}
                  </option>
                ))}
              </Select>
            </Flex>
          </CardHeader>
          <CardBody>
            <FormSwitcher formType={FormMeta[form.answerType as FormMetaKeysType]} formIndex={formIndex} />
          </CardBody>

          <CardFooter>
            <ButtonGroup>
              <IconButton
                aria-label="copy"
                icon={<CopyIcon />}
                onClick={() => dispatch(copyForm({ formIndex, id: uuid() }))}
              />
              <Popover>
                <PopoverTrigger>
                  <IconButton aria-label="delete" icon={<DeleteIcon />} />
                </PopoverTrigger>
                <Portal>
                  <PopoverContent>
                    <PopoverArrow />
                    <PopoverHeader>{Message.CONFIRM_DELETE}</PopoverHeader>
                    <PopoverCloseButton />
                    <PopoverBody>
                      <Button colorScheme="red" onClick={() => dispatch(deleteForm({ formIndex }))}>
                        OK
                      </Button>
                    </PopoverBody>
                  </PopoverContent>
                </Portal>
              </Popover>

              <FormControl display="flex" alignItems="center">
                <FormLabel htmlFor="is-mandatory" mb="0">
                  필수
                </FormLabel>
                <Switch
                  id="is-mandatory"
                  isChecked={form.isMandatory}
                  onChange={(_) => dispatch(toggleForm({ formIndex }))}
                />
              </FormControl>
            </ButtonGroup>
          </CardFooter>
        </Card>
      ))}
      <IconButton
        aria-label="Add database"
        icon={<PlusSquareIcon />}
        height="100px"
        fontSize="30px"
        color="teal.600"
        borderRadius="md"
        border="3px"
        borderStyle="dashed"
        borderColor="teal.600"
        onClick={() => {
          dispatch(addForm({ id: uuid() }));
          setFocusedIndex(forms.length);
        }}
      />
    </>
  );
};

export default FormCreate;
