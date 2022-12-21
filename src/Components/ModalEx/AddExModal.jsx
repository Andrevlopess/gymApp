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
} from '@chakra-ui/react'
import { HiOutlineSearch } from 'react-icons/hi'
import AddExCard from './AddExCard'
import { useContext } from 'react'

import { useState } from 'react'
import { ExercisesContext } from '../../Contexts/ExercicesContext'

const AddExModal = ({ isOpen, onClose, overlay }) => {


    const { allExercises } = useContext(ExercisesContext)

    const [search, setSearch] = useState()
    const [searchEx, setSearchEx] = useState()


    function funcSearchExercises() {

        console.log(search);
        if (search) {
            const currentEx = allExercises.filter((item) =>
                item.name.toLowerCase().includes(search.toLowerCase())
                || item.target.toLowerCase().includes(search.toLowerCase())
                || item.equipment.toLowerCase().includes(search.toLowerCase())
                || item.bodyPart.toLowerCase().includes(search.toLowerCase()))

            setSearchEx(currentEx)
        }
    }


    return (

        <Modal isCentered isOpen={isOpen} onClose={onClose} size='4xl' scrollBehavior='inside'>
            {overlay}
            <ModalContent bgColor='compBg' color='textContrast'>
                <ModalHeader color='textDistact'>
                    <Text>Add exercise</Text>
                    <InputGroup my='10px'>
                        <Input
                            variant='outlined'
                            placeholder='Ex. "barbell bench press"'
                            w="100%"
                            bgColor='textContrast'

                            onChange={(e) => {
                                setSearch(e.target.value)
                                funcSearchExercises()
                            }}
                        />
                        <InputRightElement children={
                            <IconButton aria-label='Search database' icon={<HiOutlineSearch />} />}
                        />

                    </InputGroup>
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    {searchEx ?
                        searchEx.map((ex) => {
                            return <AddExCard exercise={ex} close={onClose} key={ex.id} />

                        })
                        :  <h3 style={{ textAlign: 'center' }}>Search for an Exercise</h3>
                    }
                </ModalBody>
                <ModalFooter>

                </ModalFooter>
            </ModalContent>
        </Modal>

    )
}

export default AddExModal