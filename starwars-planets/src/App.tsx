import React from 'react';

import { ChakraProvider } from '@chakra-ui/react';
import theme from './layout/theme';

import Home from './pages/home';
import { TableProvider } from 'hooks/Provider';

function App() {
  return (
    <TableProvider>
      <ChakraProvider theme={theme}>
        <Home />
      </ChakraProvider>
    </TableProvider>
  );
}

export default App;
