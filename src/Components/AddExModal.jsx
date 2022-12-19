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

const AddExModal = ({isOpen, onClose, overlay}) => {
    return (
        <div>
            <Modal isCentered isOpen={isOpen} onClose={onClose} size='xl' >
                {overlay}
                <ModalContent bgColor='compBg' color='textContrast'>
                    <ModalHeader color='textDistact'>
                        <Text>Add exercise</Text>
                        <InputGroup my='10px'>
                        <Input
                            variant='outlined'
                            placeholder='Search for exercise'
                            w="100%"
                            bgColor='textContrast'
                           
                        />
                        <InputRightElement children={
                            <IconButton aria-label='Search database' icon={<HiOutlineSearch />}
                            />} />
                    </InputGroup>
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text>Custom backdrop filters!</Text>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={onClose} bgColor='textDistact'>Save</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    )
}

export default AddExModal