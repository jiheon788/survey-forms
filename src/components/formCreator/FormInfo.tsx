import {
  Editable,
  EditableInput,
  EditableTextarea,
  EditablePreview,
  Card,
  CardHeader,
  CardBody,
} from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '@/store';
import { setForms } from '@/store/slices/formSlice';
import CardLayout from '../common/CardLayout';

const FormInfo = () => {
  const { formData } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  return (
    <CardLayout>
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
    </CardLayout>
  );
};

export default FormInfo;
