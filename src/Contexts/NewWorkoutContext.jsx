import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const NewWorkoutContext = createContext()

function NewWorkoutProvider({children}){

    const [exTable, setExTable] = useState([])
    const [workoutTitle, setWorkoutTitle] = useState()
    const [description, setDescription] = useState()


    const addExTable = (ex) => {
        setExTable([...exTable, ex])
    }
    const changeTitle= (title) => {
        setWorkoutTitle(title)
    }

    const changeDescription= (desc) => {
        setDescription(desc)
    }
    console.log(workoutTitle, description);
    console.log(exTable);



    return(
        <NewWorkoutContext.Provider value={{
            addExTable,
            changeTitle,
            changeDescription,
            exTable
        }}>
            {children}
        </NewWorkoutContext.Provider>
    )
}

export default NewWorkoutProvider