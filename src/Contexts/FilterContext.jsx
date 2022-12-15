import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";

export const FilterContext = createContext()

function FilterProvider({ children }) {

    const [equipments, setEquipments] = useState([])
    const [bodyParts, setBodyParts] = useState([])
    const [targets, setTargets] = useState([])

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


    return (
        <FilterContext.Provider value={{ bodyParts, targets, equipments }}>
            {children}
        </FilterContext.Provider>
    )
}
export default FilterProvider