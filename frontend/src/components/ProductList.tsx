import { useEffect, useState } from 'react';
import { Box, List, ListItem, Text } from '@chakra-ui/react';
import { getProducts } from '../api/productApi';

const ProductList = () => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        alert('Error al obtener productos');
      }
    };

    fetchProducts();
  }, []);

  return (
    <Box>
      <Text fontSize="50px" mb={2} as='b'>Lista de Productos</Text>
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
