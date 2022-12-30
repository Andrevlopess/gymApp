import { Box, Button, Center, Container, Flex, Heading, Link, SimpleGrid, Spacer, Text, Wrap, WrapItem } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import LikedExCard from '../Components/Cards/LikedExCard'
import { ExercisesContext } from '../Contexts/ExercicesContext'
import Pagination from '../Components/Pagination'
import { useNavigate } from 'react-router-dom'

const LikedExercises = () => {

  const navigate = useNavigate()

  const [updatePage, setUpdatePage] = useState()
  const { getLikedEx } = useContext(ExercisesContext)

  const [likedList, setLikedList] = useState(getLikedEx())

  useEffect(() => {
    setLikedList(getLikedEx())
  }, [updatePage])

  const [currentPage, setCurrentPage] = useState(1)
  const [exPerPage, setExPerPage] = useState(5)

  const lastExIndex = currentPage * exPerPage
  const firstExIndex = lastExIndex - exPerPage


  const currentEx = likedList.slice(firstExIndex, lastExIndex)




  return (
    <Container maxW='none' w='100%' bgColor='layoutBg'>
      <Flex py='30px' ml='30px' alignItems='center'>
        <Heading as='h1' fontSize='4em' color='textDistact' display='flex' alignItems='flex-end' my='10px'>
          Liked Exercises
          <Text fontSize='40%' color='grey' ml='10px'>
            {`(${likedList.length})`}
          </Text>
        </Heading>
        <Spacer />
        <Pagination
          totalEx={likedList.length}
          exPerPage={exPerPage}
          setCurrentPage={setCurrentPage}
          currPage={currentPage} />
      </Flex>


      <Flex flexWrap='wrap'>
        {currentEx &&
          currentEx.map((exercise) => {
            return (
              <Box flex='1 1 500px' m='10px'>
                <LikedExCard exercise={exercise} key={exercise.id} upPage={setUpdatePage} />
              </Box>
            )
          })
        }
        {!currentEx.length &&
          <Center w='100%' h='60vh'>
            <Heading color='textDistact' display='flex' alignItems='center'>
              Like your exercises right now!
              <Button onClick={() => navigate('/exercisesExamples')}></Button>
             
            </Heading>
          </Center>
        }

      </Flex>
    </Container>
  )
}

export default LikedExercises