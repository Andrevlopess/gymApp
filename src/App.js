import React, { useEffect } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { originTheme } from './Themes/OriginTheme';
import { ExercisesProvider } from './Contexts/ExercicesContext';
import Header from './Layout/Header';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Home from './Pages/Home';
import './App.css'
import WorkoutPlan from './Pages/WorkoutPlan';
import GymPage from './Pages/GymPage';
import AboutUs from './Pages/AboutUs';


function App() {

  return (
    <Router>
      <ChakraProvider theme={originTheme}>
        <ExercisesProvider>
          <Header />
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/workoutplan' element={<WorkoutPlan/>}></Route>
            <Route path='/gymPage' element={<GymPage/>}></Route>
            <Route path='/aboutUs' element={<AboutUs/>}></Route>
          </Routes>
        </ExercisesProvider>
      </ChakraProvider>
    </Router>
  );
}

export default App;
