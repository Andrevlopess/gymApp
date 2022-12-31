import { Badge, Box, Button, Divider, Flex, Highlight, Image, Show, Text } from '@chakra-ui/react'
import React from 'react'
import { useContext } from 'react'
import { NewWorkoutContext } from '../../Contexts/NewWorkoutContext'

const AddExCard = ({ exercise, close }) => {

    const { addExTable } = useContext(NewWorkoutContext)

    function handleAddEx() {
        close()
        addExTable(exercise)
    }

    return (
        <Flex borderBottomWidth='4px'
            borderColor='textDistact'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            flexWrap='wrap'
            px='5px'
            py='10px'
        >
            <Flex justifyContent='space-between' alignItems='center' mb='20px' bgColor='homeDistactBg' p='10px' borderRadius='5px'>

                <Text mx='30px' fontSize='1em' color='textDistact' fontWeight={800}>
                    {exercise.name[0].toUpperCase() + exercise.name.substring(1)}
                </Text>

                <Badge variant='solid' colorScheme='teal'>
                    {exercise.target}
                </Badge>
            </Flex>

            <Image src={exercise.gifUrl} h='200px' />

            <Button variant='outline' onClick={handleAddEx} w='100%' my='10px'>Add</Button>



        </Flex>
    )
}

export default AddExCard