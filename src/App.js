import React, { useEffect } from 'react';
import { ChakraProvider} from '@chakra-ui/react';
import { OriginTheme } from './Themes/OriginTheme';
import { ExercisesProvider } from './Contexts/ExercicesContext';
import Header from './Layout/Header';



function App() {

  return (
    <ChakraProvider theme={OriginTheme}>
      <ExercisesProvider>
        <Header/>
      </ExercisesProvider>
    </ChakraProvider>
  );
}

export default App;
