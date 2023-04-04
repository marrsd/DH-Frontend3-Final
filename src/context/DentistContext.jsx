import { createContext, useEffect, useState } from "react"

export const DentistContext = createContext()

export default function DentistProvider(props) {

    const [ dentists, setDentists ] = useState([])

    const getData = async() => {
        const data = await fetch("https://jsonplaceholder.typicode.com/users")
        const response = await data.json()
        setDentists(response)
    }

    useEffect(() => {
        try {
            getData()
            console.log("Data fetched");
        } catch (error) {
            console.log("Error fetching data");
        } 
    }, [])


    const value = { dentists }

    return(
      
        <DentistContext.Provider value={value}>
            {props.children}
        </DentistContext.Provider>
      
    )

}