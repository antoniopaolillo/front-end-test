import { ChakraProvider } from '@chakra-ui/react';
import theme from './layout/theme';

import Header from './components/header';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
    </ChakraProvider>
  );
}

export default App;
