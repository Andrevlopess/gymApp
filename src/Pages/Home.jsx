import { Box, Button, Container, Flex, Heading, Highlight, Image, Show, Text } from '@chakra-ui/react'
import React from 'react'
import { useContext } from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { ExercisesContext } from '../Contexts/ExercicesContext'
import dumbell from '../Icons/dumbell.png'
import gym from '../Icons/gym.png'
import { useNavigate } from 'react-router-dom'
import HomeExercisesCard from '../Components/HomeExercisesCard'
import HomeExSlider from '../Components/HomeExSlider'

const Home = () => {

  const navigate = useNavigate()

  const { personalWorkout, setDefaultIndex, homeEx } = useContext(ExercisesContext)

  return (
    <Container maxW='none' w='100%' bgColor='layoutBg' minH='80vh' pt='50px'>
      <Flex justifyContent='center' alignItems='center' h='40vh' flexDirection='column' pt='10vh' position='relative'
        overflow='hidden'>
        <Heading size='4xl' fontWeight={800} color='textDistact' mb='25px'>Create your own workout!</Heading>
        <Image src={dumbell} position='absolute' right='-10' h='200px' />
        <Image src={gym} position='absolute' left='0' h='200px' top='0px' />
        <Button py='20px' px='40px' mt='35px' bgColor='textDistact' color='textContrast'
          onClick={() => navigate('/workoutPlan')}>
          <Text mr='10px'>Get started</Text>
          <HiArrowNarrowRight size={25} /></Button>
      </Flex>
      <Flex justifyContent='center' px='5%' my='10vh' flexDirection='column'>

        <Heading size='3xl' fontWeight={800} color='textDistact' mb='25px'>
          More than <Highlight query='1300' styles={{ py: '1', fontWeight: '800', color: '#EEEEEE' }} >
            1300
          </Highlight> exercises</Heading>

        <Flex w='100%'>
          {homeEx &&
            <HomeExSlider HomeEx={homeEx}/>
          }
        </Flex>



      </Flex>
      <Flex
        justifyContent='space-around'
        alignItems='center'
        h='40vh'
        flexWrap='wrap'
        bgColor='homeDistactBg'
        borderRadius='20px'
        mt='100px'
      >
        <Flex flexDirection='column' >
          <Heading size='3xl' fontWeight={800} color='textContrast'>My workouts</Heading>
          <Text fontWeight={800} color='grey' mt='20px'>Create your own workouts and save them!</Text>
        </Flex>
        <Flex>
          {personalWorkout.length > 0 ?
            personalWorkout.map((workout) => {
              return (
                <Flex key={workout.id}
                  onClick={() => {
                    navigate('/workoutPlan')
                    setDefaultIndex(workout.id - 1)
                  }}
                  flexDirection='column'
                  border='1px'
                  fontWeight={800}
                  color='textContrast'
                  py='10px'
                  px='30px'
                  borderRadius='10px'
                  mx='10px'
                  cursor='pointer'>
                  {workout.title}
                  <Text
                    fontWeight={800}
                    color='grey'
                    as='i'>
                    {workout.description ? `"${workout.description}"` : null}
                  </Text>
                </Flex>
              )
            })
            :
            <Flex onClick={() => {
              navigate('/newWorkout')
            }}
              cursor='pointer'
              border='1px'
              py='10px'
              px='30px'
              borderRadius='10px'
              borderColor='textContrast'>
              <Text fontWeight={800}
                color='textContrast'>Create a workout</Text>
            </Flex>

          }
        </Flex>


      </Flex>

    </Container>
  )
}

export default Home