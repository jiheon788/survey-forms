import {
  Box,
  Editable,
  EditableInput,
  EditableTextarea,
  EditablePreview,
  IconButton,
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
  Heading,
} from '@chakra-ui/react';
import { PlusSquareIcon, ViewIcon, CopyIcon, DeleteIcon, DragHandleIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/store';
import { addForm, setForms, setForm, deleteForm, copyForm } from '@/store/slices/formSlice';
import FormSelector, { FormType, TFormTypeKeys } from '@/components/forms/FormSelector';

const CreatePage = () => {
  const [focusedIndex, setFocusedIndex] = useState<null | number>(null);
  const { formData } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  console.log(formData);

  return (
    <>
      <Flex>
        <Heading color="teal.900">Survey Forms</Heading>
        <Spacer />
        <IconButton colorScheme="teal" aria-label="preview" size="lg" icon={<ViewIcon />} />
      </Flex>
      <Card bg="white" w="100%" borderRadius="md" boxShadow="lg">
        <CardHeader>
          <Editable defaultValue={formData.title} placeholder="제목을 입력하세요" fontSize="2xl">
            <EditablePreview />
            <EditableInput
              name="title"
              onChange={(e) => {
                dispatch(setForms({ name: e.target.name, value: e.target.value }));
              }}
            />
          </Editable>
        </CardHeader>
        <CardBody>
          <Editable defaultValue={formData.description} placeholder="설명을 입력하세요">
            <EditablePreview />
            <EditableTextarea
              name="description"
              onChange={(e) => {
                dispatch(setForms({ name: e.target.name, value: e.target.value }));
              }}
            />
          </Editable>
        </CardBody>
      </Card>

      {formData.forms.map((form, index) => {
        const FormComponent = FormSelector(FormType[form.answerType as TFormTypeKeys]);

        return (
          <Card
            bg="white"
            w="100%"
            borderRadius="md"
            boxShadow={focusedIndex === index ? 'lg' : 'md'}
            key={index}
            borderLeft={focusedIndex === index ? '8px' : ''}
            borderColor="teal.500"
            onClick={() => setFocusedIndex(index)}
          >
            <Center p="5px 0 0 0">
              <DragHandleIcon transform="rotate(90deg)" />
            </Center>
            <CardHeader>
              <Flex>
                <Editable defaultValue={form.question} placeholder="질문을 입력하세요" fontSize="xl">
                  <EditablePreview />
                  <EditableInput
                    name="question"
                    onChange={(e) => {
                      dispatch(setForm({ index, target: e.target.name, value: e.target.value }));
                    }}
                  />
                </Editable>
                <Spacer></Spacer>
                <Select
                  w="200px"
                  defaultValue={form.answerType}
                  onChange={(e) => {
                    dispatch(setForm({ index, target: 'answerType', value: e.target.value }));
                  }}
                >
                  {Object.keys(FormType).map((formKey) => (
                    <option key={formKey} value={formKey}>
                      {FormType[formKey as TFormTypeKeys]}
                    </option>
                  ))}
                </Select>
              </Flex>
            </CardHeader>
            <CardBody>{FormComponent && <FormComponent />}</CardBody>

            <CardFooter>
              <ButtonGroup>
                <IconButton aria-label="copy" icon={<CopyIcon />} onClick={() => dispatch(copyForm({ index }))} />
                <IconButton aria-label="delete" icon={<DeleteIcon />} onClick={() => dispatch(deleteForm({ index }))} />
                <FormControl display="flex" alignItems="center">
                  <FormLabel htmlFor="is-mandatory" mb="0">
                    필수
                  </FormLabel>
                  <Switch id="is-mandatory" />
                </FormControl>
              </ButtonGroup>
            </CardFooter>
          </Card>
        );
      })}

      <IconButton
        aria-label="Add database"
        icon={<PlusSquareIcon />}
        w="100%"
        height="100px"
        fontSize="30px"
        color="teal.600"
        borderRadius="md"
        border="3px"
        borderStyle="dashed"
        borderColor="teal.600"
        onClick={() => {
          dispatch(addForm());
          setFocusedIndex(formData.forms.length);
        }}
      />
    </>
  );
};

export default CreatePage;
