import { Avatar, Badge, Box, Button, Card, CardBody, CardFooter, CardHeader, Center, Divider, Flex, Heading, Highlight, IconButton, Image, ModalOverlay, Skeleton, Text, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useContext } from 'react'
import { HiHeart, HiOutlineHeart } from 'react-icons/hi'
import { ExercisesContext } from '../../Contexts/ExercicesContext'
import AddExToWorkout from '../modals/AddToWorkout'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const ExerciseCard = ({ exercise }) => {

  const { addLikedEx } = useContext(ExercisesContext)
  const navigate = useNavigate()

  // * modal functions
  const OverlayOne = () => (
    <ModalOverlay
      bg='blackAlpha.300'
      backdropFilter='blur(10px) hue-rotate(20deg)'
    />
  )

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [overlay, setOverlay] = React.useState(<OverlayOne />)
  
  // * checkLiked function
  
  const [checkLike, setCheckLike] = useState()

  const checkLiked = (ex) => {
    const likedExercises = JSON.parse(localStorage.getItem('likedEx') || '[]')
    const checked = likedExercises.filter((exercise) => exercise.id === ex.id)

    if (checked.length) {
      setCheckLike(true)
    } else {
      setCheckLike(false)
    }
  }

  useEffect(() => { checkLiked(exercise) }, [])






  return (
    <div>
      <Card color='textDistact' maxW='400px' bgColor='layoutBg' boxShadow='dark-lg'>
        <CardHeader>

          {exercise.gifUrl &&
            <Image src={exercise.gifUrl} minW='100px' objectFit='cover' borderRadius='4px'/>
          }

        </CardHeader>
        <CardBody>
          <Flex alignItems='Center' justifyContent='space-between' w='100%'>

            <Heading size='md' fontWeight={800}>
              {exercise.name[0].toUpperCase() + exercise.name.substring(1)}
            </Heading>

            <Box m='10px' cursor='pointer'
              onClick={() => {
                addLikedEx(exercise)
                checkLiked(exercise)
              }}>
              {checkLike ? <HiHeart size={30} color='#E53E3E' />
                :          <HiOutlineHeart size={30} color='#EEEEEE' />}
            </Box>
          </Flex>
        </CardBody>


        <CardFooter display='flex' justifyContent='space-evenly' alignItems='center' flexDirection='column'>
          <Flex w='100%' justifyContent='space-around' alignItems='center'>
            <Center border='1px' color='textContrast' borderRadius='10px' py='5px' px='15px'>
            {exercise.equipment[0].toUpperCase() + exercise.equipment.substring(1)}
            </Center>

            <Divider orientation='vertical' h='25px' />

            <Center border='1px' color='textContrast' borderRadius='10px' py='5px' px='15px'>
            {exercise.target[0].toUpperCase() + exercise.target.substring(1)}
            </Center>
          </Flex>
          <Divider orientation='horizontal' my='20px' />
          <Button bgColor='footerBg' color='textContrast' w='100%'
            onClick={() => {
              setOverlay(<OverlayOne />)
              onOpen()

            }}>Add to my workout</Button>
        </CardFooter>
      </Card>

      <AddExToWorkout onClose={onClose} isOpen={isOpen} overlay={overlay} ex={exercise} />
    </div>
  )
}

export default ExerciseCard