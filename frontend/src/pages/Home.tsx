import { Container, Box, Heading } from '@chakra-ui/react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

const Home = () => {
  return (
    <Container maxW="container.md" mt={6}>
      <Box mb={8}>
        <Heading as="h1" size="xl">Gestión de Productos</Heading>
      </Box>
      <ProductForm />
      <ProductList />
    </Container>
  );
};

export default Home;