import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider, Box, CSSReset } from '@chakra-ui/react';
import Sidebar from './components/Sidebar';
import ProductManagement from './pages/ProductManagement';

const App = () => {
  return (
    <ChakraProvider>
      <CSSReset />
      <Router>
        <Box display="flex">
          <Sidebar />

          <Box ml={{ base: 0, md: '250px' }} p={8} w="full">
            <Routes>
              <Route path="/productos" element={<ProductManagement />} />
            </Routes>
          </Box>
        </Box>
      </Router>
    </ChakraProvider>
  );
};

export default App;
