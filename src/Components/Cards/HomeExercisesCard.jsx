import { Flex, Heading, Image, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import Atropos from 'atropos/react';
import 'atropos/css'

const HomeExercisesCard = ({ ex }) => {


    return (
        <Atropos>
            <Flex
                bgColor='homeDistactBg'
                borderRadius='10px'
                color='textContrast'
                border='1px'
                borderColor='textContrast'
                justifyContent='space-between'
                flexWrap='wrap'
                alignItems='center'
            >
                <Flex flexDirection='column' alignItems='flex-start' p='20px' justifyContent='flex-start'>
                    <Heading size='md' fontWeight={800} color='textContrast' mb='25px'>{ex.name}</Heading>
                    <Text mx='5px'>{ex.target}</Text>
                    <Text mx='5px' color='grey'>{ex.bodyPart}</Text>
                </Flex>

                <Spacer />
                <Image src={ex.gifUrl}
                    objectFit='cover'
                    borderRadius='10px'
                />
            </Flex>
        </Atropos>


    )
}

export default HomeExercisesCard