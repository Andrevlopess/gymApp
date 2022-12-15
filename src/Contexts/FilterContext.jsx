import { useContext, useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { ExercisesContext } from "./ExercicesContext";

export const FilterContext = createContext()

function FilterProvider({ children }) {

    const { allExercises } = useContext(ExercisesContext)

    const [equipments, setEquipments] = useState([])
    const [bodyParts, setBodyParts] = useState([])
    const [targets, setTargets] = useState([])
    const [filterName, setFilterName] = useState('')
    const [filter, setFilter] = useState()

    useEffect(() => {
        setBodyParts([
            "back",
            "cardio",
            "chest",
            "lower arms",
            "lower legs",
            "neck",
            "shoulders",
            "upper arms",
            "upper legs",
            "waist"
        ])

        setEquipments([
            "assisted",
            "band",
            "barbell",
            "body weight",
            "bosu ball",
            "cable",
            "dumbbell",
            "roller",
            "elliptical machine",
            "ez barbell",
            "hammer",
            "kettlebell",
            "medicine ball",
            "leverage machine",
            "olympic barbell",
            "resistance band"
        ])
        setTargets([
            "abductors",
            "abs",
            "adductors",
            "biceps",
            "calves",
            "upper back",
            "cardiovascular system",
            "delts",
            "forearms",
            "glutes",
            "hamstrings",
            "lats",
            "levator scapulae",
            "pectorals",
            "quads",
            "serratus anterior",
            "spine",
            "traps",
            "triceps",
        ])

    }, [])

    function handleSearchExercises(filter, searched) {
        if (filter) {
            const searchExercises = searched ?
                searched.filter((item) =>
                    item.name.toLowerCase().includes(filter.toLowerCase())
                    || item.target.toLowerCase().includes(filter.toLowerCase())
                    || item.equipment.toLowerCase().includes(filter.toLowerCase())
                    || item.bodyPart.toLowerCase().includes(filter.toLowerCase()),)
                :
                allExercises.filter((item) =>
                    item.name.toLowerCase().includes(filter.toLowerCase())
                    || item.target.toLowerCase().includes(filter.toLowerCase())
                    || item.equipment.toLowerCase().includes(filter.toLowerCase())
                    || item.bodyPart.toLowerCase().includes(filter.toLowerCase()),)

            setFilter(searchExercises)
            setFilterName([...filterName], filter)
            

        }
    }
    console.log(filterName);


    return (
        <FilterContext.Provider value={{
            bodyParts,
            targets,
            equipments,
            handleSearchExercises,
            filter,
         filterName
        }}>
            {children}
        </FilterContext.Provider>
    )
}
export default FilterProvider