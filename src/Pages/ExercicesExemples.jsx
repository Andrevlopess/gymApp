import { Box, Button, Container, Heading, IconButton, Input, InputGroup, InputRightElement, Show, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { HiOutlineSearch } from 'react-icons/hi'
import ExercisesFilter from '../Components/ExercisesFilter'

const ExercicesExemples = () => {
    return (
        <Container
            w='100%'
            bg="compBg"
            maxW='100%'
            p='1em'>
            <Box display='flex' justifyContent='space-between' alignItems='flex-end' flexWrap="wrap" mx='10px'>
                <Heading as='h1' size='3xl' color='lightBlue' display='flex' alignItems='flex-end'>
                    All exercises
                </Heading>
                <Box my='10px'>
                    <InputGroup>
                        <Input
                            variant='outlined'
                            placeholder='Serch for exercises'
                            w="100%"
                            bgColor='textContrast' />
                        <InputRightElement children={
                            <IconButton aria-label='Search database' icon={<HiOutlineSearch />} />} />
                    </InputGroup>
                </Box>
            </Box>

            <Box display='flex' alignItems='flex-start'>
                <Show breakpoint='(min-width: 500px)'>
                    <ExercisesFilter />
                </Show>
                <Box w='100%' m='30px'>
                    <SimpleGrid minChildWidth='120px' spacing='10px'>
                        <Box bg='tomato' height='180px'></Box>
                        <Box bg='tomato' height='180px'></Box>
                        <Box bg='tomato' height='180px'></Box>
                        <Box bg='tomato' height='180px'></Box>
                        <Box bg='tomato' height='180px'></Box>
                        <Box bg='tomato' height='180px'></Box>
                    </SimpleGrid>
                </Box>
            </Box>




        </Container>
    )
}

export default ExercicesExemples