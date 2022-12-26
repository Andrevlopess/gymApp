import { Box, Button, Container, Flex, Heading, Highlight, Image, Show, SimpleGrid, Text, Wrap, WrapItem } from '@chakra-ui/react'
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
    <Container maxW='none' w='100%' bgColor='layoutBg' py='50px'>
      <Flex justifyContent='center' alignItems='center' h='60vh' flexDirection='column' position='relative'
        overflow='hidden'>
        <Heading size='4xl' fontWeight={800} color='textDistact' mb='25px'
        >Create your own workout!</Heading>
        <Image src={dumbell} position='absolute' right='-10' h='18vw' />
        <Button py='20px' px='40px' mt='35px' bgColor='textDistact' color='textContrast'
          boxShadow='dark-lg'
          onClick={() => navigate('/workoutPlan')}>
          <Text mr='10px'>Get started</Text>
          <HiArrowNarrowRight size={25} /></Button>
      </Flex>

      <Flex
        justifyContent='center'
        borderRadius='20px'
        px='5%'
        my='10vh'
        flexDirection='column'
        bgColor='homeDistactBg'
        py='30px'>

        <Heading size='3xl' fontWeight={800} color='textDistact' mb='25px' p='20px'>
          More than <Highlight query='1300' styles={{ py: '1', fontWeight: '800', color: '#EEEEEE' }} >
            1300
          </Highlight> exercises!</Heading>

        <Flex w='100%'>
          {homeEx &&
            <HomeExSlider HomeEx={homeEx} />
          }
        </Flex>



      </Flex>
      <Flex
        justifyContent='space-around'
        alignItems='center'
        bgColor='homeDistactBg'
        borderRadius='20px'
        flexWrap='wrap'
        mt='100px'
        p='30px'
      >
        <Flex flexDirection='column' flexWrap='wrap'>
          <Heading size='3xl' fontWeight={800} color='textContrast'>My workouts</Heading>
          <Text fontWeight={800} color='grey' mt='20px'>Create your own workouts and save them!</Text>
        </Flex>
        <Box mt='30px'>
          <Wrap columns={2} spacing={5} my='20px'>
            {personalWorkout ?
              personalWorkout.map((workout) => {
                return (
                  <WrapItem key={workout.id}>
                    <Flex
                      onClick={() => {
                        navigate('/workoutPlan')
                        setDefaultIndex(workout.id)
                      }}
                      flexDirection='column'
                      border='1px'
                      fontWeight={800}
                      w='280px'
                      color='textContrast'
                      py='10px'
                      px='30px'
                      borderRadius='10px'
                      cursor='pointer'>
                      {workout.title}
                      <Text
                        fontWeight={800}
                        color='grey'
                        as='i'>
                        {workout.description ? `"${workout.description}"` : null}
                      </Text>
                    </Flex>
                  </WrapItem>
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
          </Wrap>
        </Box>



      </Flex>

    </Container>
  )
}

export default Home