import { CardBody, CardHeader, Card, CardFooter } from '@chakra-ui/react';
import { useAppSelector } from '@/store';

const FormHeader = () => {
  const { title, description } = useAppSelector((state) => state.formData);

  return (
    <Card bg="white" w="100%" borderRadius="md" boxShadow="sm">
      <CardHeader fontSize="2xl">{title}</CardHeader>
      <CardBody>{description}</CardBody>
      <CardFooter color="red">* 필수항목</CardFooter>
    </Card>
  );
};

export default FormHeader;
