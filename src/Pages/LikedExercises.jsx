import { Button, Container, Flex, SimpleGrid, Wrap } from '@chakra-ui/react'
import React from 'react'
import { useContext } from 'react'
import ExerciseCard from '../Components/Cards/ExerciseCard'
import LikedExCard from '../Components/Cards/LikedExCard'
import { ExercisesContext } from '../Contexts/ExercicesContext'

const LikedExercises = () => {

  const { getLikedEx } = useContext(ExercisesContext)

  const LikedList = getLikedEx()


  return (
    <Container maxW='none' w='100%' bgColor='layoutBg'>
      <SimpleGrid>
        {
          LikedList.map((exercise) => {
            return (
              <LikedExCard/>
            )
          })
        }

      </SimpleGrid>
    </Container>
  )
}

export default LikedExercises