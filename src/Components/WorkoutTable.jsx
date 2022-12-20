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
} from '@chakra-ui/react'

const WorkoutTable = ({ target }) => {


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