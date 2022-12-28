import { Avatar, Badge, Box, Button, Card, CardBody, CardFooter, CardHeader, Center, Divider, Flex, Heading, Highlight, IconButton, Image, ModalOverlay, Skeleton, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { HiOutlineHeart } from 'react-icons/hi'
import AddExToWorkout from './modals/AddToWorkout'

const ExerciseCard = ({ exercise }) => {

  const OverlayOne = () => (
    <ModalOverlay
      bg='blackAlpha.300'
      backdropFilter='blur(10px) hue-rotate(20deg)'
    />
  )

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [overlay, setOverlay] = React.useState(<OverlayOne />)

  return (
    <div>
      <Card color='textDistact' boxShadow='2xl' border='1px' borderColor='gray.200' maxW='400px' >
        <CardHeader display='flex' justifyContent='space-between' alignItems='flex-start'>

          <Flex alignItems='flex-start' justifyContent='space-between' w='100%'>
            <Heading size='md' fontWeight={800}>{exercise.name}</Heading>
            <Box m='10px' cursor='pointer'><HiOutlineHeart size={30} color='white' /></Box>
          </Flex>

        </CardHeader>
        <CardBody>

        </CardBody>
        {exercise.gifUrl &&
          <Image src={exercise.gifUrl} minW='100px' objectFit='cover' />
        }

        <CardFooter display='flex' justifyContent='space-evenly' alignItems='center' flexDirection='column'>
          <Flex w='100%' justifyContent='space-around' alignItems='center'>
            <Center border='1px' color='textContrast' borderRadius='10px' py='5px' px='15px'>
              {exercise.equipment}
            </Center>

            <Divider orientation='vertical' h='25px' />

            <Center border='1px' color='textContrast' borderRadius='10px' py='5px' px='15px'>
              {exercise.target}
            </Center>
          </Flex>
          <Divider orientation='horizontal' my='20px' />
          <Button bg='none' border='1px' color='textContrast' w='100%'
            onClick={() => {
              setOverlay(<OverlayOne />)
              onOpen()
            }}>Add to my workout</Button>
        </CardFooter>
      </Card>
      
      <AddExToWorkout onClose={onClose} isOpen={isOpen} overlay={overlay} />
    </div>
  )
}

export default ExerciseCard