import { Button, CardBody, CardHeader, FormControl, FormLabel, Card, Flex } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '@/store';
import FormSelector from '@/components/formViewer/FormSelector';

const PreviewPage = () => {
  const { title, description, forms } = useAppSelector((state) => state.formData);
  const dispatch = useAppDispatch();

  console.log(forms);

  const { handleSubmit, register } = useForm();

  const onSubmit = (data: { [key: string]: string | string[] }) => console.log(data);

  return (
    <>
      <Card bg="white" w="100%" borderRadius="md" boxShadow="sm">
        <CardHeader>{title}</CardHeader>
        <CardBody>{description}</CardBody>
      </Card>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex gap={5} flexDirection="column" w="100%">
          {forms.map((formData, index) => (
            <Card key={formData.id} bg="white" w="100%" borderRadius="md" boxShadow="sm">
              <FormControl isRequired={formData.isMandatory}>
                <CardHeader>
                  <FormLabel htmlFor={formData.questionBody}>{formData.questionBody}</FormLabel>
                </CardHeader>
                <CardBody>
                  <FormSelector register={register} formData={formData} />
                </CardBody>
              </FormControl>
            </Card>
          ))}

          <Button type="submit" variant="solid" colorScheme="teal">
            제출
          </Button>
        </Flex>
      </form>
    </>
  );
};

export default PreviewPage;
