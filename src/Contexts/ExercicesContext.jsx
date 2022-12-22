import { useContext, useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { NewWorkoutContext } from "./NewWorkoutContext";
import { initializeApp } from "firebase/app";

import { getFirestore, collection, getDocs, addDoc, doc, deleteDoc } from "firebase/firestore";


const firebaseConfig = initializeApp({
    apiKey: "AIzaSyDQaUp_iiAwj5Ia-lQmr-DIRJb3WWY6nj4",
    authDomain: "gymnation-d56d2.firebaseapp.com",
    projectId: "gymnation-d56d2",
    storageBucket: "gymnation-d56d2.appspot.com",
    messagingSenderId: "407563213903",
    appId: "1:407563213903:web:ca5db419ea3e6d86d4de3a",
    measurementId: "G-K3RV7YW9HZ"
});

export const ExercisesContext = createContext()

export const ExercisesProvider = ({ children }) => {

    const db = getFirestore(firebaseConfig)
    const ExercisesCollectionRef = collection(db, "ExercisesList");

    const { workout } = useContext(NewWorkoutContext)
    const [allExercises, setAllExercises] = useState([])
    const [personalWorkout, setPersonalWorkout] = useState([])
    const [control, setControl] = useState()
    const [defaultIndex, setDefaultIndex] = useState(0)
    const [homeEx, setHomeEx] = useState()
    
    // * get home 10 exercises

    useEffect(()=>{
        fetch('http://localhost:5000/exercises?&_limit=10', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(json => setHomeEx(json))
                .catch(err => console.log(err));
    },[])
    // const salvar = () => {
    //     async function criarDado(bodyPart, equipment, gifUrl, id, name, target) {
    //         try {
    //             const exercises = await addDoc(collection(db, "ExercisesList"), {
    //                 bodyPart,
    //                 equipment,
    //                 gifUrl,
    //                 id,
    //                 name,
    //                 target,
    //             });

    //         } catch (e) {
    //             console.error("Error adding document: ", e);
    //         }
    //     }


    //     teste.forEach(element => {
    //         criarDado(
    //             element.bodyPart,
    //             element.equipment,
    //             element.gifUrl,
    //             element.id,
    //             element.name,
    //             element.target);
    //     });
    // }

    // * teste aqui em 

    // useEffect(() => {

        // const options = {
        //     method: 'GET',
        //     headers: {
        //         'X-RapidAPI-Key': '6ca8fb195cmsh9cf95519b725b09p1e5e10jsnf71ad1030aed',
        //         'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        //     }
        // };

        // fetch('https://exercisedb.p.rapidapi.com/exercises', options)
        //     .then(response => response.json())
        //     .then(response => console.log(response))
        //     .catch(err => console.error(err));

   // }, [])


    // * get exercises from json-server
    // useEffect(()=>{
    //     fetch('http://localhost:5000/exercises', {
    //             method: 'GET',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             }
    //         })
    //             .then(res => res.json())
    //             .then(json => setAllExercises(json))
    //             .catch(err => console.log(err));
    // }, [])

    // * get exercises from firebase

     useEffect(() => {
        const getUsers = async () => {
          const data = await getDocs(ExercisesCollectionRef);
          setAllExercises(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };

        getUsers();
     }, []);


    // * Save workout functions --------------------------------
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('workouts'))

        setPersonalWorkout(data)

    }, [workout, control])

    const getWorkouts = () => {
        const workouts = JSON.parse(localStorage.getItem('workouts') || '[]')

        return workouts
    }

    function deleteWorkout(ex) {
        const data = getWorkouts().filter((exercise) => exercise.id !== ex.id)
        localStorage.setItem('workouts', JSON.stringify(data))

        setControl(data)
    }




    return (
        <ExercisesContext.Provider value={{
            personalWorkout,
            deleteWorkout,
            allExercises,
            defaultIndex,
            setDefaultIndex,
            homeEx,
        }}>
            {children}
        </ExercisesContext.Provider>
    )
}