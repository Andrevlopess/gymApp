import { Box, Button, Container, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { useContext } from 'react'
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
        >
            <Box
                display='flex'
                justifyContent='space-between'
                alignItems='center'
                flexWrap='wrap'
                my='40px'
                mx='10px'>
                <Heading as='h1' size='3xl' color='lightBlue' display='flex' alignItems='flex-end'>
                    My Workouts
                    <Text fontSize='.6em' color='grey' ml='10px'>{`(${personalWorkout.length})`}</Text>
                </Heading>

                <Box display='flex' flexWrap='wrap' alignItems='center' my='40px'>
                    <Button colorScheme='teal' variant='outline' borderRadius='40px' mx='5px'>
                        <Link to="/exercisesExamples">More exercises</Link>
                    </Button>
                    <Button colorScheme='teal' variant='outline' borderRadius='40px'>
                    <Link to="/newWorkout">New workout</Link>
                    </Button>
                </Box>
            </Box>

            <WorkoutList />

        </Container>
    )
}

export default WorkoutPlan