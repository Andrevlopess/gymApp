import { Box, Button, Container, Heading, IconButton, Input, InputGroup, InputRightElement, Show, SimpleGrid, Text } from '@chakra-ui/react'
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

    const { filter,
        filterName,
        setSearch,
        searchedEx,
        handleSearchExercises,
        search,
        title } = useContext(FilterContext)

        console.log(filterName);

    const [currentPage, setCurrentPage] = useState(1)
    const [exPerPage, setExPerPage] = useState(6)


    const lastExIndex = currentPage * exPerPage
    const firstExIndex = lastExIndex - exPerPage

    const currentEx =
        searchedEx ? searchedEx.slice(firstExIndex, lastExIndex)
            : allExercises.slice(firstExIndex, lastExIndex)

    function funcSearchExercises() {
        handleSearchExercises()
        setCurrentPage(1)
    }




    return (
        <Container
            w='100%'
            bg="compBg"
            maxW='100%'
            p='1em'>
            <Box display='flex' justifyContent='space-between' alignItems='flex-end' flexWrap="wrap" mx='10px'>
                <Heading as='h1' size='4xl' color='lightBlue' display='flex' alignItems='flex-end' ml='30px'>
                    {searchedEx ? `${title} exercises` : 'All Exercises'}
                    <Text fontSize='40%' color='grey' ml='10px'>
                        {`(${searchedEx ? searchedEx.length : allExercises.length})`}</Text>

                </Heading>
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
            </Box>

            <Box display='flex' alignItems='flex-start' justifyContent='center'>
                <Show breakpoint='(min-width: 500px)'>
                    <ExercisesFilter/>
                </Show>
                <Box w='100%'
                    m='30px'
                    mt='50px'>
                    <Box display='flex' h='fit-content' alignItems='center' justifyContent='space-between'>
                        <Box>
                            {searchedEx &&
                                filterName.map((fil) => {
                                    return <FilterTag filter={fil} />
                                })
                            }
                        </Box>


                        <Pagination
                            totalEx={searchedEx ? searchedEx.length : allExercises.length}
                            exPerPage={exPerPage}
                            setCurrentPage={setCurrentPage}
                            currPage={currentPage} />
                    </Box>


                    <SimpleGrid minChildWidth='300px' spacing='10px'>
                        {searchedEx ?
                            searchedEx.map((Ex) => {
                                return (
                                    <ExerciseCard exercise={Ex} key={Ex.id} />
                                )
                            })
                            :
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