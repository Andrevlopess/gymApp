import React from 'react'
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Box } from '@chakra-ui/react';
import HomeExercisesCard from './Cards/HomeExercisesCard';

const HomeExSlider = ({ HomeEx }) => {

    return (
    
            <Box w='86vw'>
                <Splide
                    options={{
                        focus: 'center',
                        perPage: 1,
                        padding: '5rem',
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
                                <SplideSlide key={ex.id}>
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