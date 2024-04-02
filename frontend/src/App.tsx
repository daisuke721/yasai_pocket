import * as React from 'react'

import { ChakraProvider, Button, Heading, Input, InputGroup, InputLeftElement, InputRightElement, IconButton, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerCloseButton, DrawerBody, useDisclosure, Center, Grid, GridItem } from '@chakra-ui/react'
import { HamburgerIcon, SearchIcon } from '@chakra-ui/icons';
import { BsCart } from "react-icons/bs";

import { PrimaryButton } from './components/atoms/button/PrimaryButton';
import theme from './theme/theme';

const App: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
      <ChakraProvider theme={theme}>
        <Grid as='header' templateColumns='150px repeat(2, 1fr) 80px' gap={10} h='100px' p='25px' bg='orange.300'>
              <GridItem as='a' _hover={{ cursor: 'pointer' }}>
                <Heading as='h1' textAlign='center' color='white'>App Title</Heading>
              </GridItem>
              <GridItem colSpan={2}>
                <InputGroup>
                  <InputLeftElement pointerEvents={'none'}>
                    <SearchIcon color={'gray.300'} />
                  </InputLeftElement>
                  <Input borderRadius='25px' bg={'white'} outline='none' placeholder='商品を探す' _placeholder={{ opacity: 1, color: "gray.400" }} />
                  <InputRightElement width="4.5rem">
                    <Button color={'gray'} colorScheme='gray' variant='unstyled' size="sm">検索</Button>
                  </InputRightElement>
                </InputGroup>
              </GridItem>
              <GridItem justifyContent='end'>
                <IconButton aria-label='カートボタン' icon={<BsCart />} variant='unstyled' />
                <IconButton aria-label='メニューボタン' icon={<HamburgerIcon />} variant='unstyled' onClick={onOpen} />
              </GridItem>
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
        </Grid>
        <Grid>
          <GridItem>
            TOPページ
            <PrimaryButton>aaa</PrimaryButton>
          </GridItem>

        </Grid>
        <Grid as='footer' bg='orange.300' h='100px'>
          <GridItem p='35px'>
            <Center color='white'>©yasai pocket</Center>
          </GridItem>
        </Grid>
      </ChakraProvider>
  );
}

export default App;
