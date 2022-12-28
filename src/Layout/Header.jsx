import { Box, Button, Container, HStack, Image, Show, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import DrawerHome from '../Components/DrawerHome'
import Drawer from '../Components/DrawerHome'
import Logo from '../Icons/logo.png'
const Header = () => {

  return (
    <Container
      w="100%"
      maxWidth="100%"
      h="15vh"
      display="flex"
      alignItems="center"
      justifyContent='space-between'
      bg="layoutBg"
      px='30px'>


        <Link to="/"><Image src={Logo} boxSize='4em'/></Link>

      <Show breakpoint='(min-width: 500px)'>

        <HStack spacing='1em' color='textContrast' fontWeight={800}>
          <Box >
            <Link to="/workoutPlan">My Workout</Link>
          </Box>
           <Box>
            <Link to="/exercisesExamples">Exercises</Link>
          </Box>
           <Box>
            <Link to="/likedExercises">Liked exercises</Link>
          </Box>
           <Box>
            <Link to="/contactCreator">Contact creator</Link>
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