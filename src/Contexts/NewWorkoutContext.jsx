import { useNavigate } from 'react-router-dom'
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const NewWorkoutContext = createContext()

function NewWorkoutProvider({ children }) {

    const [exTable, setExTable] = useState([])
    const [workoutTitle, setWorkoutTitle] = useState()
    const [description, setDescription] = useState()
    const [workout, setWorkout] = useState()

    const navigate = useNavigate()


    const getWorkouts = () => {
        const workouts = JSON.parse(localStorage.getItem('workouts') || '[]')

        return workouts
    }

    

    const randomId = () => {
        return Date.now()
    }
    const createWorkout = (workout) => {

        const datas = getWorkouts()

        datas.push(
            {
                title: workoutTitle,
                description: description,
                id: randomId(),
                workout: workout
            }
            )

        
        localStorage.setItem('workouts', JSON.stringify(datas))
        setWorkout(workout)
        setExTable([])
        navigate('/workoutPlan')

    }

    const addExTable = (ex) => {
        setExTable([...exTable, ex])
    }

    const removeExTable = (ex) => {
        setExTable(exTable.filter(item => item.id !== ex.id))
    }

    const changeTitle = (title) => {
        setWorkoutTitle(title)
    }

    const changeDescription = (desc) => {
        setDescription(desc)
    }



    return (
        <NewWorkoutContext.Provider value={{
            addExTable,
            changeTitle,
            changeDescription,
            createWorkout,
            removeExTable,
            getWorkouts,
            workoutTitle,
            exTable,
            workout
        }}>
            {children}
        </NewWorkoutContext.Provider>
    )
}

export default NewWorkoutProvider