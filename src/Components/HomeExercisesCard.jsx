import { Flex, Heading, Image, Spacer, Text } from '@chakra-ui/react'
import React from 'react'

const HomeExercisesCard = ({ ex }) => {


    return (
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
            <Flex flexDirection='column' alignItems='center' p='20px' justifyContent='flex-start'>
                <Heading size='md' fontWeight={800} color='textContrast' mb='25px'>{ex.name}</Heading>
                    <Text mx='10px'>{ex.target}</Text>
                    <Text mx='10px'>{ex.bodyPart}</Text>
            </Flex>
            <Image src={ex.gifUrl}
                objectFit='cover'
                borderTopRightRadius='10px'
                borderBottomRightRadius='10px'

            />
        </Flex>
    )
}

export default HomeExercisesCard