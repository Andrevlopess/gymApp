import { Container, Flex, Heading, HStack, Image, Link, Show, Spacer, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import instagram from '../Icons/instagram.png'
import twitter from '../Icons/twitter.png'
import github from '../Icons/github.png'
import pic from '../Icons/contactpic.png'

const ContactCreator = () => {
  return (
    <Container maxW='none' w='100%' bgColor='layoutBg' pt='50px' minH='80vh'>
      <Flex justifyContent='space-around' flexWrap='wrap' alignItems='center' >
        <Flex flexDirection='column' bgColor='homeDistactBg' borderRadius='20px' p='50px'>
          <Heading size='4xl' fontWeight={800} color='textDistact' mb='25px'>Made by
            <br />
            <Link href='https://github.com/Andrevlopess' color='textContrast' fontWeight={800} fontSize='30px' >@Andrevlopess</Link>
          </Heading>
          <Spacer/>
          <Flex my='40px' flexWrap='wrap'>
            <Link href='https://www.instagram.com/andrevlopesz/'>
              <Image src={instagram} boxSize='70px' m='6px' />
            </Link>
            <Link href='https://twitter.com/andrevlopess'>
              <Image src={twitter} boxSize='70px' m='6px' />
            </Link>
            <Link href='https://github.com/Andrevlopess'>
              <Image src={github} boxSize='70px' m='6px' />
            </Link>
          </Flex>
        </Flex>

        <Show breakpoint='(min-width: 500px)'>
          <Image src={pic} boxSize='40vw' minW='300px' minH='300px'  my='40px'/>
        </Show>
      </Flex>
    </Container >
  )
}

export default ContactCreator