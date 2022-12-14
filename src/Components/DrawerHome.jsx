import React from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  VStack,
  Box,
  Text,
  Heading,
  Spacer,
} from '@chakra-ui/react'
import { useRef } from 'react'
import { FiMenu } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const DrawerHome = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()
  const navigate = useNavigate()

  return (
    <div>
      <Button ref={btnRef} onClick={onOpen} bg="none">
        <FiMenu size='1.6em' color='#00ADB5' />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bgColor='layoutBg' color='textContrast'>
          <DrawerCloseButton />
          <DrawerHeader color='textDistact' py='20px'>
            <Heading size='xl' fontWeight={800} color='textDistact' mb='25px'>Gym Nation</Heading>
          </DrawerHeader>


          <DrawerBody>
            <VStack
              spacing='2em'
              display='flex'
              justifyContent='flex-start'
              align='flex-start'
              mt='30px'
              fontSize='lg'>
              <Box onClick={() => {
                onClose()
                navigate('./workoutPlan')
              }}
                bgColor='homeDistactBg' p='15px' borderRadius='5px' w='100%'>
                <Link to="/workoutPlan">My workout</Link>
              </Box>
              <Box onClick={() => {
                onClose()
                navigate('./exercisesExamples')
              }}
                bgColor='homeDistactBg' p='15px' borderRadius='5px' w='100%'>
                <Link to="/exercisesExamples">Exercises</Link>
              </Box>
              <Box onClick={() => {
                onClose()
                navigate('./likedExercises')
              }}
                bgColor='homeDistactBg' p='15px' borderRadius='5px' w='100%'>
                <Link to="/likedExercises">Liked Exercises</Link>
              </Box>

            </VStack>

          </DrawerBody>
          <DrawerFooter display='flex' justifyContent='flex-start'>
            <Box onClick={() => {
              onClose()
              navigate('./contactCreator')
            }} my='18px' bgColor='homeDistactBg' p='15px' borderRadius='5px' w='100%'>
              <Link to="/contactCreator">Contact creator</Link>
            </Box>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div >
  )
}

export default DrawerHome