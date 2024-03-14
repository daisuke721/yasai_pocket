import * as React from 'react'

import { ChakraProvider, Box, Button, chakra, Container, Heading, HStack, Flex, Input, InputGroup, InputLeftElement, InputRightElement, IconButton, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerCloseButton, DrawerBody, useDisclosure, Center } from '@chakra-ui/react'
import { HamburgerIcon, SearchIcon } from '@chakra-ui/icons';
import { BsCart } from "react-icons/bs";

const App: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
      <ChakraProvider>
        <chakra.header p={3} bg={'green.300'}>
          <Container>
            <HStack spacing={10}>
              <Flex align="center" as="a" mr={4} _hover={{ cursor: "pointer" }}>
                <Heading color={'white'}>App Title</Heading>
              </Flex>
              <Flex>
                <Box pr={4}>
                  <InputGroup>
                    <InputLeftElement pointerEvents={'none'}>
                      <SearchIcon color={'gray.300'} />
                    </InputLeftElement>
                    <Input bg={'white'} placeholder='商品を探す' _placeholder={{ opacity: 1, color: "gray.400" }} />
                    <InputRightElement width="4.5rem">
                        <Button color={'gray'} colorScheme='gray' variant='ghost' h="1.75rem" size="sm">検索</Button>
                    </InputRightElement>
                  </InputGroup>
                </Box>
              </Flex>
              <IconButton aria-label='カートボタン' icon={<BsCart />} variant="unstyled" />
              <IconButton aria-label='メニューボタン' icon={<HamburgerIcon />} variant="unstyled" onClick={onOpen} />
            </HStack>
          </Container>
          <Drawer placement='right' onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay>
              <DrawerContent>
                <DrawerHeader>メニュー画面</DrawerHeader>
                <DrawerCloseButton />
                <DrawerBody>
                  <Button w='100%'>新規登録</Button>
                  <Button w='100%'>ログイン</Button>
                </DrawerBody>
              </DrawerContent>
            </DrawerOverlay>
          </Drawer>
        </chakra.header>
        <Box>TOPページ</Box>
        <chakra.footer p='50px' bg='green.300'>
          <Center color='white'>©yasai pocket</Center>
        </chakra.footer>
      </ChakraProvider>
  );
}

export default App;
