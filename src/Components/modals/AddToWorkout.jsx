import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Text,
    InputGroup,
    Input,
    InputRightElement,
    IconButton,
    Flex,
} from '@chakra-ui/react'
import { HiOutlineSearch } from 'react-icons/hi'
import AddExCard from './AddExCard'
import { useContext } from 'react'

import { useState } from 'react'
import { ExercisesContext } from '../../Contexts/ExercicesContext'

const AddExToWorkout = ({ isOpen, onClose, overlay }) => {

    const { personalWorkout } = useContext(ExercisesContext)

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
                        {personalWorkout &&
                            personalWorkout.map((workout) => {
                                return (
                                    <Button bg='none' border='1px' w='100%' my='10px' p='30px'>
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