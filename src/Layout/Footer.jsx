import { Container, Divider, Flex, Image, Link, Text } from '@chakra-ui/react'
import React from 'react'
import instagram from '../Icons/instagram.png'
import github from '../Icons/github.png'

const Footer = () => {
  return (
    <Container w='100%' bgColor='footerBg' maxW='none' display='grid' placeItems='center'>
      <Flex flexDirection='column' my='50px' justifyContent='center' alignItems='center'>
        <Text color='textDistact' fontWeight='bold' fontSize='4xl' >
          Gym Nation
        </Text>
        <Divider />
        <Flex my='15px' alignItems='center'>
        <Image src={instagram} boxSize='30px'/>
          <Link color='pink.500' fontWeight='bold' mx='10px'
          href='https://www.instagram.com/andrevlopesz/'>@andrevlopesz</Link>
        </Flex>
        <Flex my='10px' alignItems='center'>
          <Image src={github} boxSize='30px'/>
          <Link color='black' fontWeight='bold' mx='10px'
          href='https://github.com/Andrevlopess'>@Andrevlopess</Link>
        </Flex>

      </Flex>
    </Container>
  )
}

export default Footer