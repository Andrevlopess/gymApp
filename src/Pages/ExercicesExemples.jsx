import { Box, Button, Container, Flex, Heading, IconButton, Image, Input, InputGroup, InputRightElement, ModalOverlay, Show, SimpleGrid, Skeleton, Spacer, Spinner, Tag, TagCloseButton, TagLabel, Text, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useContext } from 'react'
import { HiOutlineSearch } from 'react-icons/hi'
import ExerciseCard from '../Components/ExerciseCard'
import Pagination from '../Components/Pagination'
import { ExercisesContext } from '../Contexts/ExercicesContext'
import { FilterContext } from '../Contexts/FilterContext'
import PropagateLoader from "react-spinners/PropagateLoader";
import AddExToWorkout from '../Components/modals/AddToWorkout'

const ExercicesExemples = () => {

    const { allExercises } = useContext(ExercisesContext)

    

    const {
        setSearch,
        searchedEx,
        handleSearchExercises,
        search,
        removeSearch,
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
            p='1em'
            minH='80vh'>
            <Flex
                justifyContent='center'
                alignItems='center'
                flexWrap='wrap'
                mx='10px'
            >
                <Heading as='h1' fontSize='2.9em' color='textDistact' display='flex' alignItems='flex-end' my='10px'>
                    {searchedEx ? `${title} exercises` : 'All exercises'}
                    <Text fontSize='40%' color='grey' ml='10px'>
                        {`(${searchedEx ? searchedEx.length : allExercises.length})`}</Text>

                </Heading>
                <Show breakpoint='(min-width: 500px)'>
                    <Spacer />
                </Show>
                <Box my='10px'>
                    <InputGroup boxShadow='dark-lg'>
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

            <Box display='flex' alignItems='flex-start' justifyContent='center' flexWrap='wrap-reverse'>
                <Box w='100%'
                    m='30px'
                    mt='50px'>
                    <Flex alignItems='center' justifyContent='center' mb='20px'>
                        {searchedEx &&
                            <Tag
                                borderRadius='full'
                                variant='solid'
                                colorScheme='teal'
                                py='8px'
                                px='15px'
                            >
                                <TagLabel>{title}</TagLabel>
                                <TagCloseButton onClick={() => { removeSearch() }} />
                            </Tag>
                        }
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
                        {currentEx.length ?
                            currentEx.map((Ex) => {
                                return (
                                    <ExerciseCard exercise={Ex} key={Ex.id} />
                                )
                            })
                            :
                            <Flex justifyContent='center' alignItems='center' h='40vh'>
                                <PropagateLoader
                                    color='#00ADB5'
                                    loading={true}
                                    size={25}
                                    aria-label="Loading Spinner"
                                    data-testid="loader"
                                />
                            </Flex>
                        }
                    </SimpleGrid>

                    <Show breakpoint='(max-width: 500px)'>
                        <Flex justifyContent='center' mt='30px' >
                            <Pagination totalEx={searchedEx ? searchedEx.length : allExercises.length}
                                exPerPage={exPerPage}
                                setCurrentPage={setCurrentPage}
                                currPage={currentPage} />
                        </Flex>

                    </Show>
                </Box>
            </Box>
        </Container>
    )
}

export default ExercicesExemples