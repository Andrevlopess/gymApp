import React from 'react'
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import dumbell from '../Icons/dumbell.png'
import gym from '../Icons/gym.png'
import { Box, Container } from '@chakra-ui/react';
import HomeExSlider from '../Components/HomeExSlider';

function GymPage() {

  return (
  <Container bgColor='layoutBg' maxW='none' h='100vh' w='100vw'>
    <HomeExSlider/>
  </Container>
    
  )
}

export default GymPage