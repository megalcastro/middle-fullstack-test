import { Button, FormControl, FormLabel, Input, Stack, useToast } from '@chakra-ui/react';
import { useState } from 'react';
import { createProduct } from '../api/productApi';

const ProductForm = () => {
  const [nombre, setNombre] = useState('');
  const [sku, setSku] = useState('');
  const [precio, setPrecio] = useState<number | ''>('');
  const [stock, setStock] = useState<number | ''>('');
  const toast = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();


    const precioNumber = Number(precio);
    const stockNumber = Number(stock);

    if (isNaN(precioNumber) || isNaN(stockNumber) || precioNumber <= 0 || stockNumber < 0) {
      toast({
        title: 'Error',
        description: 'El precio debe ser mayor a 0 y el stock no puede ser negativo.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    try {
      const productData = { nombre, sku, precio: precioNumber, stock: stockNumber };
      await createProduct(productData);

      toast({
        title: 'Producto creado',
        description: 'El producto se ha registrado correctamente.',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });

      setNombre('');
      setSku('');
      setPrecio('');
      setStock('');
    } catch (error) {
      console.error('Error al crear el producto:', error);
      toast({
        title: 'Error',
        description: 'No se pudo crear el producto.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={4} p={4} boxShadow="md" borderRadius="lg" bg="white">
        <FormControl isRequired>
          <FormLabel>Nombre</FormLabel>
          <Input value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre del producto" />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>SKU</FormLabel>
          <Input value={sku} onChange={(e) => setSku(e.target.value)} placeholder="Código SKU" />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Precio</FormLabel>
          <Input
            type="number"
            value={precio}
            onChange={(e) => setPrecio(e.target.value === '' ? '' : Number(e.target.value))}
            placeholder="Precio del producto"
            min={1}
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Stock</FormLabel>
          <Input
            type="number"
            value={stock}
            onChange={(e) => setStock(e.target.value === '' ? '' : Number(e.target.value))}
            placeholder="Cantidad en stock"
            min={0}
          />
        </FormControl>

        <Button type="submit" colorScheme="teal" isDisabled={!nombre || !sku || precio === '' || stock === ''}>
          Crear Producto
        </Button>
      </Stack>
    </form>
  );
};

export default ProductForm;
