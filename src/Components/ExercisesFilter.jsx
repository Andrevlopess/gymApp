import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    RadioGroup,
    Stack,
    Radio,
    Select,
    Divider,
} from '@chakra-ui/react'
import { useContext } from 'react'
import { FilterContext } from '../Contexts/FilterContext'

const ExercisesFilter = () => {

    const { bodyParts, equipments, targets } = useContext(FilterContext)

    return (
        <Box w='20vw' bgColor='layoutBg' m='30px' borderRadius='20px' py='20px' >
            <Stack color='textContrast' spacing='20px'>
                <Select placeholder='Equimpents' border='none' outline='none'>
                    {equipments ?
                        equipments.map((eqp) => {
                            return (
                                <option value={eqp} style={{ backgroundColor: '#393E46' }}>{eqp}</option>
                            )
                        })
                        :
                        null
                    }
                </Select>
                <Divider />
                <Select placeholder='Body Part' border='none' outline='none'>
                    {bodyParts ?
                        bodyParts.map((bdpart) => {
                            return (
                                <option value={bdpart} style={{ backgroundColor: '#393E46' }}>{bdpart}</option>
                            )
                        })
                        :
                        null
                    }
                </Select>
                <Divider />
                <Select placeholder='Muscle Target' border='none' outline='none'>
                    {targets ?
                        targets.map((target) => {
                            return (
                                <option value={target} style={{ backgroundColor: '#393E46' }}>{target}</option>
                            )
                        })
                        :
                        null
                    }
                </Select>
            </Stack>
        </Box>

    )
}

export default ExercisesFilter