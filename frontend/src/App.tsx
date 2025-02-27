import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider, Box, CSSReset } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { store } from './store/store';

import Sidebar from './components/Sidebar';
import ProductManagement from './pages/ProductManagement';
import InventoryManagement from './pages/InventoryManagement';


const App = () => {
  return (
    <Provider store={store}>
    <ChakraProvider>
      <CSSReset />
      <Router>
        <Box display="flex">
          <Sidebar />

          <Box ml={{ base: 0, md: '250px' }} p={8} w="full">
            <Routes>
              <Route path="/productos" element={<ProductManagement />} />
              <Route path="/inventario/movimientos" element={<InventoryManagement />} />
            </Routes>
          </Box>
        </Box>
      </Router>
    </ChakraProvider>
    </Provider>
  );
};

export default App;
