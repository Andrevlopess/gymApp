import React from 'react'
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import dumbell from '../Icons/dumbell.png'
import gym from '../Icons/gym.png'
import { Box } from '@chakra-ui/react';
import HomeExercisesCard from './HomeExercisesCard';

const HomeExSlider = ({ HomeEx }) => {

    return (
    
            <Box w='86vw'>
                <Splide
                    options={{
                        focus: 'center',
                        perPage: 2,
                        gap: '1em',
                        omitEnd: true,
                        breakpoints: {
                            1335: {
                                perPage: 1,
                            },
                        }
                    }}
                    tag='section'
                    aria-label="My Favorite Images"
                >
                    {HomeEx &&
                        HomeEx.map((ex) => {
                            return (
                                <SplideSlide>

                                    <HomeExercisesCard ex={ex} />
                                </SplideSlide>
                            )
                        })
                    }
                </Splide>
            </Box>
    )
}

export default HomeExSlider