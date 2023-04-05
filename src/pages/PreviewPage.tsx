import { CardBody, CardHeader } from '@chakra-ui/react';
import CardLayout from '@/components/common/CardLayout';
import { useAppDispatch, useAppSelector } from '@/store';

const PreviewPage = () => {
  const { title, description, forms } = useAppSelector((state) => state.formData);
  const dispatch = useAppDispatch();

  console.log(forms);

  return (
    <>
      <CardLayout>
        <CardHeader>{title}</CardHeader>
        <CardBody>{description}</CardBody>
      </CardLayout>

      {forms.map((form, index) => (
        <CardLayout key={form.id}>
          <CardHeader>{form.questionBody}</CardHeader>
          <CardBody></CardBody>
        </CardLayout>
      ))}
    </>
  );
};

export default PreviewPage;
