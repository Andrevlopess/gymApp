import { Button, Container, Flex, Wrap } from '@chakra-ui/react'
import React from 'react'
import { useContext } from 'react'
import ExerciseCard from '../Components/Cards/ExerciseCard'
import { ExercisesContext } from '../Contexts/ExercicesContext'

const LikedExercises = () => {

  const { getLikedEx } = useContext(ExercisesContext)

  const LikedList = getLikedEx()


  return (
    <Container maxW='none' w='100%' bgColor='layoutBg'>
      <Wrap>
        {
          LikedList.map((exercise) => {
            return (
              <ExerciseCard exercise={exercise} liked={true}/>
            )
          })
        }

      </Wrap>
    </Container>
  )
}

export default LikedExercises