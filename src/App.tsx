import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { theme } from '@/styles/theme';
import { store } from '@/store';
import DynamicRoutes from './DynamicRoutes';

const App = () => {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <Provider store={store}>
          <DynamicRoutes />
        </Provider>
      </ChakraProvider>
    </BrowserRouter>
  );
};

export default App;
