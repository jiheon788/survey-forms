import { Card } from '@chakra-ui/react';

interface ICardLayoutProps {
  children: JSX.Element[];
}

const CardLayout = ({ children }: ICardLayoutProps) => {
  return (
    <Card bg="white" w="100%" borderRadius="md" boxShadow="sm">
      {children}
    </Card>
  );
};

export default CardLayout;
