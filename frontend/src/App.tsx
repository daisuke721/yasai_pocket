import * as React from 'react'

import { BrowserRouter} from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'

import theme from './theme/theme';
import { Router } from './router/Router';


const App: React.FC = () => {

  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
