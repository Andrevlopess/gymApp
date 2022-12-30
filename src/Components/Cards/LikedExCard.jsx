import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Image, Stat, Text, Button, Stack, Heading, Flex, Box, Spacer, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import { HiHeart, HiOutlineHeart } from 'react-icons/hi'
import { useContext } from 'react'
import { ExercisesContext } from '../../Contexts/ExercicesContext'
import AddExToWorkout from '../modals/AddToWorkout'

const LikedExCard = ({ exercise, upPage }) => {

    const { removeLikedEx } = useContext(ExercisesContext)

    const OverlayOne = () => (
        <ModalOverlay
            bg='blackAlpha.300'
            backdropFilter='blur(10px) hue-rotate(20deg)'
        />
    )

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [overlay, setOverlay] = React.useState(<OverlayOne />)

    return (
        <>

            <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                color='textContrast'
                border='1px'
            >
                <Flex >
                    <Image src={exercise.gifUrl} maxW={{ base: '100%', sm: '200px' }} objectFit='cover' />
                </Flex>


                <Stack w='100%'>
                    <CardBody>
                        <Flex alignItems='flex-start' w='100%' justifyContent='space-between'>
                            <Heading size='md' color='textDistact' fontWeight={700}>
                                {exercise.name[0].toUpperCase() + exercise.name.substring(1)}</Heading>
                            <Spacer />
                            <Box m='10px' cursor='pointer'
                                onClick={() => {
                                    removeLikedEx(exercise)
                                    upPage(exercise)

                                }}>
                                <HiHeart size={30} color='#E53E3E' />
                            </Box>
                        </Flex>

                        <Box mt='10px' p='10px' borderRadius='5px' bgColor='homeDistactBg'>
                            <Text color='grey' display='flex' my='10px'>
                                Muscle target:
                                <Text color='textContrast' ml='6px'>{`${exercise.target[0].toUpperCase() + exercise.target.substring(1)}`}</Text>
                            </Text>
                            <Text color='grey' display='flex' my='10px'>
                                Body Part:
                                <Text color='textContrast' ml='6px'>{`${exercise.bodyPart[0].toUpperCase() + exercise.bodyPart.substring(1)}`}</Text>
                            </Text>
                            <Text color='grey' display='flex' my='10px'>
                                Equipment:
                                <Text color='textContrast' ml='6px'>{`${exercise.equipment[0].toUpperCase() + exercise.equipment.substring(1)}`}</Text>
                            </Text>
                        </Box>

                    </CardBody>

                    <CardFooter>
                        <Button bgColor='footerBg' color='textContrast' w='100%'
                            onClick={() => {
                                setOverlay(<OverlayOne />)
                                onOpen()

                            }}>Add to my workout</Button>
                    </CardFooter>
                </Stack>
            </Card>
            <AddExToWorkout onClose={onClose} isOpen={isOpen} overlay={overlay} ex={exercise} />
        </>
    )
}

export default LikedExCard