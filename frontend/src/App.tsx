import * as React from 'react'

import { ChakraProvider, Box, Button, chakra, Container, Heading, HStack, Flex, Input, InputGroup, InputLeftElement, InputRightElement, IconButton } from '@chakra-ui/react'
import { HamburgerIcon, SearchIcon } from '@chakra-ui/icons';
import { BsCart } from "react-icons/bs";

const App: React.FC = () => {
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
              <IconButton aria-label='メニューボタン' icon={<HamburgerIcon />} variant="unstyled" />
            </HStack>
          </Container>
        </chakra.header>
        <Box>TOPページ</Box>
      </ChakraProvider>
  );
}

export default App;
