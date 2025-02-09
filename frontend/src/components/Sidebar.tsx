import { Box, VStack, HStack, IconButton, Text, useDisclosure, Drawer, DrawerBody, DrawerOverlay, DrawerContent, DrawerCloseButton } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { HamburgerIcon } from '@chakra-ui/icons';

const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <HStack spacing={4} align="center" display={{ base: 'flex', md: 'none' }}>
        <IconButton icon={<HamburgerIcon />} onClick={onOpen} aria-label="Open Sidebar" />
      </HStack>

      <Box
        w={{ base: 'full', md: '250px' }}
        h="100vh"
        p={4}
        bg="gray.800"
        color="white"
        display={{ base: 'none', md: 'block' }}
      >
        <VStack spacing={8} align="stretch">
          <Text fontSize="2xl" fontWeight="bold">Menu para gestion</Text>
          <Link to="/productos">
            <Text fontSize="lg" _hover={{ color: 'teal.500' }}>Gestionar Productos</Text>
          </Link>
        </VStack>
      </Box>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody>
              <VStack spacing={8} align="stretch">
                <Text fontSize="2xl" fontWeight="bold">Gestión de Productos</Text>
                <Link to="/productos">
                  <Text fontSize="lg" _hover={{ color: 'teal.500' }}>Gestionar Productos</Text>
                </Link>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export default Sidebar;
