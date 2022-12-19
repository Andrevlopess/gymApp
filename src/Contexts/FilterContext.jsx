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

    function handleFilterExercises(filter, searched) {
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
                

            setSearchedEx(searchExercises)
            setFilterName([...filterName, filter])
            
        }
    }

    function handleSearchExercises() {
        if (search) {
            const searchExercises = allExercises.filter((item) =>
                item.name.toLowerCase().includes(search.toLowerCase())
                || item.target.toLowerCase().includes(search.toLowerCase())
                || item.equipment.toLowerCase().includes(search.toLowerCase())
                || item.bodyPart.toLowerCase().includes(search.toLowerCase()),)


            if (searchExercises) {
                setTitle(search)
                setSearch('')
                setSearchedEx(searchExercises)
            } else {
                alert('erro')
            }
        }
    }

    function removeFilter(params) {
        setFilter('')
        setFilterName('')
    }




    return (
        <FilterContext.Provider value={{
            bodyParts,
            targets,
            equipments,
            handleFilterExercises,
            filter,
            filterName,
            searchedEx, 
            setSearch,
            handleSearchExercises,
            search,
            title,
            removeFilter
        }}>
            {children}
        </FilterContext.Provider>
    )
}
export default FilterProvider