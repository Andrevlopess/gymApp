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
    SimpleGrid,
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

        <Modal isOpen={isOpen} onClose={onClose} size='4xl' scrollBehavior='outside' >
            {overlay}
            <ModalContent bgColor='layoutBg' color='textContrast'>
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
                            }}
                        />
                        <InputRightElement children={
                            <IconButton aria-label='Search database' icon={<HiOutlineSearch />} />}
                            onClick={() => funcSearchExercises()}
                        />

                    </InputGroup>
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <SimpleGrid  minChildWidth='300px' spacing='10px'>
                        {searchEx ?
                            searchEx.map((ex) => {
                                return <AddExCard exercise={ex} close={onClose} key={ex.id} />

                            })
                            : <h3 style={{ textAlign: 'center' }}>Search for an Exercise</h3>
                        }
                    </SimpleGrid>

                </ModalBody>
                <ModalFooter>

                </ModalFooter>
            </ModalContent>
        </Modal>

    )
}

export default AddExModal