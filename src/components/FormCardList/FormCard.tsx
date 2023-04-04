import {
  Editable,
  EditableInput,
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
} from '@chakra-ui/react';
import { CopyIcon, DeleteIcon, DragHandleIcon } from '@chakra-ui/icons';
import { useAppDispatch } from '@/store';
import { setForm, deleteForm, copyForm, toggleForm } from '@/store/slices/formSlice';
import FormSelector, { FormType, TFormTypeKeys } from '@/components/FormSelector';

interface IForm {
  id: string;
  questionBody: string;
  answerType: string;
  isMandatory: boolean;
  options: {
    id: string;
    value: string;
  }[];
}

interface IFormCardProps {
  form: IForm;
  formIndex: number;
  focusedIndex: number | null;
  setFocusedIndex: (focusedIndex: number | null) => void;
}

const FormCard = ({ form, formIndex, focusedIndex, setFocusedIndex }: IFormCardProps) => {
  const dispatch = useAppDispatch();

  return (
    <Card
      bg="white"
      w="100%"
      borderRadius="md"
      boxShadow={focusedIndex === formIndex ? 'md' : 'sm'}
      borderLeft={focusedIndex === formIndex ? '8px' : ''}
      borderColor="teal.500"
      onClick={() => setFocusedIndex(formIndex)}
    >
      <Center p="5px 0 0 0">
        <DragHandleIcon transform="rotate(90deg)" />
      </Center>
      <CardHeader>
        <Flex>
          <Editable defaultValue={form.questionBody} placeholder="질문을 입력하세요" fontSize="xl">
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
            {Object.keys(FormType).map((formKey) => (
              <option key={formKey} value={formKey}>
                {FormType[formKey as TFormTypeKeys]}
              </option>
            ))}
          </Select>
        </Flex>
      </CardHeader>
      <CardBody>
        <FormSelector formType={FormType[form.answerType as TFormTypeKeys]} formIndex={formIndex} />
      </CardBody>

      <CardFooter>
        <ButtonGroup>
          <IconButton aria-label="copy" icon={<CopyIcon />} onClick={() => dispatch(copyForm({ formIndex }))} />
          <IconButton aria-label="delete" icon={<DeleteIcon />} onClick={() => dispatch(deleteForm({ formIndex }))} />
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
  );
};

export default FormCard;
