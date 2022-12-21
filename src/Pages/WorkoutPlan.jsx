import { Box, Button, Container, Flex, Heading, Show, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import { useContext } from 'react'
import { toast } from 'react-hot-toast'
import { Link } from 'react-router-dom'
import WorkoutList from '../Components/WorkoutList'
import { ExercisesContext } from '../Contexts/ExercicesContext'

const WorkoutPlan = () => {

    const { personalWorkout } = useContext(ExercisesContext)



    return (
        <Container
            w='100%'
            bg="compBg"
            maxW='100%'
            p='1em'
            minH='80vh'
        >
            <Flex
                justifyContent='center'
                alignItems='center'
                flexWrap='wrap'
                mx='10px'>

                <Heading as='h1' size='3xl' fontWeight='800' color='textDistact' display='flex' alignItems='flex-end' mt='20px'>
                    My Workouts
                    <Text fontSize='.6em' color='grey' ml='10px'>
                        {personalWorkout && `(${personalWorkout.length})`}
                    </Text>
                </Heading>
                <Show breakpoint='(min-width: 500px)'>
                   <Spacer/>
                </Show>
                <Box display='flex' flexWrap='wrap' alignItems='center' my='40px'>
                    <Button colorScheme='teal' variant='outline' borderRadius='40px' mr='5px'>
                        <Link to="/exercisesExamples">More exercises</Link>
                    </Button>
                    <Button colorScheme='teal' variant='outline' borderRadius='40px'>
                        <Link to="/newWorkout">New workout</Link>
                    </Button>
                </Box>
            </Flex>

            {personalWorkout ?

                <WorkoutList personalWorkout={personalWorkout} />
                :
                <Box w='100%'>
                    <Heading as='h1' size='2xl' color='textDistact' my='100px' textAlign='center'>You still dont have workouts</Heading>
                </Box>
            }


        </Container>
    )
}

export default WorkoutPlan