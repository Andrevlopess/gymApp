import { Box, Button, Center, Highlight, Input, Text } from '@chakra-ui/react'
import React from 'react'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'

const Pagination = ({ setCurrentPage, currPage, totalEx, exPerPage }) => {

    const Pages = Math.ceil(totalEx / exPerPage)


    const nextPage = () => {
        if (currPage < Pages) {
            setCurrentPage(currPage + 1)
            window.scrollTo(0 , 0)
        }
    }

    const previousPage = () => {
        if (currPage > 1) {
            setCurrentPage(currPage - 1)
            window.scrollTo(0 , 0)
        }
    }

    return (
        <Box display='flex' justifyContent='space-between' alignItems='center'>

            <Button onClick={previousPage} boxShadow='dark-lg'><GrFormPrevious size='1.5em' /></Button>
            <Center
                p='5px'
                color='black'
            >
                <Input
                    textAlign='center'
                    h='40px'
                    w='150px'
                    bgColor='textDistact'
                    border='none'
                    outline='none'
                    borderRadius='20px'
                    type='number'
                    value={currPage}
                    onChange={(e) => {
                        setCurrentPage(e.target.value)
                    }}
                    cursor='pointer'
                    boxShadow='dark-lg'
                />
                <Center
                    h='40px'
                    w='40px'
                    bgColor='textDistact'
                    borderRadius='20px'
                    ml='3px'>
                    {Pages}
                </Center>
            </Center>
            <Button onClick={nextPage} boxShadow='dark-lg'><GrFormNext size='1.5em' /></Button>
        </Box>

    )
}

export default Pagination