import React, { useEffect } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { originTheme } from './Themes/OriginTheme';
import { ExercisesProvider } from './Contexts/ExercicesContext';
import Header from './Layout/Header';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Home from './Pages/Home';
import './App.css'


function App() {

  return (
    <Router>
      <ChakraProvider theme={originTheme}>
        <ExercisesProvider>
          <Header />
          <Routes>
            <Route path='/' element={<Home/>}></Route>
          </Routes>
        </ExercisesProvider>
      </ChakraProvider>
    </Router>
  );
}

export default App;
