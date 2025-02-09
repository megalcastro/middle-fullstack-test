import React, { useState } from 'react';
import { Button, FormControl, FormLabel, Input, Select, Stack, useToast } from '@chakra-ui/react';
import { createInventoryMovement } from '../api/inventoryApi';

const MovimientoInventarioForm = () => {
  const [sku, setSku] = useState('');
  const [tipo, setTipo] = useState<'entrada' | 'salida'>('entrada');
  const [cantidad, setCantidad] = useState<number>(0);
  const toast = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (cantidad <= 0) {
      toast({
        title: 'Error',
        description: 'La cantidad debe ser mayor a 0.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    try {
      const movementData = { producto: { sku }, tipo, cantidad };
      await createInventoryMovement(movementData);
      toast({
        title: 'Movimiento Registrado',
        description: 'El movimiento de inventario se ha registrado correctamente.',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });

      setSku('');
      setTipo('entrada');
      setCantidad(0);
    } catch (error) {
      console.error('Error al registrar el movimiento:', error);
      toast({
        title: 'Error',
        description: 'No se pudo registrar el movimiento de inventario.',
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
          <FormLabel>SKU del Producto</FormLabel>
          <Input
            type="text"
            value={sku}
            onChange={(e) => setSku(e.target.value)}
            placeholder="Código SKU del producto"
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Tipo de Movimiento</FormLabel>
          <Select value={tipo} onChange={(e) => setTipo(e.target.value as 'entrada' | 'salida')}>
            <option value="entrada">Entrada</option>
            <option value="salida">Salida</option>
          </Select>
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Cantidad</FormLabel>
          <Input
            type="number"
            value={cantidad > 0 ? cantidad : ''}
            onChange={(e) => setCantidad(e.target.value === '' ? 0 : Number(e.target.value))}
            placeholder="Cantidad de productos"
            min={1}
          />
        </FormControl>

        <Button type="submit" colorScheme="teal" isDisabled={!sku || cantidad <= 0}>
          Registrar Movimiento
        </Button>
      </Stack>
    </form>
  );
};

export default MovimientoInventarioForm;
