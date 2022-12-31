import React from 'react'
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Text,
    Flex,
} from '@chakra-ui/react'
import { useContext } from 'react'
import { ExercisesContext } from '../../Contexts/ExercicesContext'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'

const AddExToWorkout = ({ isOpen, onClose, overlay, ex }) => {

    const { personalWorkout, updateWorkout, setDefaultIndex } = useContext(ExercisesContext)

    const navigate = useNavigate()

    return (

        <Modal isOpen={isOpen} onClose={onClose} size='xs' scrollBehavior='outside' >
            {overlay}
            <ModalContent bgColor='compBg' color='textContrast'>
                <ModalHeader color='textDistact' fontWeight={800}>
                    Select the workout
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Flex flexDirection='column'>
                        {!personalWorkout.length &&
                            <Flex onClick={() => {
                                navigate('/newWorkout')
                            }}
                                cursor='pointer'
                                border='1px'
                                py='10px'
                                px='30px'
                                borderRadius='10px'
                                borderColor='textContrast'>
                                <Text fontWeight={800}
                                    color='textContrast'>Create a workout</Text>
                            </Flex>
                        }
                        {personalWorkout &&
                            personalWorkout.map((workout) => {
                                return (
                                    <Flex bg='none' border='1px' w='100%' my='10px' p='10px' borderRadius='10px' flexDirection='column' _hover={{ bgColor: 'homeDistactBg' }}
                                        onClick={() => {
                                            updateWorkout(ex, workout)
                                            onClose()
                                            navigate('/workoutPlan')
                                            setDefaultIndex(personalWorkout.indexOf(workout))
                                        }
                                        } key={workout.id}
                                    >
                                        <Text fontWeight={800} my='4px' fontSize='1.1em'>{workout.title}</Text>
                                        <Text
                                            fontWeight={800}
                                            color='grey'
                                            as='i'>
                                            {workout.description ? `"${workout.description}"` : null}
                                        </Text>
                                    </Flex>


                                )
                            })
                        }
                    </Flex>
                </ModalBody>
                <ModalFooter>

                </ModalFooter>
            </ModalContent>
        </Modal>

    )
}

export default AddExToWorkout