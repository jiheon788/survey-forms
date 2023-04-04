import { Box, Editable, EditableInput, EditableTextarea, EditablePreview, Input } from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '@/store';
import { setForm } from '@/store/slices/formSlice';

const CreatePage = () => {
  const { form } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  console.log(form);

  return (
    <>
      <Box bg="white" w="100%" borderRadius="md" boxShadow="lg">
        <Editable defaultValue={form.title} placeholder="제목을 입력하세요" fontSize="2xl">
          <EditablePreview />
          <EditableInput
            name="title"
            onChange={(e) => {
              dispatch(setForm({ name: e.target.name, value: e.target.value }));
            }}
          />
        </Editable>

        <Editable defaultValue={form.description} placeholder="설명을 입력하세요">
          <EditablePreview />
          <EditableTextarea
            name="description"
            onChange={(e) => {
              dispatch(setForm({ name: e.target.name, value: e.target.value }));
            }}
          />
        </Editable>
      </Box>
    </>
  );
};

export default CreatePage;
