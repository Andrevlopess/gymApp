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
            "elliptical machine",
            "ez barbell",
            "hammer",
            "kettlebell",
            "leverage machine",
            "medicine ball",
            "olympic barbell",
            "resistance band",
            "roller"
        ])
        setTargets([
            "abductors",
            "abs",
            "adductors",
            "biceps",
            "calves",
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
            "upper back"
        ])

    }, [])


    return (
        <FilterContext.Provider value={{ bodyParts, targets, equipments }}>
            {children}
        </FilterContext.Provider>
    )
}
export default FilterProvider