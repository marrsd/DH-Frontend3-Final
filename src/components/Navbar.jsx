import { Link } from "react-router-dom"

import styles from '../styles/Navbar.module.css'
import { useContext } from "react"
import {ThemeContext} from "../context/ThemeContext"


export default function Navbar() {

    const {theme, changeTheme} = useContext(ThemeContext);


    return(
        <div className={ styles.navbarContainer }>
            <Link to="/">Home</Link>
            <br />
            <Link to="/contacto">Contacto</Link>
            <br />
            <Link to="/destacados">Destacados</Link>
            <button onClick={changeTheme}><img src="src\assets\dark_theme.png" alt="no load" /></button>
        </div>
    )
}