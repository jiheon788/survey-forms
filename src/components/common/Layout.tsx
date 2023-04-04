import { Outlet } from 'react-router-dom';
import { Container, Flex, Spacer, Heading, IconButton } from '@chakra-ui/react';
import { ViewIcon } from '@chakra-ui/icons';

const Layout = () => {
  return (
    <Container maxW="80%" centerContent padding="3em 0">
      <Flex gap={10} flexDirection="column" w="100%">
        <Flex>
          <Heading color="teal.900">Survey Forms</Heading>
          <Spacer />
          <IconButton colorScheme="teal" aria-label="preview" size="lg" icon={<ViewIcon />} />
        </Flex>
        <Outlet />
      </Flex>
    </Container>
  );
};

export default Layout;
