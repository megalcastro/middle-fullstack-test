import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme/theme';
import Home from './pages/Home';

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Home />
    </ChakraProvider>
  );
};

export default App;
