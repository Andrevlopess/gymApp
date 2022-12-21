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
    const [filterName, setFilterName] = useState([])
    const [filter, setFilter] = useState()
    const [searchedEx, setSearchedEx] = useState('')
    const [search, setSearch] = useState('')
    const [title, setTitle] = useState('')

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


    function handleSearchExercises() {

        if (search) {
            const searchExercises = allExercises.filter((item) =>
            item.name.toLowerCase().includes(search.toLowerCase())
            || item.target.toLowerCase().includes(search.toLowerCase())
            || item.equipment.toLowerCase().includes(search.toLowerCase())
            || item.bodyPart.toLowerCase().includes(search.toLowerCase()))


            if (searchExercises) {
                setTitle(searchExercises[0].bodyPart)
                setSearch('')
                setSearchedEx(searchExercises)
            }
        }
    }





    return (
        <FilterContext.Provider value={{
            bodyParts,
            targets,
            equipments,
            filter,
            filterName,
            searchedEx, 
            setSearch,
            handleSearchExercises,
            search,
            title,
        }}>
            {children}
        </FilterContext.Provider>
    )
}
export default FilterProvider