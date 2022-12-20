import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Button, IconButton } from '@chakra-ui/react'
import WorkoutTable from './WorkoutTable'
import { HiOutlinePlus } from 'react-icons/hi'

const WorkoutList = ({ personalWorkout }) => {


    return (
        <Tabs
            variant='soft-rounded'
            colorScheme='facebook'
        >
            <TabList mx='20px' display='flex' overflowX='auto'>
                    {personalWorkout ?
                    personalWorkout.map((ex) => {
                        return (
                            <Tab key={ex.id} mx='5px'>{ex.title}</Tab>
                        )
                    })
                    :
                    null
                }
                <IconButton
                    variant='outline'
                    colorScheme='teal'
                    aria-label='Send email'
                    borderRadius='50px'
                    icon={<HiOutlinePlus size={20} />}
                    onClick={()=> localStorage.clear()}
                />
                
            </TabList>
            <TabPanels>
                {personalWorkout ?
                    personalWorkout.map((target) => {
                        return (
                            <TabPanel key={target.id}>
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