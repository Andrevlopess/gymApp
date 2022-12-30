import { Box, Button, Center, Container, Flex, Heading, Link, Show, SimpleGrid, Spacer, Text, Wrap, WrapItem } from '@chakra-ui/react'
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
      <Flex py='30px' alignItems='center' flexWrap='wrap' justifyContent='center' w='100%'>
        <Heading as='h1' fontSize='4em' color='textDistact' display='flex' alignItems='flex-end' my='10px'>
          Liked Exercises
          <Text fontSize='40%' color='grey' ml='10px'>
            {`(${likedList.length})`}
          </Text>
        </Heading>
        <Show breakpoint='(min-width: 500px)'>
          <Spacer />
        </Show>
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
          <Flex w='100%' h='60vh' flexDirection='column' justifyContent='center' alignItems='center'>
            <Heading fontSize='3em' color='textContrast' display='flex' alignItems='center'>
              Like your exercises right now!
            </Heading>
            <Button onClick={() => navigate('/exercisesExamples')}
              color='textContrast'
              px='20px'
              my='20px'
              bgGradient='linear(to-r, teal.500, green.500)'
              _hover={'none'}
              _active={'none'}

            >
              See all exercises</Button>
          </Flex>
        }

      </Flex>
    </Container>
  )
}

export default LikedExercises