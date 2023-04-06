import { createContext, useContext, useEffect, useState } from "react"
import { ThemeContext } from "./ThemeContext";

import styles from '../styles/GlobalTheme.module.css'
import styleContext from '../styles/DentistContext.module.css'

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
            <div className = { theme === "dark" ? styles.dark +" " + styleContext.container : styles.ligh +" " + styleContext.container }>
                {props.children}
            </div>
        </DentistContext.Provider>
      
    )

}