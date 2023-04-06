import { Link } from "react-router-dom"
import { useContext } from "react"
import {ThemeContext} from "../context/ThemeContext"

import styles from '../styles/Navbar.module.css'
import style from '../styles/GlobalTheme.module.css'

export default function Navbar() {

    const { theme, changeTheme } = useContext(ThemeContext);


    return(
        <div className={ styles.navbarContainer }>
            <div>
                <Link to="/" className = { theme === "dark" ? style.dark : style.ligh }>Home</Link>
                <Link to="/contact" className = { theme === "dark" ? style.dark : style.ligh }>Contacto</Link>
                <Link to="/favs" className = { theme === "dark" ? style.dark : style.ligh }>Destacados</Link>
            </div>
            <button onClick={changeTheme} >
                <img src="src\assets\dark_theme.png" alt="no load" className={ styles.themeImg }/>
            </button>
        </div>
    )
}