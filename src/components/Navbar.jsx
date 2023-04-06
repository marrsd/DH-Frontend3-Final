import { Link } from "react-router-dom"

import styles from '../styles/Navbar.module.css'
import { useContext } from "react"
import {ThemeContext} from "../context/ThemeContext"


export default function Navbar() {

    const { changeTheme } = useContext(ThemeContext);


    return(
        <div className={ styles.navbarContainer }>
            <Link to="/">Home</Link>
            <br />
            <Link to="/contact">Contacto</Link>
            <br />
            <Link to="/favs">Destacados</Link>
            <button onClick={changeTheme}><img src="src\assets\dark_theme.png" alt="no load" /></button>
        </div>
    )
}