import { useEffect } from 'react';
import { Box, List, ListItem, Text } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store/store'; 
import { fetchProducts } from '../store/productSlice';

const ProductList = () => {
  const dispatch = useDispatch<AppDispatch>();
  
  const { products, loading, error } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return <Text>Cargando...</Text>;
  }

  if (error) {
    return <Text color="red.500">Error: {error}</Text>;
  }

  return (
    <Box>
      <Text fontSize="50px" mb={2} as="b">Lista de Productos</Text>
      <List spacing={3}>
        {products.map((product) => (
          <ListItem key={product.id} border="1px" borderRadius="md" padding="3">
            <Text fontWeight="bold">{product.nombre}</Text>
            <Text>SKU: {product.sku}</Text>
            <Text>Precio: ${product.precio}</Text>
            <Text>Stock: {product.stock}</Text>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ProductList;
