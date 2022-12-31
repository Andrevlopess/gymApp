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
    Text,
    Flex,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
    Portal,
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
        getWorkouts,
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

        const alreadyExists = getWorkouts().filter((workouts) => workouts.title === workoutTitle)

        if (exTable.length > 0 && workoutTitle) {
            if (!alreadyExists.length) {
                createWorkout(exTable)
                toast.success("Your new workout was saved!")
            } else {
                toast.error(`You already have a "${workoutTitle}" workout`, { duration: 5000 })
            }
        } else {
            toast.error(`Add at least one exercise to your workout`, { duration: 5000 })
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
                                                        <Popover placement='left-start'>
                                                            <PopoverTrigger>
                                                                <Button bg='none' _hover={'none'} _active={'none'} border='none'>
                                                                    <BsTrash
                                                                        size={25}
                                                                        color='#E53E3E'
                                                             />
                                                               </Button>
                                                            </PopoverTrigger>
                                                            <PopoverContent bgColor='layoutBg' border='none'>
                                                                <PopoverArrow />
                                                                <PopoverHeader>Remove Confirm </PopoverHeader>
                                                                <PopoverCloseButton />
                                                                <PopoverBody>
                                                                    <Button colorScheme='red' w='100%'
                                                                    variant='outline' _hover={'none'}
                                                                    onClick={() => removeExTable(exercise)}
                                                                    >Remove</Button>
                                                                </PopoverBody>
                                                            </PopoverContent>
                                                        </Popover></Td>
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