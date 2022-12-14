import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const ExercisesContext = createContext()


export const ExercisesProvider = ({children}) =>{

    const [backEx, setBackEx] = useState('')
    const [chestEx, setChestEx] = useState('')
    const [shouldersEx, setShouldersEx] = useState('')
    const [upperLegsEx, setUpperLegsEx] = useState('')
    const [upperArmsEx, setUpperArmsEx] = useState('')
    const [lowerArmsEx, setLowerArmsEx] = useState('')
    const [lowerLegsEx, setLowerLegsEx] = useState('')

    // useEffect(()=>{

    //     // * GET ALL SHOULDERS EXERCISES

    //     fetch('http://localhost:5000/exercises?bodyPart=shoulders', {
    //         method: 'GET',
    //         headers:{
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //     .then(res => res.json())
    //     .then(json => setShouldersEx(json))
    //     .catch(err => console.log(err));

    //      // * GET ALL BACK EXERCISES

    //      fetch('http://localhost:5000/exercises?bodyPart=back', {
    //         method: 'GET',
    //         headers:{
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //     .then(res => res.json())
    //     .then(json => setBackEx(json))
    //     .catch(err => console.log(err));

    //      // * GET ALL CHEST EXERCISES

    //      fetch('http://localhost:5000/exercises?bodyPart=chest', {
    //         method: 'GET',
    //         headers:{
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //     .then(res => res.json())
    //     .then(json => setChestEx(json))
    //     .catch(err => console.log(err));

    //      // * GET ALL UPPERLEGS EXERCISES

    //      fetch('http://localhost:5000/exercises?bodyPart=upper%20legs', {
    //         method: 'GET',
    //         headers:{
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //     .then(res => res.json())
    //     .then(json => setUpperLegsEx(json))
    //     .catch(err => console.log(err));

    //      // * GET ALL UPPER ARMS EXERCISES

    //      fetch('http://localhost:5000/exercises?bodyPart=upper%20arms', {
    //         method: 'GET',
    //         headers:{
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //     .then(res => res.json())
    //     .then(json => setUpperArmsEx(json))
    //     .catch(err => console.log(err));


    //      // * GET ALL LOWERLEGS EXERCISES

    //      fetch('http://localhost:5000/exercises?bodyPart=lower%20legs', {
    //         method: 'GET',
    //         headers:{
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //     .then(res => res.json())
    //     .then(json => setLowerLegsEx(json))
    //     .catch(err => console.log(err));


    //      // * GET ALL LOWER ARMS EXERCISES

    //      fetch('http://localhost:5000/exercises?bodyPart=lower%20arms', {
    //         method: 'GET',
    //         headers:{
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //     .then(res => res.json())
    //     .then(json => setLowerArmsEx(json))
    //     .catch(err => console.log(err));
    // }, [])

     return(
        <ExercisesContext.Provider value={{
            chestEx,
            backEx,
            shouldersEx,
            lowerArmsEx,
            lowerLegsEx,
            upperLegsEx,
            upperArmsEx
        }}>
            {children}
        </ExercisesContext.Provider>
     )
}