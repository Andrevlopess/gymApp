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
    const [homeEx, setHomeEx] = useState([
        {
            "bodyPart": "back",
            "equipment": "rope",
            "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0680.gif",
            "id": "0680",
            "name": "rope climb",
            "target": "upper back"
        },
        {
            "bodyPart": "cardio",
            "equipment": "body weight",
            "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0685.gif",
            "id": "0685",
            "name": "run",
            "target": "cardiovascular system"
        },
        {
            "bodyPart": "cardio",
            "equipment": "body weight",
            "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0684.gif",
            "id": "0684",
            "name": "run (equipment)",
            "target": "cardiovascular system"
        },
        {
            "bodyPart": "upper legs",
            "equipment": "body weight",
            "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1585.gif",
            "id": "1585",
            "name": "runners stretch",
            "target": "hamstrings"
        },
        {
            "bodyPart": "waist",
            "equipment": "body weight",
            "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0687.gif",
            "id": "0687",
            "name": "russian twist",
            "target": "abs"
        },
        {
            "bodyPart": "back",
            "equipment": "body weight",
            "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/3012.gif",
            "id": "3012",
            "name": "scapula dips",
            "target": "traps"
        },
        {
            "bodyPart": "chest",
            "equipment": "body weight",
            "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/3021.gif",
            "id": "3021",
            "name": "scapula push-up",
            "target": "serratus anterior"
        },
        {
            "bodyPart": "back",
            "equipment": "body weight",
            "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0688.gif",
            "id": "0688",
            "name": "scapular pull-up",
            "target": "traps"
        },
        {
            "bodyPart": "cardio",
            "equipment": "body weight",
            "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/3219.gif",
            "id": "3219",
            "name": "scissor jumps (male)",
            "target": "cardiovascular system"
        },
        {
            "bodyPart": "lower legs",
            "equipment": "body weight",
            "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1390.gif",
            "id": "1390",
            "name": "seated calf stretch",
            "target": "calves"
        }
    ])

    // * get all exercises from rapid.api 

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
    useEffect(() => {
        fetch('http://localhost:5000/exercises', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(json => setAllExercises(json))
            .catch(err => console.log(err));
    }, [])

    // * get exercises from firebase limit=50000/day

    //  useEffect(() => {
    //         const getUsers = async () => {
    //               const data = await getDocs(ExercisesCollectionRef);
    //       setAllExercises(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    //     };
    //     getUsers();


    //  }, []);


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