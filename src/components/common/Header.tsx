import { NavLink } from 'react-router-dom';
import { Flex, Spacer, Heading, IconButton, Button, ButtonGroup } from '@chakra-ui/react';
import { ViewIcon } from '@chakra-ui/icons';
import RouterMeta from '@/meta/RouterMeta';

const Header = () => {
  return (
    <Flex>
      <Heading color="teal.800">Survey Forms</Heading>
      <Spacer />
      <ButtonGroup>
        <NavLink to={RouterMeta.CreatePage.path}>
          <Button colorScheme="teal" aria-label="preview" size="lg" variant="ghost">
            Create Form
          </Button>
        </NavLink>
        <NavLink to={RouterMeta.PreviewPage.path}>
          <IconButton colorScheme="teal" aria-label="preview" size="lg" icon={<ViewIcon />} variant="ghost" />
        </NavLink>
      </ButtonGroup>
    </Flex>
  );
};

export default Header;
