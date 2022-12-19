import { Box, Button, Divider, Highlight, Image, Show, Text } from '@chakra-ui/react'
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
        <Box borderBottom='2px'
            borderColor='textDistact'
            w='100%'
            display='flex'
            alignItems='center'
            justifyContent='space-between'
            flexWrap='wrap'
            px='5px'
            py='10px'
        >
            <Box display='flex' justifyContent='space-between' alignItems='center'>
                <Button variant='outline' onClick={handleAddEx}>Add</Button>

                <Text mx='30px' fontSize='1em'>{exercise.name}</Text>

            </Box>
            <Box display='flex' justifyContent='space-between' alignItems='center' w='100%' maxW='350px'>
                <Highlight
                    query={exercise.bodyPart}
                    styles={{ px: '4', py: '1', bg: 'lightBlue', borderRadius: '50px' }}
                >
                    {exercise.bodyPart}
                </Highlight>
                <Divider orientation='vertical' h='25px' />
                <Highlight
                    query={exercise.target}
                    styles={{ px: '4', py: '1', bg: 'lightBlue', borderRadius: '50px' }}
                >
                    {exercise.target}
                </Highlight>
                <Divider orientation='vertical' h='25px' />
                <Image src={exercise.gifUrl} h='70px' />


            </Box>



        </Box>
    )
}

export default AddExCard