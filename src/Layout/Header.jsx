import { Box, Button, Container, HStack, Show, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import DrawerHome from '../Components/DrawerHome'
import Drawer from '../Components/DrawerHome'

const Header = () => {

  return (
    <Container
      w="100%"
      maxWidth="100%"
      h="100px"
      display="flex"
      alignItems="center"
      justifyContent='space-between'
      bg="layoutBg">

      <Text
        fontFamily="'Inter', sans-serif"
        fontSize='2em'
        color='textDistact'
        fontWeight='800'
      >
        <Link to="/">Gym Nation</Link></Text>

      <Show breakpoint='(min-width: 500px)'>

        <HStack spacing='1em' color='textContrast'>
          <Box >
            <Link to="/workoutPlan">My Workout</Link>
          </Box>
           <Box>
            <Link to="/exercisesExamples">Exercises</Link>
          </Box>
          <Box>
            <Link to="/gymPage">The Gym</Link>
          </Box>
          <Box>
            <Link to="/aboutUs">About us</Link>
          </Box>
         
        </HStack>
      </Show>

      <Show breakpoint='(max-width: 500px)'>
        <DrawerHome/>
      </Show>
    </Container>
  )
}

export default Header