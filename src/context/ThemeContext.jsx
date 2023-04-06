import { createContext, useState } from "react";

import styles from '../styles/GlobalTheme.module.css'


export const ThemeContext = createContext();

export default function ThemeContextProvider(props){

    const [theme, setTheme] = useState("light");

    function changeTheme (){
        setTheme(theme === "light"? "dark": "light")
        console.log("cambio tema");
    }

    const value = {
        theme,
        changeTheme
    }


    return(
        <ThemeContext.Provider value = {value}>
            <div className = { theme === "dark" ? styles.dark : styles.light }>
                {props.children}
            </div>
        </ThemeContext.Provider>
    )
}