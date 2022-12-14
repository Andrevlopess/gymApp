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
} from '@chakra-ui/react'
import { useRef } from 'react'
import { FiMenu } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const DrawerHome = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

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
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Gym nation</DrawerHeader>


          <DrawerBody>
            <VStack
              spacing='1em'
              display='flex'
              justifyContent='flex-start'
              align='flex-start'
              mt='30px'
              fontSize='lg'>
              <Box >
                <Link to="/workoutPlan">My workout</Link>
              </Box>
              <Box>
                <Link to="/gymPage">The gym</Link>
              </Box>
              <Box>
                <Link to="/aboutUs">About us</Link>
              </Box>
            </VStack>

          </DrawerBody>


        </DrawerContent>
      </Drawer>
    </div >
  )
}

export default DrawerHome