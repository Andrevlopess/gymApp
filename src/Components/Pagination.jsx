import { Box, Button, Center, Highlight, Input, Text } from '@chakra-ui/react'
import React from 'react'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'

const Pagination = ({ setCurrentPage, currPage }) => {

    const nextPage = () => {
        setCurrentPage(currPage + 1)
    }

    const previousPage = () => {
        if (currPage > 1) {
            setCurrentPage(currPage - 1)
        }
    }

    return (
        <Box display='flex' justifyContent='space-between' pb='30px' alignItems='center'>

            <Button onClick={previousPage}><GrFormPrevious size='1.5em' /></Button>
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
                    onChange={(e) => setCurrentPage(e.target.value)}
                    cursor='pointer'
                    />
            </Center>
            <Button onClick={nextPage}><GrFormNext size='1.5em' /></Button>
        </Box>

    )
}

export default Pagination