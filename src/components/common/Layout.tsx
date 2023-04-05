import { Outlet } from 'react-router-dom';
import { Container, Flex } from '@chakra-ui/react';
import Header from './Header';

const Layout = () => {
  return (
    <Container maxW="80%" centerContent padding="2em 0">
      <Flex gap={10} flexDirection="column" w="100%">
        <Header />
        <Outlet />
      </Flex>
    </Container>
  );
};

export default Layout;
