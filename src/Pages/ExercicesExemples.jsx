import { Box, Button, Container, Flex, Heading, IconButton, Input, InputGroup, InputRightElement, Show, SimpleGrid, Spacer, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useContext } from 'react'
import { HiOutlineSearch } from 'react-icons/hi'
import ExerciseCard from '../Components/ExerciseCard'
import ExercisesFilter from '../Components/ExercisesFilter'
import FilterTag from '../Components/FilterTag'
import Pagination from '../Components/Pagination'
import { ExercisesContext } from '../Contexts/ExercicesContext'
import { FilterContext } from '../Contexts/FilterContext'

const ExercicesExemples = () => {

    const { allExercises } = useContext(ExercisesContext)

    const {
        setSearch,
        searchedEx,
        handleSearchExercises,
        search,
        title } = useContext(FilterContext)


    const [currentPage, setCurrentPage] = useState(1)
    const [exPerPage, setExPerPage] = useState(8)


    const lastExIndex = currentPage * exPerPage
    const firstExIndex = lastExIndex - exPerPage

  
    const currentEx = searchedEx ? searchedEx.slice(firstExIndex, lastExIndex)
                                 : allExercises.slice(firstExIndex, lastExIndex)


    function funcSearchExercises() {
        handleSearchExercises()
        setCurrentPage(1)
        setExPerPage(8)
    }




    return (
        <Container
            w='100%'
            bg="compBg"
            maxW='100%'
            p='1em'>
            <Flex
                justifyContent='center'
                alignItems='center'
                flexWrap='wrap'
                mx='10px'
            >
                <Heading as='h1' fontSize='2.8em' color='textDistact' display='flex' alignItems='flex-end'>
                    {searchedEx ? `${title} exercises` : 'All Exercises'}
                    <Text fontSize='40%' color='grey' ml='10px'>
                        {`(${searchedEx ? searchedEx.length : allExercises.length})`}</Text>

                </Heading>
                <Show breakpoint='(min-width: 500px)'>
                    <Spacer />
                </Show>
                <Box my='10px'>
                    <InputGroup>
                        <Input
                            variant='outlined'
                            placeholder='Serch for exercises'
                            w="100%"
                            bgColor='textContrast'
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <InputRightElement children={
                            <IconButton aria-label='Search database' icon={<HiOutlineSearch />}
                                onClick={funcSearchExercises}
                            />} />
                    </InputGroup>
                </Box>
            </Flex>

            <Box display='flex' alignItems='flex-start' justifyContent='center'>
                <Box w='100%'
                    m='30px'
                    mt='50px'>
                    <Flex h='fit-content' alignItems='center' justifyContent='center'>
                        <Show breakpoint='(min-width: 500px)'>
                            <Spacer />
                        </Show>
                        <Pagination
                            totalEx={searchedEx ? searchedEx.length : allExercises.length}
                            exPerPage={exPerPage}
                            setCurrentPage={setCurrentPage}
                            currPage={currentPage} />
                    </Flex>


                    <SimpleGrid minChildWidth='300px' spacing='10px' alignItems='flex-start'>
                        {
                            currentEx.map((Ex) => {
                                return (
                                    <ExerciseCard exercise={Ex} key={Ex.id} />
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