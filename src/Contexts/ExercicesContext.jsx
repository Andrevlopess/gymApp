import { useContext, useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { NewWorkoutContext } from "./NewWorkoutContext";

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
       
        setAllExercises([
            {
              "bodyPart": "waist",
              "equipment": "body weight",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0001.gif",
              "id": "0001",
              "name": "3/4 sit-up",
              "target": "abs"
            },
            {
              "bodyPart": "waist",
              "equipment": "body weight",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0002.gif",
              "id": "0002",
              "name": "45° side bend",
              "target": "abs"
            },
            {
              "bodyPart": "waist",
              "equipment": "body weight",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0003.gif",
              "id": "0003",
              "name": "air bike",
              "target": "abs"
            },
            {
              "bodyPart": "upper legs",
              "equipment": "body weight",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1512.gif",
              "id": "1512",
              "name": "all fours squad stretch",
              "target": "quads"
            },
            {
              "bodyPart": "waist",
              "equipment": "body weight",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0006.gif",
              "id": "0006",
              "name": "alternate heel touchers",
              "target": "abs"
            },
            {
              "bodyPart": "back",
              "equipment": "cable",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0007.gif",
              "id": "0007",
              "name": "alternate lateral pulldown",
              "target": "lats"
            },
            {
              "bodyPart": "lower legs",
              "equipment": "body weight",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1368.gif",
              "id": "1368",
              "name": "ankle circles",
              "target": "calves"
            },
            {
              "bodyPart": "back",
              "equipment": "body weight",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/3293.gif",
              "id": "3293",
              "name": "archer pull up",
              "target": "lats"
            },
            {
              "bodyPart": "chest",
              "equipment": "body weight",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/3294.gif",
              "id": "3294",
              "name": "archer push up",
              "target": "pectorals"
            },
            {
              "bodyPart": "waist",
              "equipment": "body weight",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/2355.gif",
              "id": "2355",
              "name": "arm slingers hanging bent knee legs",
              "target": "abs"
            },
            {
              "bodyPart": "waist",
              "equipment": "body weight",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/2333.gif",
              "id": "2333",
              "name": "arm slingers hanging straight legs",
              "target": "abs"
            },
            {
              "bodyPart": "upper legs",
              "equipment": "body weight",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/3214.gif",
              "id": "3214",
              "name": "arms apart circular toe touch (male)",
              "target": "glutes"
            },
            {
              "bodyPart": "waist",
              "equipment": "body weight",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/3204.gif",
              "id": "3204",
              "name": "arms overhead full sit-up (male)",
              "target": "abs"
            },
            {
              "bodyPart": "chest",
              "equipment": "leverage machine",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0009.gif",
              "id": "0009",
              "name": "assisted chest dip (kneeling)",
              "target": "pectorals"
            },
            {
              "bodyPart": "waist",
              "equipment": "assisted",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0011.gif",
              "id": "0011",
              "name": "assisted hanging knee raise",
              "target": "abs"
            },
            {
              "bodyPart": "waist",
              "equipment": "assisted",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0010.gif",
              "id": "0010",
              "name": "assisted hanging knee raise with throw down",
              "target": "abs"
            },
            {
              "bodyPart": "lower legs",
              "equipment": "assisted",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1708.gif",
              "id": "1708",
              "name": "assisted lying calves stretch",
              "target": "calves"
            },
            {
              "bodyPart": "upper legs",
              "equipment": "assisted",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1709.gif",
              "id": "1709",
              "name": "assisted lying glutes stretch",
              "target": "glutes"
            },
            {
              "bodyPart": "upper legs",
              "equipment": "assisted",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1710.gif",
              "id": "1710",
              "name": "assisted lying gluteus and piriformis stretch",
              "target": "glutes"
            },
            {
              "bodyPart": "waist",
              "equipment": "assisted",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0012.gif",
              "id": "0012",
              "name": "assisted lying leg raise with lateral throw down",
              "target": "abs"
            },
            {
              "bodyPart": "waist",
              "equipment": "assisted",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0013.gif",
              "id": "0013",
              "name": "assisted lying leg raise with throw down",
              "target": "abs"
            },
            {
              "bodyPart": "waist",
              "equipment": "medicine ball",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0014.gif",
              "id": "0014",
              "name": "assisted motion russian twist",
              "target": "abs"
            },
            {
              "bodyPart": "back",
              "equipment": "leverage machine",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0015.gif",
              "id": "0015",
              "name": "assisted parallel close grip pull-up",
              "target": "lats"
            },
            {
              "bodyPart": "upper legs",
              "equipment": "assisted",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0016.gif",
              "id": "0016",
              "name": "assisted prone hamstring",
              "target": "hamstrings"
            },
            {
              "bodyPart": "upper legs",
              "equipment": "assisted",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1713.gif",
              "id": "1713",
              "name": "assisted prone lying quads stretch",
              "target": "quads"
            },
            {
              "bodyPart": "waist",
              "equipment": "assisted",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1714.gif",
              "id": "1714",
              "name": "assisted prone rectus femoris stretch",
              "target": "abs"
            },
            {
              "bodyPart": "back",
              "equipment": "leverage machine",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0017.gif",
              "id": "0017",
              "name": "assisted pull-up",
              "target": "lats"
            },
            {
              "bodyPart": "chest",
              "equipment": "assisted",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1716.gif",
              "id": "1716",
              "name": "assisted seated pectoralis major stretch with stability ball",
              "target": "pectorals"
            },
            {
              "bodyPart": "upper legs",
              "equipment": "assisted",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1712.gif",
              "id": "1712",
              "name": "assisted side lying adductor stretch",
              "target": "adductors"
            },
            {
              "bodyPart": "waist",
              "equipment": "assisted",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1758.gif",
              "id": "1758",
              "name": "assisted sit-up",
              "target": "abs"
            },
            {
              "bodyPart": "back",
              "equipment": "leverage machine",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1431.gif",
              "id": "1431",
              "name": "assisted standing chin-up",
              "target": "lats"
            },
            {
              "bodyPart": "back",
              "equipment": "leverage machine",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1432.gif",
              "id": "1432",
              "name": "assisted standing pull-up",
              "target": "lats"
            },
            {
              "bodyPart": "upper arms",
              "equipment": "assisted",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0018.gif",
              "id": "0018",
              "name": "assisted standing triceps extension (with towel)",
              "target": "triceps"
            },
            {
              "bodyPart": "upper arms",
              "equipment": "leverage machine",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0019.gif",
              "id": "0019",
              "name": "assisted triceps dip (kneeling)",
              "target": "triceps"
            },
            {
              "bodyPart": "chest",
              "equipment": "leverage machine",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/2364.gif",
              "id": "2364",
              "name": "assisted wide-grip chest dip (kneeling)",
              "target": "pectorals"
            },
            {
              "bodyPart": "cardio",
              "equipment": "body weight",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/3220.gif",
              "id": "3220",
              "name": "astride jumps (male)",
              "target": "cardiovascular system"
            },
            {
              "bodyPart": "cardio",
              "equipment": "body weight",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/3672.gif",
              "id": "3672",
              "name": "back and forth step",
              "target": "cardiovascular system"
            },
            {
              "bodyPart": "back",
              "equipment": "stability ball",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1314.gif",
              "id": "1314",
              "name": "back extension on exercise ball",
              "target": "spine"
            },
            {
              "bodyPart": "back",
              "equipment": "body weight",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/3297.gif",
              "id": "3297",
              "name": "back lever",
              "target": "upper back"
            },
            {
              "bodyPart": "back",
              "equipment": "body weight",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1405.gif",
              "id": "1405",
              "name": "back pec stretch",
              "target": "lats"
            },
            {
              "bodyPart": "upper legs",
              "equipment": "body weight",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1473.gif",
              "id": "1473",
              "name": "backward jump",
              "target": "quads"
            },
            {
              "bodyPart": "upper legs",
              "equipment": "body weight",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0020.gif",
              "id": "0020",
              "name": "balance board",
              "target": "quads"
            },
            {
              "bodyPart": "upper arms",
              "equipment": "band",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0968.gif",
              "id": "0968",
              "name": "band alternating biceps curl",
              "target": "biceps"
            },
            {
              "bodyPart": "waist",
              "equipment": "band",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0969.gif",
              "id": "0969",
              "name": "band alternating v-up",
              "target": "abs"
            },
            {
              "bodyPart": "back",
              "equipment": "band",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0970.gif",
              "id": "0970",
              "name": "band assisted pull-up",
              "target": "lats"
            },
            {
              "bodyPart": "waist",
              "equipment": "band",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0971.gif",
              "id": "0971",
              "name": "band assisted wheel rollerout",
              "target": "abs"
            },
            {
              "bodyPart": "chest",
              "equipment": "band",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1254.gif",
              "id": "1254",
              "name": "band bench press",
              "target": "pectorals"
            },
            {
              "bodyPart": "upper legs",
              "equipment": "band",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0980.gif",
              "id": "0980",
              "name": "band bent-over hip extension",
              "target": "glutes"
            },
            {
              "bodyPart": "waist",
              "equipment": "band",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0972.gif",
              "id": "0972",
              "name": "band bicycle crunch",
              "target": "abs"
            },
            {
              "bodyPart": "back",
              "equipment": "band",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0974.gif",
              "id": "0974",
              "name": "band close-grip pulldown",
              "target": "lats"
            },
            {
              "bodyPart": "upper arms",
              "equipment": "band",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0975.gif",
              "id": "0975",
              "name": "band close-grip push-up",
              "target": "triceps"
            },
            {
              "bodyPart": "upper arms",
              "equipment": "band",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0976.gif",
              "id": "0976",
              "name": "band concentration curl",
              "target": "biceps"
            },
            {
              "bodyPart": "back",
              "equipment": "band",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/3117.gif",
              "id": "3117",
              "name": "band fixed back close grip pulldown",
              "target": "lats"
            },
            {
              "bodyPart": "back",
              "equipment": "band",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/3116.gif",
              "id": "3116",
              "name": "band fixed back underhand pulldown",
              "target": "lats"
            },
            {
              "bodyPart": "shoulders",
              "equipment": "band",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0977.gif",
              "id": "0977",
              "name": "band front lateral raise",
              "target": "delts"
            },
            {
              "bodyPart": "shoulders",
              "equipment": "band",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0978.gif",
              "id": "0978",
              "name": "band front raise",
              "target": "delts"
            },
            {
              "bodyPart": "upper legs",
              "equipment": "band",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1408.gif",
              "id": "1408",
              "name": "band hip lift",
              "target": "glutes"
            },
            {
              "bodyPart": "waist",
              "equipment": "band",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0979.gif",
              "id": "0979",
              "name": "band horizontal pallof press",
              "target": "abs"
            },
            {
              "bodyPart": "waist",
              "equipment": "band",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0981.gif",
              "id": "0981",
              "name": "band jack knife sit-up",
              "target": "abs"
            },
            {
              "bodyPart": "back",
              "equipment": "band",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0983.gif",
              "id": "0983",
              "name": "band kneeling one arm pulldown",
              "target": "lats"
            },
            {
              "bodyPart": "waist",
              "equipment": "band",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0985.gif",
              "id": "0985",
              "name": "band kneeling twisting crunch",
              "target": "abs"
            },
            {
              "bodyPart": "upper legs",
              "equipment": "band",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0984.gif",
              "id": "0984",
              "name": "band lying hip internal rotation",
              "target": "glutes"
            },
            {
              "bodyPart": "waist",
              "equipment": "band",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1002.gif",
              "id": "1002",
              "name": "band lying straight leg raise",
              "target": "abs"
            },
            {
              "bodyPart": "upper arms",
              "equipment": "band",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0986.gif",
              "id": "0986",
              "name": "band one arm overhead biceps curl",
              "target": "biceps"
            },
            {
              "bodyPart": "upper legs",
              "equipment": "band",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0987.gif",
              "id": "0987",
              "name": "band one arm single leg split squat",
              "target": "quads"
            },
            {
              "bodyPart": "back",
              "equipment": "band",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0988.gif",
              "id": "0988",
              "name": "band one arm standing low row",
              "target": "upper back"
            },
            {
              "bodyPart": "chest",
              "equipment": "band",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0989.gif",
              "id": "0989",
              "name": "band one arm twisting chest press",
              "target": "pectorals"
            },
            {
              "bodyPart": "back",
              "equipment": "band",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0990.gif",
              "id": "0990",
              "name": "band one arm twisting seated row",
              "target": "upper back"
            },
            {
              "bodyPart": "upper legs",
              "equipment": "band",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0991.gif",
              "id": "0991",
              "name": "band pull through",
              "target": "glutes"
            },
            {
              "bodyPart": "waist",
              "equipment": "band",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0992.gif",
              "id": "0992",
              "name": "band push sit-up",
              "target": "abs"
            },
            {
              "bodyPart": "shoulders",
              "equipment": "band",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0993.gif",
              "id": "0993",
              "name": "band reverse fly",
              "target": "delts"
            },
            {
              "bodyPart": "lower arms",
              "equipment": "band",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0994.gif",
              "id": "0994",
              "name": "band reverse wrist curl",
              "target": "forearms"
            },
            {
              "bodyPart": "upper legs",
              "equipment": "band",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0996.gif",
              "id": "0996",
              "name": "band seated hip internal rotation",
              "target": "glutes"
            },
            {
              "bodyPart": "waist",
              "equipment": "band",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1011.gif",
              "id": "1011",
              "name": "band seated twist",
              "target": "abs"
            },
            {
              "bodyPart": "shoulders",
              "equipment": "band",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0997.gif",
              "id": "0997",
              "name": "band shoulder press",
              "target": "delts"
            },
            {
              "bodyPart": "back",
              "equipment": "band",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1018.gif",
              "id": "1018",
              "name": "band shrug",
              "target": "traps"
            },
            {
              "bodyPart": "upper arms",
              "equipment": "band",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0998.gif",
              "id": "0998",
              "name": "band side triceps extension",
              "target": "triceps"
            },
            {
              "bodyPart": "lower legs",
              "equipment": "band",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0999.gif",
              "id": "0999",
              "name": "band single leg calf raise",
              "target": "calves"
            },
            {
              "bodyPart": "lower legs",
              "equipment": "band",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1000.gif",
              "id": "1000",
              "name": "band single leg reverse calf raise",
              "target": "calves"
            },
            {
              "bodyPart": "upper legs",
              "equipment": "band",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1001.gif",
              "id": "1001",
              "name": "band single leg split squat",
              "target": "quads"
            },
            {
              "bodyPart": "upper legs",
              "equipment": "band",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1004.gif",
              "id": "1004",
              "name": "band squat",
              "target": "glutes"
            },
            {
              "bodyPart": "upper legs",
              "equipment": "band",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1003.gif",
              "id": "1003",
              "name": "band squat row",
              "target": "glutes"
            },
            {
              "bodyPart": "waist",
              "equipment": "band",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1005.gif",
              "id": "1005",
              "name": "band standing crunch",
              "target": "abs"
            },
            {
              "bodyPart": "shoulders",
              "equipment": "band",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1022.gif",
              "id": "1022",
              "name": "band standing rear delt row",
              "target": "delts"
            },
            {
              "bodyPart": "waist",
              "equipment": "band",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1007.gif",
              "id": "1007",
              "name": "band standing twisting crunch",
              "target": "abs"
            },
            {
              "bodyPart": "upper legs",
              "equipment": "band",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1008.gif",
              "id": "1008",
              "name": "band step-up",
              "target": "glutes"
            },
            {
              "bodyPart": "upper legs",
              "equipment": "band",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1009.gif",
              "id": "1009",
              "name": "band stiff leg deadlift",
              "target": "glutes"
            },
            {
              "bodyPart": "upper legs",
              "equipment": "band",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1023.gif",
              "id": "1023",
              "name": "band straight back stiff leg deadlift",
              "target": "glutes"
            },
            {
              "bodyPart": "back",
              "equipment": "band",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1010.gif",
              "id": "1010",
              "name": "band straight leg deadlift",
              "target": "spine"
            },
            {
              "bodyPart": "shoulders",
              "equipment": "band",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1012.gif",
              "id": "1012",
              "name": "band twisting overhead press",
              "target": "delts"
            },
            {
              "bodyPart": "lower legs",
              "equipment": "band",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1369.gif",
              "id": "1369",
              "name": "band two legs calf raise - (band under both legs) v. 2",
              "target": "calves"
            },
            {
              "bodyPart": "back",
              "equipment": "band",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1013.gif",
              "id": "1013",
              "name": "band underhand pulldown",
              "target": "lats"
            },
            {
              "bodyPart": "waist",
              "equipment": "band",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1014.gif",
              "id": "1014",
              "name": "band v-up",
              "target": "abs"
            },
            {
              "bodyPart": "waist",
              "equipment": "band",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1015.gif",
              "id": "1015",
              "name": "band vertical pallof press",
              "target": "abs"
            },
            {
              "bodyPart": "lower arms",
              "equipment": "band",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1016.gif",
              "id": "1016",
              "name": "band wrist curl",
              "target": "forearms"
            },
            {
              "bodyPart": "shoulders",
              "equipment": "band",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1017.gif",
              "id": "1017",
              "name": "band y-raise",
              "target": "delts"
            },
            {
              "bodyPart": "upper arms",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0023.gif",
              "id": "0023",
              "name": "barbell alternate biceps curl",
              "target": "biceps"
            },
            {
              "bodyPart": "upper legs",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0024.gif",
              "id": "0024",
              "name": "barbell bench front squat",
              "target": "quads"
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
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0026.gif",
              "id": "0026",
              "name": "barbell bench squat",
              "target": "quads"
            },
            {
              "bodyPart": "back",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1316.gif",
              "id": "1316",
              "name": "barbell bent arm pullover",
              "target": "lats"
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
              "bodyPart": "upper arms",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/2407.gif",
              "id": "2407",
              "name": "barbell biceps curl (with arm blaster)",
              "target": "biceps"
            },
            {
              "bodyPart": "upper legs",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0028.gif",
              "id": "0028",
              "name": "barbell clean and press",
              "target": "quads"
            },
            {
              "bodyPart": "upper legs",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0029.gif",
              "id": "0029",
              "name": "barbell clean-grip front squat",
              "target": "glutes"
            },
            {
              "bodyPart": "upper arms",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0030.gif",
              "id": "0030",
              "name": "barbell close-grip bench press",
              "target": "triceps"
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
              "bodyPart": "upper legs",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0032.gif",
              "id": "0032",
              "name": "barbell deadlift",
              "target": "glutes"
            },
            {
              "bodyPart": "chest",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0033.gif",
              "id": "0033",
              "name": "barbell decline bench press",
              "target": "pectorals"
            },
            {
              "bodyPart": "back",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0034.gif",
              "id": "0034",
              "name": "barbell decline bent arm pullover",
              "target": "lats"
            },
            {
              "bodyPart": "upper arms",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0035.gif",
              "id": "0035",
              "name": "barbell decline close grip to skull press",
              "target": "triceps"
            },
            {
              "bodyPart": "chest",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1255.gif",
              "id": "1255",
              "name": "barbell decline pullover",
              "target": "pectorals"
            },
            {
              "bodyPart": "chest",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0036.gif",
              "id": "0036",
              "name": "barbell decline wide-grip press",
              "target": "pectorals"
            },
            {
              "bodyPart": "back",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0037.gif",
              "id": "0037",
              "name": "barbell decline wide-grip pullover",
              "target": "lats"
            },
            {
              "bodyPart": "upper arms",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0038.gif",
              "id": "0038",
              "name": "barbell drag curl",
              "target": "biceps"
            },
            {
              "bodyPart": "lower legs",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1370.gif",
              "id": "1370",
              "name": "barbell floor calf raise",
              "target": "calves"
            },
            {
              "bodyPart": "upper legs",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0039.gif",
              "id": "0039",
              "name": "barbell front chest squat",
              "target": "glutes"
            },
            {
              "bodyPart": "shoulders",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0041.gif",
              "id": "0041",
              "name": "barbell front raise",
              "target": "delts"
            },
            {
              "bodyPart": "chest",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0040.gif",
              "id": "0040",
              "name": "barbell front raise and pullover",
              "target": "pectorals"
            },
            {
              "bodyPart": "upper legs",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0042.gif",
              "id": "0042",
              "name": "barbell front squat",
              "target": "glutes"
            },
            {
              "bodyPart": "upper legs",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0043.gif",
              "id": "0043",
              "name": "barbell full squat",
              "target": "glutes"
            },
            {
              "bodyPart": "upper legs",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1461.gif",
              "id": "1461",
              "name": "barbell full squat (back pov)",
              "target": "glutes"
            },
            {
              "bodyPart": "upper legs",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1462.gif",
              "id": "1462",
              "name": "barbell full squat (side pov)",
              "target": "glutes"
            },
            {
              "bodyPart": "upper legs",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1545.gif",
              "id": "1545",
              "name": "barbell full zercher squat",
              "target": "glutes"
            },
            {
              "bodyPart": "upper legs",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1409.gif",
              "id": "1409",
              "name": "barbell glute bridge",
              "target": "glutes"
            },
            {
              "bodyPart": "upper legs",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/3562.gif",
              "id": "3562",
              "name": "barbell glute bridge two legs on bench (male)",
              "target": "glutes"
            },
            {
              "bodyPart": "upper legs",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0044.gif",
              "id": "0044",
              "name": "barbell good morning",
              "target": "hamstrings"
            },
            {
              "bodyPart": "chest",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0045.gif",
              "id": "0045",
              "name": "barbell guillotine bench press",
              "target": "pectorals"
            },
            {
              "bodyPart": "upper legs",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0046.gif",
              "id": "0046",
              "name": "barbell hack squat",
              "target": "glutes"
            },
            {
              "bodyPart": "upper legs",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1436.gif",
              "id": "1436",
              "name": "barbell high bar squat",
              "target": "glutes"
            },
            {
              "bodyPart": "chest",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0047.gif",
              "id": "0047",
              "name": "barbell incline bench press",
              "target": "pectorals"
            },
            {
              "bodyPart": "upper arms",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1719.gif",
              "id": "1719",
              "name": "barbell incline close grip bench press",
              "target": "triceps"
            },
            {
              "bodyPart": "upper arms",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0048.gif",
              "id": "0048",
              "name": "barbell incline reverse-grip press",
              "target": "triceps"
            },
            {
              "bodyPart": "back",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0049.gif",
              "id": "0049",
              "name": "barbell incline row",
              "target": "upper back"
            },
            {
              "bodyPart": "chest",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0050.gif",
              "id": "0050",
              "name": "barbell incline shoulder raise",
              "target": "serratus anterior"
            },
            {
              "bodyPart": "upper legs",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0051.gif",
              "id": "0051",
              "name": "barbell jefferson squat",
              "target": "glutes"
            },
            {
              "bodyPart": "upper arms",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0052.gif",
              "id": "0052",
              "name": "barbell jm bench press",
              "target": "triceps"
            },
            {
              "bodyPart": "upper legs",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0053.gif",
              "id": "0053",
              "name": "barbell jump squat",
              "target": "glutes"
            },
            {
              "bodyPart": "upper legs",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1410.gif",
              "id": "1410",
              "name": "barbell lateral lunge",
              "target": "glutes"
            },
            {
              "bodyPart": "upper legs",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1435.gif",
              "id": "1435",
              "name": "barbell low bar squat",
              "target": "glutes"
            },
            {
              "bodyPart": "upper legs",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0054.gif",
              "id": "0054",
              "name": "barbell lunge",
              "target": "glutes"
            },
            {
              "bodyPart": "upper arms",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1720.gif",
              "id": "1720",
              "name": "barbell lying back of the head tricep extension",
              "target": "triceps"
            },
            {
              "bodyPart": "upper arms",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0055.gif",
              "id": "0055",
              "name": "barbell lying close-grip press",
              "target": "triceps"
            },
            {
              "bodyPart": "upper arms",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0056.gif",
              "id": "0056",
              "name": "barbell lying close-grip triceps extension",
              "target": "triceps"
            },
            {
              "bodyPart": "upper arms",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0057.gif",
              "id": "0057",
              "name": "barbell lying extension",
              "target": "triceps"
            },
            {
              "bodyPart": "upper legs",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0058.gif",
              "id": "0058",
              "name": "barbell lying lifting (on hip)",
              "target": "glutes"
            },
            {
              "bodyPart": "upper arms",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0059.gif",
              "id": "0059",
              "name": "barbell lying preacher curl",
              "target": "biceps"
            },
            {
              "bodyPart": "upper arms",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0061.gif",
              "id": "0061",
              "name": "barbell lying triceps extension",
              "target": "triceps"
            },
            {
              "bodyPart": "upper arms",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0060.gif",
              "id": "0060",
              "name": "barbell lying triceps extension skull crusher",
              "target": "triceps"
            },
            {
              "bodyPart": "upper legs",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0063.gif",
              "id": "0063",
              "name": "barbell narrow stance squat",
              "target": "glutes"
            },
            {
              "bodyPart": "back",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0064.gif",
              "id": "0064",
              "name": "barbell one arm bent over row",
              "target": "upper back"
            },
            {
              "bodyPart": "upper arms",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0065.gif",
              "id": "0065",
              "name": "barbell one arm floor press",
              "target": "triceps"
            },
            {
              "bodyPart": "upper legs",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0066.gif",
              "id": "0066",
              "name": "barbell one arm side deadlift",
              "target": "glutes"
            },
            {
              "bodyPart": "shoulders",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0067.gif",
              "id": "0067",
              "name": "barbell one arm snatch",
              "target": "delts"
            },
            {
              "bodyPart": "upper legs",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0068.gif",
              "id": "0068",
              "name": "barbell one leg squat",
              "target": "quads"
            },
            {
              "bodyPart": "upper legs",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0069.gif",
              "id": "0069",
              "name": "barbell overhead squat",
              "target": "quads"
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
              "bodyPart": "lower arms",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1412.gif",
              "id": "1412",
              "name": "barbell palms up wrist curl over a bench",
              "target": "forearms"
            },
            {
              "bodyPart": "back",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/3017.gif",
              "id": "3017",
              "name": "barbell pendlay row",
              "target": "upper back"
            },
            {
              "bodyPart": "upper arms",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1751.gif",
              "id": "1751",
              "name": "barbell pin presses",
              "target": "triceps"
            },
            {
              "bodyPart": "upper arms",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0070.gif",
              "id": "0070",
              "name": "barbell preacher curl",
              "target": "biceps"
            },
            {
              "bodyPart": "waist",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0071.gif",
              "id": "0071",
              "name": "barbell press sit-up",
              "target": "abs"
            },
            {
              "bodyPart": "upper arms",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0072.gif",
              "id": "0072",
              "name": "barbell prone incline curl",
              "target": "biceps"
            },
            {
              "bodyPart": "back",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0073.gif",
              "id": "0073",
              "name": "barbell pullover",
              "target": "lats"
            },
            {
              "bodyPart": "back",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0022.gif",
              "id": "0022",
              "name": "barbell pullover to press",
              "target": "lats"
            },
            {
              "bodyPart": "upper legs",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0074.gif",
              "id": "0074",
              "name": "barbell rack pull",
              "target": "glutes"
            },
            {
              "bodyPart": "shoulders",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0075.gif",
              "id": "0075",
              "name": "barbell rear delt raise",
              "target": "delts"
            },
            {
              "bodyPart": "shoulders",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0076.gif",
              "id": "0076",
              "name": "barbell rear delt row",
              "target": "delts"
            },
            {
              "bodyPart": "upper legs",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0078.gif",
              "id": "0078",
              "name": "barbell rear lunge",
              "target": "glutes"
            },
            {
              "bodyPart": "upper legs",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0077.gif",
              "id": "0077",
              "name": "barbell rear lunge v. 2",
              "target": "glutes"
            },
            {
              "bodyPart": "lower arms",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0079.gif",
              "id": "0079",
              "name": "barbell revers wrist curl v. 2",
              "target": "forearms"
            },
            {
              "bodyPart": "upper arms",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/2187.gif",
              "id": "2187",
              "name": "barbell reverse close-grip bench press",
              "target": "triceps"
            },
            {
              "bodyPart": "upper arms",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0080.gif",
              "id": "0080",
              "name": "barbell reverse curl",
              "target": "biceps"
            },
            {
              "bodyPart": "back",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0118.gif",
              "id": "0118",
              "name": "barbell reverse grip bent over row",
              "target": "upper back"
            },
            {
              "bodyPart": "chest",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1256.gif",
              "id": "1256",
              "name": "barbell reverse grip decline bench press",
              "target": "pectorals"
            },
            {
              "bodyPart": "chest",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1257.gif",
              "id": "1257",
              "name": "barbell reverse grip incline bench press",
              "target": "pectorals"
            },
            {
              "bodyPart": "back",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1317.gif",
              "id": "1317",
              "name": "barbell reverse grip incline bench row",
              "target": "upper back"
            },
            {
              "bodyPart": "upper arms",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1721.gif",
              "id": "1721",
              "name": "barbell reverse grip skullcrusher",
              "target": "triceps"
            },
            {
              "bodyPart": "upper arms",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0081.gif",
              "id": "0081",
              "name": "barbell reverse preacher curl",
              "target": "biceps"
            },
            {
              "bodyPart": "lower arms",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0082.gif",
              "id": "0082",
              "name": "barbell reverse wrist curl",
              "target": "forearms"
            },
            {
              "bodyPart": "waist",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0084.gif",
              "id": "0084",
              "name": "barbell rollerout",
              "target": "abs"
            },
            {
              "bodyPart": "waist",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0083.gif",
              "id": "0083",
              "name": "barbell rollerout from bench",
              "target": "abs"
            },
            {
              "bodyPart": "upper legs",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0085.gif",
              "id": "0085",
              "name": "barbell romanian deadlift",
              "target": "glutes"
            },
            {
              "bodyPart": "shoulders",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0086.gif",
              "id": "0086",
              "name": "barbell seated behind head military press",
              "target": "delts"
            },
            {
              "bodyPart": "shoulders",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0087.gif",
              "id": "0087",
              "name": "barbell seated bradford rocky press",
              "target": "delts"
            },
            {
              "bodyPart": "lower legs",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0088.gif",
              "id": "0088",
              "name": "barbell seated calf raise",
              "target": "calves"
            },
            {
              "bodyPart": "lower legs",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1371.gif",
              "id": "1371",
              "name": "barbell seated calf raise",
              "target": "calves"
            },
            {
              "bodyPart": "upper arms",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1718.gif",
              "id": "1718",
              "name": "barbell seated close grip behind neck triceps extension",
              "target": "triceps"
            },
            {
              "bodyPart": "upper arms",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0089.gif",
              "id": "0089",
              "name": "barbell seated close-grip concentration curl",
              "target": "biceps"
            },
            {
              "bodyPart": "upper legs",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0090.gif",
              "id": "0090",
              "name": "barbell seated good morning",
              "target": "glutes"
            },
            {
              "bodyPart": "shoulders",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0091.gif",
              "id": "0091",
              "name": "barbell seated overhead press",
              "target": "delts"
            },
            {
              "bodyPart": "upper arms",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0092.gif",
              "id": "0092",
              "name": "barbell seated overhead triceps extension",
              "target": "triceps"
            },
            {
              "bodyPart": "waist",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0094.gif",
              "id": "0094",
              "name": "barbell seated twist",
              "target": "abs"
            },
            {
              "bodyPart": "back",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0095.gif",
              "id": "0095",
              "name": "barbell shrug",
              "target": "traps"
            },
            {
              "bodyPart": "waist",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0096.gif",
              "id": "0096",
              "name": "barbell side bent v. 2",
              "target": "abs"
            },
            {
              "bodyPart": "upper legs",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0098.gif",
              "id": "0098",
              "name": "barbell side split squat",
              "target": "quads"
            },
            {
              "bodyPart": "upper legs",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0097.gif",
              "id": "0097",
              "name": "barbell side split squat v. 2",
              "target": "quads"
            },
            {
              "bodyPart": "upper legs",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1756.gif",
              "id": "1756",
              "name": "barbell single leg deadlift",
              "target": "glutes"
            },
            {
              "bodyPart": "upper legs",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0099.gif",
              "id": "0099",
              "name": "barbell single leg split squat",
              "target": "quads"
            },
            {
              "bodyPart": "waist",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/2799.gif",
              "id": "2799",
              "name": "barbell sitted alternate leg raise",
              "target": "abs"
            },
            {
              "bodyPart": "waist",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/2800.gif",
              "id": "2800",
              "name": "barbell sitted alternate leg raise (female)",
              "target": "abs"
            },
            {
              "bodyPart": "shoulders",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0100.gif",
              "id": "0100",
              "name": "barbell skier",
              "target": "delts"
            },
            {
              "bodyPart": "upper legs",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0101.gif",
              "id": "0101",
              "name": "barbell speed squat",
              "target": "glutes"
            },
            {
              "bodyPart": "upper legs",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/2810.gif",
              "id": "2810",
              "name": "barbell split squat v. 2",
              "target": "quads"
            },
            {
              "bodyPart": "upper legs",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0102.gif",
              "id": "0102",
              "name": "barbell squat (on knees)",
              "target": "quads"
            },
            {
              "bodyPart": "upper legs",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/2798.gif",
              "id": "2798",
              "name": "barbell squat jump step rear lunge",
              "target": "quads"
            },
            {
              "bodyPart": "waist",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0103.gif",
              "id": "0103",
              "name": "barbell standing ab rollerout",
              "target": "abs"
            },
            {
              "bodyPart": "lower arms",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0104.gif",
              "id": "0104",
              "name": "barbell standing back wrist curl",
              "target": "forearms"
            },
            {
              "bodyPart": "shoulders",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0105.gif",
              "id": "0105",
              "name": "barbell standing bradford press",
              "target": "delts"
            },
            {
              "bodyPart": "lower legs",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1372.gif",
              "id": "1372",
              "name": "barbell standing calf raise",
              "target": "calves"
            },
            {
              "bodyPart": "upper arms",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0106.gif",
              "id": "0106",
              "name": "barbell standing close grip curl",
              "target": "biceps"
            },
            {
              "bodyPart": "shoulders",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1456.gif",
              "id": "1456",
              "name": "barbell standing close grip military press",
              "target": "delts"
            },
            {
              "bodyPart": "upper arms",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/2414.gif",
              "id": "2414",
              "name": "barbell standing concentration curl",
              "target": "biceps"
            },
            {
              "bodyPart": "shoulders",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0107.gif",
              "id": "0107",
              "name": "barbell standing front raise over head",
              "target": "delts"
            },
            {
              "bodyPart": "lower legs",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0108.gif",
              "id": "0108",
              "name": "barbell standing leg calf raise",
              "target": "calves"
            },
            {
              "bodyPart": "upper arms",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0109.gif",
              "id": "0109",
              "name": "barbell standing overhead triceps extension",
              "target": "triceps"
            },
            {
              "bodyPart": "upper arms",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0110.gif",
              "id": "0110",
              "name": "barbell standing reverse grip curl",
              "target": "biceps"
            },
            {
              "bodyPart": "lower legs",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0111.gif",
              "id": "0111",
              "name": "barbell standing rocking leg calf raise",
              "target": "calves"
            },
            {
              "bodyPart": "waist",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0112.gif",
              "id": "0112",
              "name": "barbell standing twist",
              "target": "abs"
            },
            {
              "bodyPart": "upper arms",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1629.gif",
              "id": "1629",
              "name": "barbell standing wide grip biceps curl",
              "target": "biceps"
            },
            {
              "bodyPart": "shoulders",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1457.gif",
              "id": "1457",
              "name": "barbell standing wide military press",
              "target": "delts"
            },
            {
              "bodyPart": "upper arms",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0113.gif",
              "id": "0113",
              "name": "barbell standing wide-grip curl",
              "target": "biceps"
            },
            {
              "bodyPart": "upper legs",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0114.gif",
              "id": "0114",
              "name": "barbell step-up",
              "target": "glutes"
            },
            {
              "bodyPart": "upper legs",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0115.gif",
              "id": "0115",
              "name": "barbell stiff leg good morning",
              "target": "glutes"
            },
            {
              "bodyPart": "upper legs",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0116.gif",
              "id": "0116",
              "name": "barbell straight leg deadlift",
              "target": "hamstrings"
            },
            {
              "bodyPart": "upper legs",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0117.gif",
              "id": "0117",
              "name": "barbell sumo deadlift",
              "target": "glutes"
            },
            {
              "bodyPart": "shoulders",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/3305.gif",
              "id": "3305",
              "name": "barbell thruster",
              "target": "delts"
            },
            {
              "bodyPart": "shoulders",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0120.gif",
              "id": "0120",
              "name": "barbell upright row",
              "target": "delts"
            },
            {
              "bodyPart": "shoulders",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0119.gif",
              "id": "0119",
              "name": "barbell upright row v. 2",
              "target": "delts"
            },
            {
              "bodyPart": "shoulders",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0121.gif",
              "id": "0121",
              "name": "barbell upright row v. 3",
              "target": "delts"
            },
            {
              "bodyPart": "chest",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0122.gif",
              "id": "0122",
              "name": "barbell wide bench press",
              "target": "pectorals"
            },
            {
              "bodyPart": "chest",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1258.gif",
              "id": "1258",
              "name": "barbell wide reverse grip bench press",
              "target": "pectorals"
            },
            {
              "bodyPart": "upper legs",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0124.gif",
              "id": "0124",
              "name": "barbell wide squat",
              "target": "quads"
            },
            {
              "bodyPart": "shoulders",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0123.gif",
              "id": "0123",
              "name": "barbell wide-grip upright row",
              "target": "delts"
            },
            {
              "bodyPart": "lower arms",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0126.gif",
              "id": "0126",
              "name": "barbell wrist curl",
              "target": "forearms"
            },
            {
              "bodyPart": "lower arms",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0125.gif",
              "id": "0125",
              "name": "barbell wrist curl v. 2",
              "target": "forearms"
            },
            {
              "bodyPart": "upper legs",
              "equipment": "barbell",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0127.gif",
              "id": "0127",
              "name": "barbell zercher squat",
              "target": "glutes"
            },
            {
              "bodyPart": "upper legs",
              "equipment": "body weight",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/3212.gif",
              "id": "3212",
              "name": "basic toe touch (male)",
              "target": "glutes"
            },
            {
              "bodyPart": "shoulders",
              "equipment": "rope",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0128.gif",
              "id": "0128",
              "name": "battling ropes",
              "target": "delts"
            },
            {
              "bodyPart": "cardio",
              "equipment": "body weight",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/3360.gif",
              "id": "3360",
              "name": "bear crawl",
              "target": "cardiovascular system"
            },
            {
              "bodyPart": "chest",
              "equipment": "assisted",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1259.gif",
              "id": "1259",
              "name": "behind head chest stretch",
              "target": "pectorals"
            },
            {
              "bodyPart": "upper arms",
              "equipment": "body weight",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0129.gif",
              "id": "0129",
              "name": "bench dip (knees bent)",
              "target": "triceps"
            },
            {
              "bodyPart": "upper arms",
              "equipment": "body weight",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1399.gif",
              "id": "1399",
              "name": "bench dip on floor",
              "target": "triceps"
            },
            {
              "bodyPart": "upper legs",
              "equipment": "body weight",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0130.gif",
              "id": "0130",
              "name": "bench hip extension",
              "target": "glutes"
            },
            {
              "bodyPart": "back",
              "equipment": "body weight",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/3019.gif",
              "id": "3019",
              "name": "bench pull-ups",
              "target": "lats"
            },
            {
              "bodyPart": "upper legs",
              "equipment": "body weight",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/3639.gif",
              "id": "3639",
              "name": "bent knee lying twist (male)",
              "target": "glutes"
            },
            {
              "bodyPart": "upper arms",
              "equipment": "body weight",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1770.gif",
              "id": "1770",
              "name": "biceps leg concentration curl",
              "target": "biceps"
            },
            {
              "bodyPart": "upper arms",
              "equipment": "body weight",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0139.gif",
              "id": "0139",
              "name": "biceps narrow pull-ups",
              "target": "biceps"
            },
            {
              "bodyPart": "upper arms",
              "equipment": "body weight",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0140.gif",
              "id": "0140",
              "name": "biceps pull-up",
              "target": "biceps"
            },
            {
              "bodyPart": "upper arms",
              "equipment": "body weight",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0137.gif",
              "id": "0137",
              "name": "body-up",
              "target": "triceps"
            },
            {
              "bodyPart": "upper legs",
              "equipment": "body weight",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/3543.gif",
              "id": "3543",
              "name": "bodyweight drop jump squat",
              "target": "glutes"
            },
            {
              "bodyPart": "waist",
              "equipment": "body weight",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/3544.gif",
              "id": "3544",
              "name": "bodyweight incline side plank",
              "target": "abs"
            },
            {
              "bodyPart": "upper arms",
              "equipment": "body weight",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1771.gif",
              "id": "1771",
              "name": "bodyweight kneeling triceps extension",
              "target": "triceps"
            },
            {
              "bodyPart": "upper arms",
              "equipment": "body weight",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1769.gif",
              "id": "1769",
              "name": "bodyweight side lying biceps curl",
              "target": "biceps"
            },
            {
              "bodyPart": "back",
              "equipment": "body weight",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/3168.gif",
              "id": "3168",
              "name": "bodyweight squatting row",
              "target": "upper back"
            },
            {
              "bodyPart": "back",
              "equipment": "body weight",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/3167.gif",
              "id": "3167",
              "name": "bodyweight squatting row (with towel)",
              "target": "upper back"
            },
            {
              "bodyPart": "lower legs",
              "equipment": "body weight",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1373.gif",
              "id": "1373",
              "name": "bodyweight standing calf raise",
              "target": "calves"
            },
            {
              "bodyPart": "back",
              "equipment": "body weight",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/3156.gif",
              "id": "3156",
              "name": "bodyweight standing close-grip one arm row",
              "target": "upper back"
            },
            {
              "bodyPart": "back",
              "equipment": "body weight",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/3158.gif",
              "id": "3158",
              "name": "bodyweight standing close-grip row",
              "target": "upper back"
            },
            {
              "bodyPart": "back",
              "equipment": "body weight",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/3162.gif",
              "id": "3162",
              "name": "bodyweight standing one arm row",
              "target": "upper back"
            },
            {
              "bodyPart": "back",
              "equipment": "body weight",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/3161.gif",
              "id": "3161",
              "name": "bodyweight standing one arm row (with towel)",
              "target": "upper back"
            },
            {
              "bodyPart": "back",
              "equipment": "body weight",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/3166.gif",
              "id": "3166",
              "name": "bodyweight standing row",
              "target": "upper back"
            },
            {
              "bodyPart": "back",
              "equipment": "body weight",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/3165.gif",
              "id": "3165",
              "name": "bodyweight standing row (with towel)",
              "target": "upper back"
            },
            {
              "bodyPart": "waist",
              "equipment": "body weight",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0138.gif",
              "id": "0138",
              "name": "bottoms-up",
              "target": "abs"
            },
            {
              "bodyPart": "lower legs",
              "equipment": "body weight",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1374.gif",
              "id": "1374",
              "name": "box jump down with one leg stabilization",
              "target": "calves"
            },
            {
              "bodyPart": "waist",
              "equipment": "body weight",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/2466.gif",
              "id": "2466",
              "name": "bridge - mountain climber (cross body)",
              "target": "abs"
            },
            {
              "bodyPart": "cardio",
              "equipment": "body weight",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1160.gif",
              "id": "1160",
              "name": "burpee",
              "target": "cardiovascular system"
            },
            {
              "bodyPart": "waist",
              "equipment": "body weight",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0870.gif",
              "id": "0870",
              "name": "butt-ups",
              "target": "abs"
            },
            {
              "bodyPart": "upper legs",
              "equipment": "body weight",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1494.gif",
              "id": "1494",
              "name": "butterfly yoga pose",
              "target": "adductors"
            },
            {
              "bodyPart": "shoulders",
              "equipment": "cable",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0148.gif",
              "id": "0148",
              "name": "cable alternate shoulder press",
              "target": "delts"
            },
            {
              "bodyPart": "upper arms",
              "equipment": "cable",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0149.gif",
              "id": "0149",
              "name": "cable alternate triceps extension",
              "target": "triceps"
            },
            {
              "bodyPart": "upper legs",
              "equipment": "cable",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/3235.gif",
              "id": "3235",
              "name": "cable assisted inverse leg curl",
              "target": "hamstrings"
            },
            {
              "bodyPart": "back",
              "equipment": "cable",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0150.gif",
              "id": "0150",
              "name": "cable bar lateral pulldown",
              "target": "lats"
            },
            {
              "bodyPart": "chest",
              "equipment": "cable",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0151.gif",
              "id": "0151",
              "name": "cable bench press",
              "target": "pectorals"
            },
            {
              "bodyPart": "upper arms",
              "equipment": "cable",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1630.gif",
              "id": "1630",
              "name": "cable close grip curl",
              "target": "biceps"
            },
            {
              "bodyPart": "upper arms",
              "equipment": "cable",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1631.gif",
              "id": "1631",
              "name": "cable concentration curl",
              "target": "biceps"
            },
            {
              "bodyPart": "upper arms",
              "equipment": "cable",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0152.gif",
              "id": "0152",
              "name": "cable concentration extension (on knee)",
              "target": "triceps"
            },
            {
              "bodyPart": "back",
              "equipment": "cable",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0153.gif",
              "id": "0153",
              "name": "cable cross-over lateral pulldown",
              "target": "lats"
            },
            {
              "bodyPart": "shoulders",
              "equipment": "cable",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0154.gif",
              "id": "0154",
              "name": "cable cross-over revers fly",
              "target": "delts"
            },
            {
              "bodyPart": "chest",
              "equipment": "cable",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0155.gif",
              "id": "0155",
              "name": "cable cross-over variation",
              "target": "pectorals"
            },
            {
              "bodyPart": "upper arms",
              "equipment": "cable",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0868.gif",
              "id": "0868",
              "name": "cable curl",
              "target": "biceps"
            },
            {
              "bodyPart": "upper legs",
              "equipment": "cable",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0157.gif",
              "id": "0157",
              "name": "cable deadlift",
              "target": "glutes"
            },
            {
              "bodyPart": "chest",
              "equipment": "cable",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0158.gif",
              "id": "0158",
              "name": "cable decline fly",
              "target": "pectorals"
            },
            {
              "bodyPart": "chest",
              "equipment": "cable",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1260.gif",
              "id": "1260",
              "name": "cable decline one arm press",
              "target": "pectorals"
            },
            {
              "bodyPart": "chest",
              "equipment": "cable",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1261.gif",
              "id": "1261",
              "name": "cable decline press",
              "target": "pectorals"
            },
            {
              "bodyPart": "back",
              "equipment": "cable",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0159.gif",
              "id": "0159",
              "name": "cable decline seated wide-grip row",
              "target": "upper back"
            },
            {
              "bodyPart": "upper arms",
              "equipment": "cable",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1632.gif",
              "id": "1632",
              "name": "cable drag curl",
              "target": "biceps"
            },
            {
              "bodyPart": "back",
              "equipment": "cable",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0160.gif",
              "id": "0160",
              "name": "cable floor seated wide-grip row",
              "target": "upper back"
            },
            {
              "bodyPart": "shoulders",
              "equipment": "cable",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0161.gif",
              "id": "0161",
              "name": "cable forward raise",
              "target": "delts"
            },
            {
              "bodyPart": "shoulders",
              "equipment": "cable",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0162.gif",
              "id": "0162",
              "name": "cable front raise",
              "target": "delts"
            },
            {
              "bodyPart": "shoulders",
              "equipment": "cable",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0164.gif",
              "id": "0164",
              "name": "cable front shoulder raise",
              "target": "delts"
            },
            {
              "bodyPart": "upper arms",
              "equipment": "cable",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0165.gif",
              "id": "0165",
              "name": "cable hammer curl (with rope)",
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
              "bodyPart": "back",
              "equipment": "cable",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0167.gif",
              "id": "0167",
              "name": "cable high row (kneeling)",
              "target": "upper back"
            },
            {
              "bodyPart": "upper legs",
              "equipment": "cable",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0168.gif",
              "id": "0168",
              "name": "cable hip adduction",
              "target": "adductors"
            },
            {
              "bodyPart": "chest",
              "equipment": "cable",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0169.gif",
              "id": "0169",
              "name": "cable incline bench press",
              "target": "pectorals"
            },
            {
              "bodyPart": "back",
              "equipment": "cable",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1318.gif",
              "id": "1318",
              "name": "cable incline bench row",
              "target": "upper back"
            },
            {
              "bodyPart": "chest",
              "equipment": "cable",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0171.gif",
              "id": "0171",
              "name": "cable incline fly",
              "target": "pectorals"
            },
            {
              "bodyPart": "chest",
              "equipment": "cable",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0170.gif",
              "id": "0170",
              "name": "cable incline fly (on stability ball)",
              "target": "pectorals"
            },
            {
              "bodyPart": "back",
              "equipment": "cable",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0172.gif",
              "id": "0172",
              "name": "cable incline pushdown",
              "target": "lats"
            },
            {
              "bodyPart": "upper arms",
              "equipment": "cable",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0173.gif",
              "id": "0173",
              "name": "cable incline triceps extension",
              "target": "triceps"
            },
            {
              "bodyPart": "waist",
              "equipment": "cable",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0174.gif",
              "id": "0174",
              "name": "cable judo flip",
              "target": "abs"
            },
            {
              "bodyPart": "upper arms",
              "equipment": "cable",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0860.gif",
              "id": "0860",
              "name": "cable kickback",
              "target": "triceps"
            },
            {
              "bodyPart": "waist",
              "equipment": "cable",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0175.gif",
              "id": "0175",
              "name": "cable kneeling crunch",
              "target": "abs"
            },
            {
              "bodyPart": "shoulders",
              "equipment": "cable",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/3697.gif",
              "id": "3697",
              "name": "cable kneeling rear delt row (with rope) (male)",
              "target": "delts"
            },
            {
              "bodyPart": "upper arms",
              "equipment": "cable",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0176.gif",
              "id": "0176",
              "name": "cable kneeling triceps extension",
              "target": "triceps"
            },
            {
              "bodyPart": "back",
              "equipment": "cable",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/2330.gif",
              "id": "2330",
              "name": "cable lat pulldown full range of motion",
              "target": "lats"
            },
            {
              "bodyPart": "back",
              "equipment": "cable",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0177.gif",
              "id": "0177",
              "name": "cable lateral pulldown (with rope attachment)",
              "target": "lats"
            },
            {
              "bodyPart": "back",
              "equipment": "cable",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/2616.gif",
              "id": "2616",
              "name": "cable lateral pulldown with v-bar",
              "target": "lats"
            },
            {
              "bodyPart": "shoulders",
              "equipment": "cable",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0178.gif",
              "id": "0178",
              "name": "cable lateral raise",
              "target": "delts"
            },
            {
              "bodyPart": "chest",
              "equipment": "cable",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0179.gif",
              "id": "0179",
              "name": "cable low fly",
              "target": "pectorals"
            },
            {
              "bodyPart": "back",
              "equipment": "cable",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0180.gif",
              "id": "0180",
              "name": "cable low seated row",
              "target": "upper back"
            },
            {
              "bodyPart": "upper arms",
              "equipment": "cable",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1634.gif",
              "id": "1634",
              "name": "cable lying bicep curl",
              "target": "biceps"
            },
            {
              "bodyPart": "upper arms",
              "equipment": "cable",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0182.gif",
              "id": "0182",
              "name": "cable lying close-grip curl",
              "target": "biceps"
            },
            {
              "bodyPart": "back",
              "equipment": "cable",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0184.gif",
              "id": "0184",
              "name": "cable lying extension pullover (with rope attachment)",
              "target": "lats"
            },
            {
              "bodyPart": "chest",
              "equipment": "cable",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0185.gif",
              "id": "0185",
              "name": "cable lying fly",
              "target": "pectorals"
            },
            {
              "bodyPart": "upper arms",
              "equipment": "cable",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0186.gif",
              "id": "0186",
              "name": "cable lying triceps extension v. 2",
              "target": "triceps"
            },
            {
              "bodyPart": "chest",
              "equipment": "cable",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0188.gif",
              "id": "0188",
              "name": "cable middle fly",
              "target": "pectorals"
            },
            {
              "bodyPart": "back",
              "equipment": "cable",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0189.gif",
              "id": "0189",
              "name": "cable one arm bent over row",
              "target": "upper back"
            },
            {
              "bodyPart": "upper arms",
              "equipment": "cable",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0190.gif",
              "id": "0190",
              "name": "cable one arm curl",
              "target": "biceps"
            },
            {
              "bodyPart": "chest",
              "equipment": "cable",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1262.gif",
              "id": "1262",
              "name": "cable one arm decline chest fly",
              "target": "pectorals"
            },
            {
              "bodyPart": "chest",
              "equipment": "cable",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1263.gif",
              "id": "1263",
              "name": "cable one arm fly on exercise ball",
              "target": "pectorals"
            },
            {
              "bodyPart": "chest",
              "equipment": "cable",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1264.gif",
              "id": "1264",
              "name": "cable one arm incline fly on exercise ball",
              "target": "pectorals"
            },
            {
              "bodyPart": "chest",
              "equipment": "cable",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1265.gif",
              "id": "1265",
              "name": "cable one arm incline press",
              "target": "pectorals"
            },
            {
              "bodyPart": "chest",
              "equipment": "cable",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1266.gif",
              "id": "1266",
              "name": "cable one arm incline press on exercise ball",
              "target": "pectorals"
            },
            {
              "bodyPart": "chest",
              "equipment": "cable",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0191.gif",
              "id": "0191",
              "name": "cable one arm lateral bent-over",
              "target": "pectorals"
            },
            {
              "bodyPart": "shoulders",
              "equipment": "cable",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0192.gif",
              "id": "0192",
              "name": "cable one arm lateral raise",
              "target": "delts"
            },
            {
              "bodyPart": "upper arms",
              "equipment": "cable",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1633.gif",
              "id": "1633",
              "name": "cable one arm preacher curl",
              "target": "biceps"
            },
            {
              "bodyPart": "chest",
              "equipment": "cable",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1267.gif",
              "id": "1267",
              "name": "cable one arm press on exercise ball",
              "target": "pectorals"
            },
            {
              "bodyPart": "back",
              "equipment": "cable",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/3563.gif",
              "id": "3563",
              "name": "cable one arm pulldown",
              "target": "lats"
            },
            {
              "bodyPart": "upper arms",
              "equipment": "cable",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1635.gif",
              "id": "1635",
              "name": "cable one arm reverse preacher curl",
              "target": "biceps"
            },
            {
              "bodyPart": "back",
              "equipment": "cable",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0193.gif",
              "id": "0193",
              "name": "cable one arm straight back high row (kneeling)",
              "target": "upper back"
            },
            {
              "bodyPart": "upper arms",
              "equipment": "cable",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1723.gif",
              "id": "1723",
              "name": "cable one arm tricep pushdown",
              "target": "triceps"
            },
            {
              "bodyPart": "upper arms",
              "equipment": "cable",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1636.gif",
              "id": "1636",
              "name": "cable overhead curl",
              "target": "biceps"
            },
            {
              "bodyPart": "upper arms",
              "equipment": "cable",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1637.gif",
              "id": "1637",
              "name": "cable overhead curl on exercise ball",
              "target": "biceps"
            },
            {
              "bodyPart": "upper arms",
              "equipment": "cable",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0194.gif",
              "id": "0194",
              "name": "cable overhead triceps extension (rope attachment)",
              "target": "triceps"
            },
            {
              "bodyPart": "back",
              "equipment": "cable",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1319.gif",
              "id": "1319",
              "name": "cable palm rotational row",
              "target": "upper back"
            },
            {
              "bodyPart": "upper arms",
              "equipment": "cable",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0195.gif",
              "id": "0195",
              "name": "cable preacher curl",
              "target": "biceps"
            },
            {
              "bodyPart": "chest",
              "equipment": "cable",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1268.gif",
              "id": "1268",
              "name": "cable press on exercise ball",
              "target": "pectorals"
            },
            {
              "bodyPart": "upper legs",
              "equipment": "cable",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0196.gif",
              "id": "0196",
              "name": "cable pull through (with rope)",
              "target": "glutes"
            },
            {
              "bodyPart": "back",
              "equipment": "cable",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0198.gif",
              "id": "0198",
              "name": "cable pulldown",
              "target": "lats"
            },
            {
              "bodyPart": "back",
              "equipment": "cable",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0197.gif",
              "id": "0197",
              "name": "cable pulldown (pro lat bar)",
              "target": "lats"
            },
            {
              "bodyPart": "upper arms",
              "equipment": "cable",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/1638.gif",
              "id": "1638",
              "name": "cable pulldown bicep curl",
              "target": "biceps"
            },
            {
              "bodyPart": "upper arms",
              "equipment": "cable",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0201.gif",
              "id": "0201",
              "name": "cable pushdown",
              "target": "triceps"
            },
            {
              "bodyPart": "back",
              "equipment": "cable",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0199.gif",
              "id": "0199",
              "name": "cable pushdown (straight arm) v. 2",
              "target": "lats"
            },
            {
              "bodyPart": "upper arms",
              "equipment": "cable",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0200.gif",
              "id": "0200",
              "name": "cable pushdown (with rope attachment)",
              "target": "triceps"
            },
            {
              "bodyPart": "shoulders",
              "equipment": "cable",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0202.gif",
              "id": "0202",
              "name": "cable rear delt row (stirrups)",
              "target": "delts"
            },
            {
              "bodyPart": "shoulders",
              "equipment": "cable",
              "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0203.gif",
              "id": "0203",
              "name": "cable rear delt row (with rope)",
              "target": "delts"
            }])

    }, [])

    useEffect(()=>{
        const data = JSON.parse(localStorage.getItem('workouts'))

       setPersonalWorkout(data)

    },[workout])




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