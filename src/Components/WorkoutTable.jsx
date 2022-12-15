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
} from '@chakra-ui/react'

const WorkoutTable = ({ target }) => {


    return (
        
            <TableContainer>
                <Table variant='simple'>
                    <TableCaption>{`${target.title} workout`}</TableCaption>
                    <Thead >
                        <Tr >
                            <Th color='textDistact'>Exercise</Th>
                            <Th color='textDistact'>Target</Th>
                            <Th color='textDistact'>Example</Th>
                            <Th isNumeric color='textDistact'>reps/sets</Th>
                            <Th color='textDistact'>Done</Th>
                            <Th color='textDistact'>Details</Th>
                        </Tr>
                    </Thead>
                    <Tbody color='textContrast'>
                        {target.exercises ?
                            target.exercises.map((ex) => {
                                return (
                                    <Tr key={ex.id}>
                                        <Td>{ex.name}</Td>
                                        <Td>{ex.target}</Td>
                                        <Td><Image src={ex.gifUrl} boxSize="100px" minW='100px' /></Td>
                                        <Td isNumeric>25.4</Td>
                                        <Td>
                                            <Checkbox size='lg'></Checkbox>
                                        </Td>
                                        <Td>
                                            <Button colorScheme='teal' variant='ghost'>
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
            </TableContainer>
        
    )
}

export default WorkoutTable