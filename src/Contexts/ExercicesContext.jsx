import { useContext, useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { NewWorkoutContext } from "./NewWorkoutContext";
import { initializeApp } from "firebase/app";
import { exercises } from './Exercises.js'
import { getFirestore, collection, getDocs, addDoc, doc, updateDoc } from "firebase/firestore";
import { toast } from "react-hot-toast";


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
    const [isLoading, setIsLoading] = useState(true)
    const [homeEx, setHomeEx] = useState([
        {
            "bodyPart": "shoulders",
            "equipment": "dumbbell",
            "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0334.gif",
            "id": "0334",
            "name": "dumbbell lateral raise",
            "target": "delts"
        },
        {
            "bodyPart": "chest",
            "equipment": "barbell",
            "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0025.gif",
            "id": "0025",
            "name": "barbell bench press",
            "target": "pectorals"
        },
        {
            "bodyPart": "upper legs",
            "equipment": "sled machine",
            "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0739.gif",
            "id": "0739",
            "name": "sled 45???? leg press",
            "target": "glutes"
        },
        {
            "bodyPart": "back",
            "equipment": "barbell",
            "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0027.gif",
            "id": "0027",
            "name": "barbell bent over row",
            "target": "upper back"
        },
        {
            "bodyPart": "waist",
            "equipment": "body weight",
            "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0001.gif",
            "id": "0001",
            "name": "3/4 sit-up",
            "target": "abs"
        },
        {
            "bodyPart": "upper arms",
            "equipment": "barbell",
            "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0031.gif",
            "id": "0031",
            "name": "barbell curl",
            "target": "biceps"
        },
        {
            "bodyPart": "upper arms",
            "equipment": "cable",
            "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1722.gif",
            "id": "1722",
            "name": "cable high pulley overhead tricep extension",
            "target": "triceps"
        },
        {
            "bodyPart": "lower arms",
            "equipment": "barbell",
            "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1411.gif",
            "id": "1411",
            "name": "barbell palms down wrist curl over a bench",
            "target": "forearms"
        },
        {
            "bodyPart": "back",
            "equipment": "cable",
            "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0818.gif",
            "id": "0818",
            "name": "twin handle parallel grip lat pulldown",
            "target": "lats"
        }

    ])

    // * Save on firebase functionality
    // const salvar = () => {
    //         async function criarDado(bodyPart, equipment, gifUrl, id, name, target, liked) {
    //             try {
    //                 const exercises = await addDoc(collection(db, "ExercisesList"), {
    //                     bodyPart,
    //                     equipment,
    //                     gifUrl,
    //                     id,
    //                     name,
    //                     target,
    //                     liked
    //                 });

    //             } catch (e) {
    //                 console.error("Error adding document: ", e);
    //             }
    //         }


    //         allExercises.forEach(element => {
    //             criarDado(
    //                 element.bodyPart,
    //                 element.equipment,
    //                 element.gifUrl,
    //                 element.id,
    //                 element.name,
    //                 element.target,
    //                 false
    //                 );
    //         });
    //     }

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
    // useEffect(() => {
    //     fetch('http://localhost:5000/exercises', {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //         .then(res => res.json())
    //         .then(json => setAllExercises(json))
    //         .catch(err => console.log(err));
    // }, [])

    // * get exercises from firebase limit=50000/day

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(ExercisesCollectionRef);
            setAllExercises(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            setIsLoading(false)
        };

        getUsers();
    }, []);


    // * Save workout functions --------------------------------
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('workouts') || '[]')

        setPersonalWorkout(data)

    }, [workout, control])

    const getWorkouts = () => {
        const workouts = JSON.parse(localStorage.getItem('workouts') || '[]')
        return workouts
    }

    const getLikedEx = () => {
        const likedExercises = JSON.parse(localStorage.getItem('likedEx') || '[]')
        return likedExercises
    }

    function deleteWorkout(ex) {
        const data = getWorkouts().filter((exercise) => exercise.id !== ex.id)
        localStorage.setItem('workouts', JSON.stringify(data))

        setControl(data)
    }

    function updateWorkout(ex, workout) {
        const data = getWorkouts().filter((wkt) => wkt.id !== workout.id)


        console.log(workout.workout);
        console.log(ex.id);

        const alreadyExists = workout.workout.filter((exer) => exer.id === ex.id)

        if (alreadyExists.length) {

            toast.error(`${ex.name} already exists in ${workout.title}`, { duration: 4000 })

        } else {

            workout.workout.push(ex)

            data.push({
                ...workout,
            })


            localStorage.setItem('workouts', JSON.stringify(data))
            setControl(data)

            toast.success(`${ex.name} has been added to ${workout.title} workout!`,
                {
                    duration: 4000,
                }
            )
        }


    }


    function addLikedEx(ex) {
        const likedExercises = getLikedEx()

        const alreadyLiked = likedExercises.filter((exercise) => exercise.id === ex.id)

        if (!alreadyLiked.length) {

            ex.liked = true
            likedExercises.push(ex)
            localStorage.setItem('likedEx', JSON.stringify(likedExercises))

        } else if (alreadyLiked.length) {

            const removeLikedEx = getLikedEx().filter((exercise) => exercise.id !== ex.id)

            localStorage.setItem('likedEx', JSON.stringify(removeLikedEx))
        }
    }

    function removeLikedEx(ex) {
        const removeLikedEx = getLikedEx().filter((exercise) => exercise.id !== ex.id)

        localStorage.setItem('likedEx', JSON.stringify(removeLikedEx))
    }



    return (
        <ExercisesContext.Provider value={{
            personalWorkout,
            deleteWorkout,
            updateWorkout,
            allExercises,
            defaultIndex,
            setDefaultIndex,
            getLikedEx,
            addLikedEx,
            removeLikedEx,
            isLoading,
            homeEx,
        }}>
            {children}
        </ExercisesContext.Provider>
    )
}