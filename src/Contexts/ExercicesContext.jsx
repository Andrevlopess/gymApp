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
            "equipment": "cable",
            "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1324.gif",
            "id": "1324",
            "name": "cable upper row",
            "target": "upper back"
        },
        {
            "bodyPart": "shoulders",
            "equipment": "cable",
            "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0246.gif",
            "id": "0246",
            "name": "cable upright row",
            "target": "delts"
        },
        {
            "bodyPart": "back",
            "equipment": "cable",
            "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1325.gif",
            "id": "1325",
            "name": "cable wide grip rear pulldown behind neck",
            "target": "lats"
        },
        {
            "bodyPart": "lower arms",
            "equipment": "cable",
            "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0247.gif",
            "id": "0247",
            "name": "cable wrist curl",
            "target": "forearms"
        },
        {
            "bodyPart": "lower legs",
            "equipment": "body weight",
            "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1407.gif",
            "id": "1407",
            "name": "calf push stretch with hands against wall",
            "target": "calves"
        },
        {
            "bodyPart": "lower legs",
            "equipment": "body weight",
            "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1377.gif",
            "id": "1377",
            "name": "calf stretch with hands against wall",
            "target": "calves"
        },
        {
            "bodyPart": "lower legs",
            "equipment": "rope",
            "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1378.gif",
            "id": "1378",
            "name": "calf stretch with rope",
            "target": "calves"
        },
        {
            "bodyPart": "back",
            "equipment": "barbell",
            "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0248.gif",
            "id": "0248",
            "name": "cambered bar lying row",
            "target": "upper back"
        },
        {
            "bodyPart": "waist",
            "equipment": "body weight",
            "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/2963.gif",
            "id": "2963",
            "name": "captains chair straight leg raise",
            "target": "abs"
        },
        {
            "bodyPart": "upper legs",
            "equipment": "body weight",
            "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1548.gif",
            "id": "1548",
            "name": "chair leg extended stretch",
            "target": "quads"
        },
        {
            "bodyPart": "chest",
            "equipment": "body weight",
            "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1271.gif",
            "id": "1271",
            "name": "chest and front of shoulder stretch",
            "target": "pectorals"
        },
        {
            "bodyPart": "chest",
            "equipment": "body weight",
            "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0251.gif",
            "id": "0251",
            "name": "chest dip",
            "target": "pectorals"
        },
        {
            "bodyPart": "chest",
            "equipment": "body weight",
            "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1430.gif",
            "id": "1430",
            "name": "chest dip (on dip-pull-up cage)",
            "target": "pectorals"
        }
    ])

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