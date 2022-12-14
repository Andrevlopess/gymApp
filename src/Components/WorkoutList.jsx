import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import WorkoutTable from './WorkoutTable'
import { useContext } from 'react'
import { ExercisesContext } from '../Contexts/ExercicesContext'

const WorkoutList = () => {

    const { personalWorkout } = useContext(ExercisesContext)

    return (
        <div>
            <Tabs
                variant='soft-rounded'
                colorScheme='facebook'
            >
                <TabList>
                    { personalWorkout ?
                        personalWorkout.map((ex, index) => {
                            return (
                                <Tab>{ex.title}</Tab>
                            )
                        })
                        : 
                         null
                    }
                </TabList>
                <TabPanels>
                    {
                        personalWorkout?.map((target) => {
                            return (
                                <TabPanel>
                                    <WorkoutTable target={target} />
                                </TabPanel>
                            )
                        })
                    }
                </TabPanels>
            </Tabs>
        </div>
    )
}

export default WorkoutList