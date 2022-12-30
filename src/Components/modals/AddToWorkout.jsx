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

        <Modal isCentered isOpen={isOpen} onClose={onClose} size='xs' scrollBehavior='inside' >
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
                                    <Button bg='none' border='1px' w='100%' my='10px' p='30px'
                                        onClick={() => {
                                            updateWorkout(ex, workout)
                                            onClose()
                                            navigate('/workoutPlan')
                                            setDefaultIndex(personalWorkout.indexOf(workout))
                                        }
                                        } key={workout.id}
                                    >
                                        <Flex flexDirection='column' alignItems='flex-start' w='100%'>
                                            <Text fontWeight={800} my='4px'>{workout.title}</Text>
                                            <Text
                                                fontWeight={800}
                                                color='grey'
                                                as='i'>
                                                {workout.description ? `"${workout.description}"` : null}
                                            </Text>
                                        </Flex>


                                    </Button>
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