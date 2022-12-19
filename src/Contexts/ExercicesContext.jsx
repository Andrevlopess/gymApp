import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const ExercisesContext = createContext()


export const ExercisesProvider = ({ children }) => {

    const [backEx, setBackEx] = useState([])
    const [chestEx, setChestEx] = useState([])
    const [shouldersEx, setShouldersEx] = useState([])
    const [upperLegsEx, setUpperLegsEx] = useState([])
    const [upperArmsEx, setUpperArmsEx] = useState([])
    const [lowerArmsEx, setLowerArmsEx] = useState([])
    const [lowerLegsEx, setLowerLegsEx] = useState([])
    const [allExercises, setAllExercises] = useState([])

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

        fetch('http://localhost:5000/exercises?bodyPart=back&_limit=5', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(json => setBackEx(json))
            .catch(err => console.log(err));

        // * GET ALL CHEST EXERCISES

        fetch('http://localhost:5000/exercises?bodyPart=chest&_limit=5', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(json => setChestEx(json))
            .catch(err => console.log(err));

        // * GET ALL UPPERLEGS EXERCISES

        fetch('http://localhost:5000/exercises?bodyPart=upper%20legs&_limit=5', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(json => setUpperLegsEx(json))
            .catch(err => console.log(err));

        // * GET ALL UPPER ARMS EXERCISES

        fetch('http://localhost:5000/exercises?bodyPart=upper%20arms&_limit=5', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(json => setUpperArmsEx(json))
            .catch(err => console.log(err));


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

        fetch(('http://localhost:5000/exercises?&_limit=200'), {
            method: 'GET',
            headers:{
                'content-type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(json => setAllExercises(json))
        .catch(err => console.log(err));

    }, [])
 

    const personalWorkout = [
        {
            title: 'Chest',
            exercises: chestEx,
        },
        {
            title: 'Back',
            exercises: backEx,
        },
        {
            title: 'Upper Arms',
            exercises: upperArmsEx,
        },
        {
            title: 'Upper Legs',
            exercises: upperLegsEx,
        }
    ]


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
            allExercises
        }}>
            {children}
        </ExercisesContext.Provider>
    )
}