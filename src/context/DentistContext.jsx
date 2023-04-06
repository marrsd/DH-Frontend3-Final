import { createContext, useContext, useEffect, useState } from "react"
import styles from '../styles/GlobalTheme.module.css'
import { ThemeContext } from "./ThemeContext";


export const DentistContext = createContext()

export default function DentistProvider(props) {

    const { theme } = useContext(ThemeContext);
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
            <div className = { theme === "dark" ? styles.dark : styles.ligh }>
                {props.children}
            </div>
        </DentistContext.Provider>
      
    )

}