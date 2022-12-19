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
import ExercicesExemples from './Pages/ExercicesExemples';
import FilterProvider from './Contexts/FilterContext';
import NewWorkout from './Pages/NewWorkout';
import NewWorkoutProvider, { NewWorkoutContext } from './Contexts/NewWorkoutContext';


function App() {

  return (
    <Router>
      <ChakraProvider theme={originTheme}>
        <ExercisesProvider>
          <FilterProvider>
            <NewWorkoutProvider>
              <Header />
              <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/workoutplan' element={<WorkoutPlan />}></Route>
                <Route path='/gymPage' element={<GymPage />}></Route>
                <Route path='/newWorkout' element={<NewWorkout />}></Route>
                <Route path='/aboutUs' element={<AboutUs />}></Route>
                <Route path='/exercisesExamples' element={<ExercicesExemples />}></Route>
              </Routes>
            </NewWorkoutProvider>
          </FilterProvider>
        </ExercisesProvider>
      </ChakraProvider>
    </Router>
  );
}

export default App;
