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
    FormLabel,
    Input,
    Heading,
    Textarea,
    InputGroup,
    InputLeftAddon,
    useDisclosure,
    ModalOverlay,
    Button
} from '@chakra-ui/react'
import React from 'react'
import AddExModal from '../Components/AddExModal'
import { AiOutlinePlus } from 'react-icons/ai'

const NewWorkout = () => {

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
            w='100vw'
            maxW='none'
        >
            <Box w='100%' display='flex' justifyContent='center' flexDirection='column' >

                <Heading as='h1' size='4xl' color='lightBlue' ml='20px' my='25px'>
                    New Workout
                </Heading>

                <Box border='1px' borderColor='textContrast' py='30px' px='20px' borderRadius='15px'>

                    <Box w='100%'>
                        <FormControl isRequired display='flex' justifyContent='space-evenly' flexWrap='wrap'>
                            <InputGroup w='40%' minW='300px' my='10px'>
                                <InputLeftAddon children='Workout Name' />
                                <Input placeholder='Ex. chest' color='textContrast' />
                            </InputGroup>
                            <InputGroup w='50%' minW='300px' my='10px'>
                                <InputLeftAddon children='Description' />
                                <Input color='textContrast' />
                            </InputGroup>


                        </FormControl>
                    </Box>
                    <Box my='30px'>

                        <TableContainer w='100%'>
                            <Table variant='simple'>
                                <TableCaption></TableCaption>
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
                                    <Button
                                        variant='solid'
                                        onClick={() => {
                                            setOverlay(<OverlayOne />)
                                            onOpen()
                                        }}
                                        _hover='none'
                                        _active='none'
                                        bg='none'
                                    >
                                        <AiOutlinePlus size='3em' />
                                    </Button>
                                    <AddExModal onClose={onClose} isOpen={isOpen} overlay={overlay} />
                                </Tbody>
                            </Table>
                        </TableContainer>
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}

export default NewWorkout