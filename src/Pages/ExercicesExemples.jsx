import { Box, Button, Container, Heading, IconButton, Input, InputGroup, InputRightElement, Show, SimpleGrid, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useContext } from 'react'
import { HiOutlineSearch } from 'react-icons/hi'
import ExerciseCard from '../Components/ExerciseCard'
import ExercisesFilter from '../Components/ExercisesFilter'
import Pagination from '../Components/Pagination'
import { ExercisesContext } from '../Contexts/ExercicesContext'

const ExercicesExemples = () => {

    const { allExercises } = useContext(ExercisesContext)

    const [currentPage, setCurrentPage] = useState(1)
    const [exPerPage, setExPerPage] = useState(6)
    const [searchedEx, setSearchedEx] = useState('')

    const lastExIndex = currentPage * exPerPage
    const firstExIndex = lastExIndex - exPerPage

    const currentEx = allExercises.slice(firstExIndex, lastExIndex)



    return (
        <Container
            w='100%'
            bg="compBg"
            maxW='100%'
            p='1em'>
            <Box display='flex' justifyContent='space-between' alignItems='flex-end' flexWrap="wrap" mx='10px'>
                <Heading as='h1' size='4xl' color='lightBlue' display='flex' alignItems='flex-end' ml='30px'>
                    All exercises
                    <Text fontSize='40%' color='grey' ml='10px'>{`(${allExercises.length})`}</Text>
                </Heading>
                <Box my='10px'>
                    <InputGroup>
                        <Input
                            variant='outlined'
                            placeholder='Serch for exercises'
                            w="100%"
                            bgColor='textContrast'
                            value={searchedEx}
                            onChange={(e)=> setSearchedEx(e.target.value)} />
                        <InputRightElement children={
                            <IconButton aria-label='Search database' icon={<HiOutlineSearch />} />} />
                    </InputGroup>
                </Box>
            </Box>

            <Box display='flex' alignItems='flex-start' justifyContent='center'>
                <Show breakpoint='(min-width: 500px)'>
                    <ExercisesFilter />
                </Show>
                <Box w='100%'
                    m='30px'
                    mt='50px'>
                    <Box display='flex' justifyContent='center' w='100%'>
                        <Pagination
                            totalEx={allExercises.length}
                            exPerPage={exPerPage}
                            setCurrentPage={setCurrentPage}
                            currPage={currentPage} />
                    </Box>


                    <SimpleGrid minChildWidth='300px' spacing='10px'>
                        {
                            currentEx.map((Ex) => {
                                return (
                                    <ExerciseCard exercise={Ex} />
                                )
                            })
                        }

                    </SimpleGrid>

                </Box>
            </Box>




        </Container>
    )
}

export default ExercicesExemples