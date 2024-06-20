import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Image,
  Link as ChakraLink,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { HamburgerIcon } from '@chakra-ui/icons';

export const Navbar: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, lg: false });

  return (
    <Flex
      // bg="rgba(0, 0, 0, 0.7)"
      borderBottomRadius={'10px'}
      as="nav"
      align="center"
      justify="space-between"
      p="0.5rem"
      boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
    >
      <Box>
        {/* <Flex align="center" gap={2}> */}
          <Image
            src="logo2.png"
            alt="Logo"
            h={{ base: '20px', md: '60px' }}
            objectFit={'contain'}
          />
        {/* </Flex> */}
      </Box>

      {!isMobile && (
        <Flex
          align="center"
          justify="center"
          gap={{ md: 3, lg: 6 }}
          // textColor="yellow.500"
          fontWeight="bold"
          fontSize="lg"
        >
          <ChakraLink href="/about">About Us</ChakraLink>
          <ChakraLink href="/contact">Contact</ChakraLink>
          <ChakraLink href="/resources">Resources</ChakraLink>
          <ChakraLink href="/use-cases">Use Cases</ChakraLink>
        </Flex>
      )}

      <Button
        size={isMobile ? 'sm' : 'lg'}
        bgGradient="linear(to-r, whatsapp.400, whatsapp.700)"
        color="white"
        _hover={{
          bgGradient: 'linear(to-r, whatsapp.500, whatsapp.800)',
        }}
        rounded="full"
        leftIcon={<FaWhatsapp fontSize={isMobile ? '15px' : '30px'} />}
        display={{ base: 'none', lg: 'block' }}
      >
        9012345678
      </Button>

      {isMobile && (
        <>
          <Flex gap={4} align="center">
            <Button
              size={isMobile ? 'sm' : 'lg'}
              bgGradient="linear(to-r, whatsapp.400, whatsapp.700)"
              color="white"
              _hover={{
                bgGradient: 'linear(to-r, whatsapp.500, whatsapp.800)',
              }}
              rounded="full"
              leftIcon={<FaWhatsapp fontSize={isMobile ? '15px' : '25px'} />}
              display={{ base: 'block', lg: 'none' }}
            >
              9012345678
            </Button>

            <IconButton
              icon={<HamburgerIcon />}
              aria-label="Menu"
              onClick={onOpen}
              variant="ghost"
              color="white"
            />
          </Flex>
          <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Menu</DrawerHeader>
              <DrawerBody>
                <Flex direction="column" gap={4}>
                  <ChakraLink href="/about">About Us</ChakraLink>
                  <ChakraLink href="/contact">Contact</ChakraLink>
                  <ChakraLink href="/resources">Resources</ChakraLink>
                  <ChakraLink href="/use-cases">Use Cases</ChakraLink>
                </Flex>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </>
      )}
    </Flex>
  );
};
