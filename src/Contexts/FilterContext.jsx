import { useContext, useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { ExercisesContext } from "./ExercicesContext";

export const FilterContext = createContext()

function FilterProvider({ children }) {

    const { allExercises } = useContext(ExercisesContext)

    const [filterName, setFilterName] = useState([])
    const [filter, setFilter] = useState()
    const [searchedEx, setSearchedEx] = useState('')
    const [search, setSearch] = useState('')
    const [title, setTitle] = useState('')


    function handleSearchExercises() {

        if (search) {
            const searchExercises = allExercises.filter((item) =>
            item.name.toLowerCase().includes(search.toLowerCase())
            || item.target.toLowerCase().includes(search.toLowerCase())
            || item.equipment.toLowerCase().includes(search.toLowerCase())
            || item.bodyPart.toLowerCase().includes(search.toLowerCase()))


            if (searchExercises) {
                setTitle(search)
                setSearch(search)
                setSearchedEx(searchExercises)
            }
        }
    }

    function removeSearch(){
        setSearchedEx('')
        setSearch('')
    }




    return (
        <FilterContext.Provider value={{
            filter,
            filterName,
            searchedEx, 
            setSearch,
            handleSearchExercises,
            removeSearch,
            search,
            title,
        }}>
            {children}
        </FilterContext.Provider>
    )
}
export default FilterProvider