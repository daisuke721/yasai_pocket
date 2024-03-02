import * as React from 'react'

import { ChakraProvider, Box, Button, chakra, Container, Heading, HStack, Flex, Input } from '@chakra-ui/react'

const App: React.FC = () => {
  return (
      <ChakraProvider>
        <chakra.header p={3} bg={'green.300'}>
          <Container>
            <HStack spacing={10}>
              <Heading color={'white'}>App Title</Heading>
              <Flex>
                <Box pr={4}>
                  <Input bg={'white'} placeholder='商品を探す' />
                </Box>
                <Box>
                  <Button>検索</Button>
                </Box>
              </Flex>
            </HStack>
          </Container>
        </chakra.header>
        <Box>TOPページ</Box>
      </ChakraProvider>
  );
}

export default App;
