import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Button, IconButton, Box, Flex } from '@chakra-ui/react'
import WorkoutTable from './WorkoutTable'
import { HiOutlinePlus, HiTrash } from 'react-icons/hi'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { FaRegEdit } from 'react-icons/fa'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
} from '@chakra-ui/react'
import { BiMessageEdit } from 'react-icons/bi'
import { useContext } from 'react'
import { ExercisesContext } from '../Contexts/ExercicesContext'
import { useNavigate } from 'react-router-dom'

const WorkoutList = ({ personalWorkout }) => {

    const { deleteWorkout } = useContext(ExercisesContext)

    const navigate = useNavigate()

    return (
        <Tabs
            variant='soft-rounded'
            colorScheme='facebook'
            my='30px'
        >
            <Box w='100%' display='flex' justifyContent='space-between' alignItems='center'>
                <TabList mx='20px' display='flex' overflowX='auto'>
                    {personalWorkout &&
                        personalWorkout.map((ex) => {
                            return (
                                <Tab key={ex.id} mx='5px'>{ex.title}</Tab>


                            )
                        })

                    }
                    <IconButton
                        variant='outline'
                        colorScheme='teal'
                        aria-label='Send email'
                        borderRadius='50px'
                        icon={<HiOutlinePlus size={20} />}
                        onClick={() => navigate('/newWorkout')}
                    />
                </TabList>

            </Box>


            <TabPanels>
                {personalWorkout ?
                    personalWorkout.map((target) => {
                        return (
                            <TabPanel key={target.id}>
                                <Flex justifyContent='flex-end'>
                                <Menu>
                                    <MenuButton
                                        as={IconButton}
                                        aria-label='Options'
                                        icon={<BsThreeDotsVertical />}
                                        variant='outline'
                                        borderRadius='50px'
                                        colorScheme='teal'
                                    />
                                    <MenuList bgColor='layoutBg' border='none'>
                                        <MenuItem bgColor='layoutBg' color='textContrast' icon={<HiTrash size={18} />}
                                            onClick={() => deleteWorkout(target)}
                                        >
                                            Delete
                                        </MenuItem>
                                    </MenuList>
                                </Menu>
                                </Flex>

                                <WorkoutTable target={target} key={target.id} />
                            </TabPanel>

                        )
                    })
                    : null

                }
            </TabPanels>
        </Tabs>
    )
}

export default WorkoutList