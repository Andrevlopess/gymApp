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
    console.log(exTable);

    return(
        <NewWorkoutContext.Provider value={{
            addExTable,
            setWorkoutTitle,
            setDescription,
            exTable
        }}>
            {children}
        </NewWorkoutContext.Provider>
    )
}

export default NewWorkoutProvider