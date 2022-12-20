import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Checkbox,
    Image,
    Button,
    Stack,
    Skeleton,
    Container,
    Box,
    useDisclosure,
    ModalOverlay,
} from '@chakra-ui/react'
import DetailsModal from './ModalEx/DetailsModal'
import { useState } from 'react'

const WorkoutTable = ({ target }) => {

    const [currentModalEx, setCurrentModalEx] = useState()

    const OverlayOne = () => (
        <ModalOverlay
            bg='blackAlpha.300'
            backdropFilter='blur(10px) hue-rotate(30deg)'
        />
    )


    const { isOpen, onOpen, onClose } = useDisclosure()
    const [overlay, setOverlay] = React.useState(<OverlayOne />)


    return (

        <TableContainer>
            <Table variant='simple'>
                <TableCaption color='gray.400'>
                    {`${target.title} workout -
                      ${target.description ? target.description : 'no description'}`}</TableCaption>
                <Thead >
                    <Tr >
                        <Th color='textDistact'>Exercise</Th>
                        <Th color='textDistact'>Target</Th>
                        <Th color='textDistact'>Example</Th>
                        <Th color='textDistact'>reps/sets</Th>
                        <Th color='textDistact'>Done</Th>
                        <Th color='textDistact'>Details</Th>
                    </Tr>
                </Thead>
                <Tbody color='textContrast'>
                    {target.workout ?
                        target.workout.map((ex) => {
                            return (
                                <Tr key={ex.id}>
                                    <Td>{ex.name}</Td>
                                    <Td>{ex.target}</Td>
                                    <Td><Image src={ex.gifUrl} boxSize="100px" minW='100px' /></Td>
                                    <Td>{ex.sets_reps ? ex.sets_reps : '--/--'}</Td>
                                    <Td>
                                        <Checkbox size='lg'></Checkbox>
                                    </Td>
                                    <Td>
                                        <Button colorScheme='teal' variant='ghost'
                                        onClick={() => {
                                            setOverlay(<OverlayOne />)
                                            onOpen()
                                            setCurrentModalEx(ex)
                                        }}>
                                            Details
                                        </Button>
                                    </Td>
                                </Tr>
                                
                            )
                        })
                        :
                        null
                    }
                </Tbody>
            </Table>
             <DetailsModal isOpen={isOpen} onClose={onClose} overlay={overlay} exercise={currentModalEx}/>
        </TableContainer>

    )
}

export default WorkoutTable