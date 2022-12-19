import { Container, Text } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Container w='100%' bgColor='layoutBg' maxW='none' h='20vh' display='grid' placeItems='center'>
        <Text color='textDistact' fontWeight='bold'>Footer content</Text>
    </Container>
  )
}

export default Footer