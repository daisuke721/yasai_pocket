import * as React from 'react'

import { ChakraProvider, Box, Button } from '@chakra-ui/react'

const App: React.FC = () => {
  return (
      <ChakraProvider>
        <Box px={10} my={10}>Hello</Box>
        <Button colorScheme="green">Green button</Button>
      </ChakraProvider>
  );
}

export default App;
