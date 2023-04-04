import { Box, Editable, EditableInput, EditableTextarea, EditablePreview, IconButton, Select } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { useAppDispatch, useAppSelector } from '@/store';
import { addForm, setForms, setForm } from '@/store/slices/formSlice';
import FormSelector, { FormType, TFormTypeKeys } from '@/components/forms/FormSelector';

const CreatePage = () => {
  const { formData } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  console.log(formData);

  return (
    <>
      <Box bg="white" w="100%" borderRadius="md" boxShadow="lg">
        <Editable defaultValue={formData.title} placeholder="제목을 입력하세요" fontSize="2xl">
          <EditablePreview />
          <EditableInput
            name="title"
            onChange={(e) => {
              dispatch(setForms({ name: e.target.name, value: e.target.value }));
            }}
          />
        </Editable>

        <Editable defaultValue={formData.description} placeholder="설명을 입력하세요">
          <EditablePreview />
          <EditableTextarea
            name="description"
            onChange={(e) => {
              dispatch(setForms({ name: e.target.name, value: e.target.value }));
            }}
          />
        </Editable>
      </Box>

      {formData.forms.map((form, index) => {
        const FormComponent = FormSelector(FormType[form.answerType as TFormTypeKeys]);

        console.log(FormComponent);
        return (
          <Box bg="white" w="100%" borderRadius="md" boxShadow="lg" key={index}>
            <Editable defaultValue={form.question} placeholder="질문을 입력하세요" fontSize="xl">
              <EditablePreview />
              <EditableInput
                name="question"
                onChange={(e) => {
                  dispatch(setForm({ index, target: e.target.name, value: e.target.value }));
                }}
              />
            </Editable>
            <Select
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
            {FormComponent && <FormComponent />}
          </Box>
        );
      })}

      <IconButton
        aria-label="Add database"
        icon={<AddIcon />}
        w="100%"
        height="100px"
        borderRadius="md"
        border="3px"
        borderStyle="dashed"
        onClick={() => dispatch(addForm())}
      />
    </>
  );
};

export default CreatePage;
