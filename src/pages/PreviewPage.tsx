import {
  Button,
  CardBody,
  CardHeader,
  FormControl,
  FormLabel,
  Card,
  Flex,
  useDisclosure,
  CardFooter,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '@/store';
import FormSelector from '@/components/formViewer/FormSelector';
import { setResult } from '@/store/slices/resultSlice';
import CompletedModal from '@/components/formViewer/CompletedModal';

const PreviewPage = () => {
  const { title, description, forms } = useAppSelector((state) => state.formData);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useAppDispatch();
  const { handleSubmit, register } = useForm();
  const onSubmit = (data: { [key: string]: string | string[] }) => {
    dispatch(setResult(data));
    onOpen();
  };

  return (
    <>
      <Card bg="white" w="100%" borderRadius="md" boxShadow="sm">
        <CardHeader fontSize="2xl">{title}</CardHeader>
        <CardBody>{description}</CardBody>
        <CardFooter color="red">* 필수항목</CardFooter>
      </Card>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex gap={5} flexDirection="column" w="100%">
          {forms.map((formData) => (
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
          <Button variant="ghost" colorScheme="teal" type="reset">
            양식 지우기
          </Button>
        </Flex>
      </form>

      <CompletedModal forms={forms} register={register} isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default PreviewPage;
