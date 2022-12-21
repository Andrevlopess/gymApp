import { Container, Flex } from '@chakra-ui/react'
import React from 'react'

const Home = () => {
  return (
    <Container maxW='none' w='100%' bgColor='compBg' minH='80vh'>
      <Flex justifyContent='center' alignItems='center'>
        home content
      </Flex>

    </Container>
  )
}

export default Home