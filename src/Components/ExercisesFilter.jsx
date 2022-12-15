import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Heading,
    Button
} from '@chakra-ui/react'
import { useContext } from 'react'
import { FilterContext } from '../Contexts/FilterContext'

const ExercisesFilter = () => {

    const { bodyParts, equipments, targets } = useContext(FilterContext)

    return (
        <Box w='26vw' bgColor='layoutBg' m='30px' borderRadius='20px' py='20px' >
            <Heading as='h3' color='textDistact' textAlign='center' mb='15px'>Filter</Heading>
            <Accordion allowToggle color='textContrast' defaultIndex={[0]}>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                Equipment
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        {equipments ?
                            equipments.map((equip) => {
                                return (
                                    <Button colorScheme='teal' variant='outline' size='sm' m='2px'>
                                        {equip}
                                    </Button>
                                )

                            })
                            : null
                        }
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                Body parts
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        {bodyParts ?
                            bodyParts.map((bodypart) => {
                                return (
                                    <Button colorScheme='teal' variant='outline' size='sm' m='2px'>
                                        {bodypart}
                                    </Button>
                                )

                            })
                            : null
                        }
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                Muscle Target
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        {targets ?
                            targets.map((target) => {
                                return (
                                    <Button colorScheme='teal' variant='outline' size='sm' m='2px'>
                                        {target}
                                    </Button>
                                )

                            })
                            : null
                        }
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Box>

    )
}

export default ExercisesFilter