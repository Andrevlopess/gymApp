import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Text,
    Button,
    Image,
    Flex,
  } from '@chakra-ui/react'

const DetailsModal = ({isOpen, onClose, overlay, exercise}) => {


    console.log(exercise);
    return (
        <Modal isCentered isOpen={isOpen} onClose={onClose}>
            {overlay}
            <ModalContent bgColor='compBg' color='textDistact'>
                <ModalHeader fontSize='1.3em'>{exercise && exercise.name}</ModalHeader>
                <ModalCloseButton />
                <ModalBody display='flex' justifyContent='center' flexDirection='column'>
                   <Image src={exercise && exercise.gifUrl} />

                   <Flex flexWrap='wrap' justifyContent='space-around' my='30px'>
                    <Text fontWeight={800} mt='10px'>{`Target: ${exercise && exercise.target}`}</Text>
                   <Text fontWeight={800} mt='10px'>{`BodyPart: ${exercise && exercise.bodyPart}`}</Text>
                   <Text fontWeight={800} mt='10px'>{`Equipment: ${exercise && exercise.equipment}`}</Text>
                   <Text fontWeight={800} mt='10px'>{`Exercise id: ${exercise && exercise.id}`}</Text>
                   </Flex>
                   
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default DetailsModal