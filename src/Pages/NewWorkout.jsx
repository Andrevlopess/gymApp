import {
    Box,
    Container,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    FormControl,
    Input,
    Heading,
    InputGroup,
    InputLeftAddon,
    useDisclosure,
    ModalOverlay,
    Button,
    Image,
    NumberInput,
    Stack,
    NumberInputField,
    HStack,

} from '@chakra-ui/react'
import React from 'react'
import { useContext } from 'react'

import { HiOutlinePlus } from 'react-icons/hi'
import { CgLoadbar } from 'react-icons/cg'
import AddExModal from '../Components/ModalEx/AddExModal'
import { NewWorkoutContext } from '../Contexts/NewWorkoutContext'

const NewWorkout = () => {

    const { exTable, changeTitle, changeDescription } = useContext(NewWorkoutContext)

    const OverlayOne = () => (
        <ModalOverlay
            bg='blackAlpha.300'
            backdropFilter='blur(10px) hue-rotate(20deg)'
        />
    )

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [overlay, setOverlay] = React.useState(<OverlayOne />)



    return (
        <Container
            bgColor='compBg'
            w='100%'
            maxW='none'
        >
            <Box w='100%' display='flex' justifyContent='center' flexDirection='column' >

                <Box w='100%' display='flex' justifyContent='space-between' alignItems='center' px='20px' my='15px'>
                    <Heading as='h1' size='4xl' color='lightBlue' my='25px'>
                        New Workout
                    </Heading>
                    <Button bgColor='layoutBg' color='textDistact' py='35px' px='40px'>Create</Button>
                </Box>

                <Box border='1px' borderColor='textContrast' py='30px' px='20px' borderRadius='15px'>

                    <Box w='100%'>
                        <FormControl isRequired display='flex' justifyContent='space-evenly' flexWrap='wrap'>
                            <InputGroup w='40%' minW='300px' my='10px'>
                                <InputLeftAddon children='Workout Name' />
                                <Input placeholder='Ex. chest' color='textContrast' isRequired
                                 onChange={(e) => changeTitle(e.target.value)}/>
                            </InputGroup>
                            <InputGroup w='50%' minW='300px' my='10px'>
                                <InputLeftAddon children='Description' />
                                <Input color='textContrast' onChange={(e) => changeDescription(e.target.value)} />
                            </InputGroup>


                        </FormControl>
                    </Box>
                    <Box my='30px' display='flex' flexDirection='column' justifyContent='center'>

                        <TableContainer w='100%'>
                            <Table variant='simple'>
                                <TableCaption></TableCaption>
                                <Thead>
                                    <Tr>
                                        <Th color='textDistact'>Exercise</Th>
                                        <Th color='textDistact'>Target</Th>
                                        <Th color='textDistact'>Sets/Reps</Th>
                                        <Th color='textDistact'>Example</Th>
                                    </Tr>
                                </Thead>
                                <Tbody color='textContrast'>
                                    {exTable &&
                                        exTable.map((exercise) => {
                                            return (
                                                <Tr key={exercise.id}>
                                                    <Td>{exercise.name}</Td>
                                                    <Td>{exercise.target}</Td>

                                                    <Td>
                                                        <HStack>
                                                            <NumberInput size='sm' maxW='50px' >
                                                                <NumberInputField placeholder='Sets' pr='4px' pl='4px' />
                                                            </NumberInput>
                                                            <CgLoadbar />
                                                            <NumberInput size='sm' maxW='50px' >
                                                                <NumberInputField placeholder='Reps' pr='4px' pl='4px' />
                                                            </NumberInput>
                                                        </HStack>

                                                    </Td>
                                                    <Td><Image src={exercise.gifUrl} boxSize="100px" minW='100px' /></Td>
                                                </Tr>
                                            )
                                        })
                                    }
                                </Tbody>

                            </Table>
                        </TableContainer>
                        <Button
                            onClick={() => {
                                setOverlay(<OverlayOne />)
                                onOpen()
                            }}

                            bg='none'
                            py='10px'
                        >
                            <HiOutlinePlus size={40} color='#00ADB5' />
                        </Button>


                        <AddExModal onClose={onClose} isOpen={isOpen} overlay={overlay} />
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}

export default NewWorkout