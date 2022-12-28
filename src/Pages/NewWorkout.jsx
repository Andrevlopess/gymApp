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
} from '@chakra-ui/react'
import React from 'react'
import { useContext } from 'react'
import { BsTrash } from 'react-icons/bs'
import { HiOutlinePlus } from 'react-icons/hi'
import AddExModal from '../Components/modals/AddExModal'
import { NewWorkoutContext } from '../Contexts/NewWorkoutContext'
import RepsAndSets from '../Components/EditableSets_Reps'
import { toast } from 'react-hot-toast'

const NewWorkout = () => {

    const { exTable,
        changeTitle,
        changeDescription,
        createWorkout,
        workoutTitle,
        removeExTable } = useContext(NewWorkoutContext)

    const OverlayOne = () => (
        <ModalOverlay
            bg='blackAlpha.300'
            backdropFilter='blur(10px) hue-rotate(20deg)'
        />
    )

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [overlay, setOverlay] = React.useState(<OverlayOne />)

    function handleCreateWorkout() {

        if (exTable.length > 0 && workoutTitle) {
            createWorkout(exTable)
            toast.success("Your new workout was saved!")
        }else{
            toast.error("Check your workout again!")
        }

    }


    return (
        <Container
            bgColor='compBg'
            w='100%'
            maxW='none'
            minH='80vh'
        >
            <Box w='100%' display='flex' justifyContent='center' flexDirection='column' pb='40px' >
                <Box w='100%' display='flex' justifyContent='space-between' alignItems='center' px='20px' my='15px' flexWrap='wrap'>
                    <Heading as='h1' size='3xl' color='textDistact' fontWeight='800' my='25px'>
                        New Workout
                    </Heading>
                    <Button
                        bgColor='layoutBg'
                        color='textDistact'
                        py='35px'
                        px='40px'
                        w='100%'
                        maxW='400px'
                        mx='10px'
                        onClick={handleCreateWorkout}>Create</Button>
                </Box>

                <Box border='1px' borderColor='textContrast' py='30px' px='20px' borderRadius='15px'>

                    <Box w='100%'>
                        <FormControl isRequired display='flex' justifyContent='space-evenly' flexWrap='wrap'>
                            <InputGroup w='40%' minW='300px' my='10px'>
                                <InputLeftAddon children='Workout Name' />
                                <Input placeholder='Ex. chest' color='textContrast' isRequired
                                    onChange={(e) => changeTitle(e.target.value)} />
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
                                        <Th color='textDistact'></Th>
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
                                                        <RepsAndSets ex={exercise} index={exercise.id} />
                                                    </Td>
                                                    <Td><Image src={exercise.gifUrl} boxSize="100px" minW='100px' /></Td>
                                                    <Td>
                                                        <BsTrash
                                                        size={25}
                                                        color='#E53E3E'
                                                        onClick={() => removeExTable(exercise)} /></Td>
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
                            my='30px'
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