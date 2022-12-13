import React, { useEffect } from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import { ExercisesProvider } from './Contexts/ExercicesContext';



function App() {

  return (
    <ChakraProvider theme={theme}>
      <ExercisesProvider>

      </ExercisesProvider>
    </ChakraProvider>
  );
}

export default App;
