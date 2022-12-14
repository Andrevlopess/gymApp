import { Box, Container, Text } from '@chakra-ui/react'
import React from 'react'
import styled from 'styled-components'
import { OriginTheme } from '../Themes/OriginTheme'

const Header = () => {
  return (
    <Container
      w="100%"
      borderColor="black"
      border="1px"
      maxWidth="100%"
      h="100px"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      bg="layoutBg">
      <Text
       fontFamily="'Inter', sans-serif" 
       fontSize='50px'
       color='textDistact'
       fontWeight='800'
       >Gym Nation</Text>

      <Box 
      display='flex'
      alignItems="center"
      justifyContent="space-around"
      >

      </Box>
    </Container>
  )
}

export default Header