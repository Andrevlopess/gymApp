import { useContext, useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { NewWorkoutContext } from "./NewWorkoutContext";
import {exercises} from './exercises.js'
export const ExercisesContext = createContext()


export const ExercisesProvider = ({ children }) => {

    const { workout } = useContext(NewWorkoutContext)

    const [backEx, setBackEx] = useState([])
    const [chestEx, setChestEx] = useState([])
    const [shouldersEx, setShouldersEx] = useState([])
    const [upperLegsEx, setUpperLegsEx] = useState([])
    const [upperArmsEx, setUpperArmsEx] = useState([])
    const [lowerArmsEx, setLowerArmsEx] = useState([])
    const [lowerLegsEx, setLowerLegsEx] = useState([])
    const [allExercises, setAllExercises] = useState([])
    const [personalWorkout, setPersonalWorkout] = useState([])
    const [control, setControl] = useState()


    useEffect(() => {

        // // * GET ALL SHOULDERS EXERCISES

        // fetch('http://localhost:5000/exercises?bodyPart=shoulders&_limit=5', {
        //     method: 'GET',
        //     headers:{
        //         'Content-Type': 'application/json'
        //     }
        // })
        // .then(res => res.json())
        // .then(json => setShouldersEx(json))
        // .catch(err => console.log(err));

        // * GET ALL BACK EXERCISES

        // fetch('http://localhost:5000/exercises?bodyPart=back&_limit=5', {
        //     method: 'GET',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // })
        //     .then(res => res.json())
        //     .then(json => setBackEx(json))
        //     .catch(err => console.log(err));

        // // * GET ALL CHEST EXERCISES

        // fetch('http://localhost:5000/exercises?bodyPart=chest&_limit=5', {
        //     method: 'GET',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // })
        //     .then(res => res.json())
        //     .then(json => setChestEx(json))
        //     .catch(err => console.log(err));

        // // * GET ALL UPPERLEGS EXERCISES

        // fetch('http://localhost:5000/exercises?bodyPart=upper%20legs&_limit=5', {
        //     method: 'GET',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // })
        //     .then(res => res.json())
        //     .then(json => setUpperLegsEx(json))
        //     .catch(err => console.log(err));

        // // * GET ALL UPPER ARMS EXERCISES

        // fetch('http://localhost:5000/exercises?bodyPart=upper%20arms&_limit=5', {
        //     method: 'GET',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // })
        //     .then(res => res.json())
        //     .then(json => setUpperArmsEx(json))
        //     .catch(err => console.log(err));


        //  // * GET ALL LOWERLEGS EXERCISES

        //  fetch('http://localhost:5000/exercises?bodyPart=lower%20legs&_limit=5', {
        //     method: 'GET',
        //     headers:{
        //         'Content-Type': 'application/json'
        //     }
        // })
        // .then(res => res.json())
        // .then(json => setLowerLegsEx(json))
        // .catch(err => console.log(err));


        // * GET ALL LOWER ARMS EXERCISES

        //  fetch('http://localhost:5000/exercises?bodyPart=lower%20arms&_limit=5', {
        //     method: 'GET',
        //     headers:{
        //         'Content-Type': 'application/json'
        //     }
        // })
        // .then(res => res.json())
        // .then(json => setLowerArmsEx(json))
        // .catch(err => console.log(err));

        // * http://localhost:5000/exercises?&_limit=200

        // fetch(('http://localhost:5000/exercises?&_limit=200'), {
        //     method: 'GET',
        //     headers: {
        //         'content-type': 'application/json'
        //     }
        // })
        //     .then(res => res.json())
        //     .then(json => setAllExercises(json))
        //     .catch(err => console.log(err));
       
        setAllExercises(exercises)

    }, [])

    useEffect(()=>{
        const data = JSON.parse(localStorage.getItem('workouts'))

       setPersonalWorkout(data)

    },[workout, control])

    const getWorkouts = () => {
        const workouts = JSON.parse(localStorage.getItem('workouts') || '[]')

        return workouts
    }

    function deleteWorkout(ex){
        const data = getWorkouts().filter((exercise) => exercise.id !== ex.id)
        localStorage.setItem('workouts', JSON.stringify(data))

        setControl(data)
    }


    return (
        <ExercisesContext.Provider value={{
            chestEx,
            backEx,
            shouldersEx,
            lowerArmsEx,
            lowerLegsEx,
            upperLegsEx,
            upperArmsEx,
            personalWorkout,
            deleteWorkout,
            allExercises
        }}>
            {children}
        </ExercisesContext.Provider>
    )
}