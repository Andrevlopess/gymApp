import { Container, Text } from '@chakra-ui/react'
import React from 'react'

const WorkoutPlan = () => {
  return (
    <Container
        w='100%'
        bg="compBg"
        maxW='100%'
        h='100vh'
        p='1em'
    >
        <Text
         fontSize='3em'
         color='lightblue'
         fontWeight='800'
        >Meu treino</Text>
    </Container>
  )
}

export default WorkoutPlan