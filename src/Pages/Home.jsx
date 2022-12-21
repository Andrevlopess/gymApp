import { Button, Container, Flex } from '@chakra-ui/react'
import React from 'react'
import { useContext } from 'react'
import { ExercisesContext } from '../Contexts/ExercicesContext'

const Home = () => {

  const {salvar} = useContext(ExercisesContext)

  return (
    <Container maxW='none' w='100%' bgColor='compBg' minH='80vh'>
      <Flex justifyContent='center' alignItems='center'>
        home content
        {/* <Button onClick={() => salvar()}>vai logo slk</Button> */}
      </Flex>

    </Container>
  )
}

export default Home