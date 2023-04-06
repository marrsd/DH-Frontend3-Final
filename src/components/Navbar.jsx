import { Link } from "react-router-dom"
import { useContext } from "react"
import {ThemeContext} from "../context/ThemeContext"

import styles from '../styles/Navbar.module.css'
import stylesGlobal from '../styles/GlobalTheme.module.css'
import iconTheme from '../assets/dark_theme.png';

export default function Navbar() {

    const { theme, changeTheme } = useContext(ThemeContext);

    const styleTheme = theme === "dark" ? stylesGlobal.dark : stylesGlobal.light;

    return(
        <div className={ styles.navbarContainer }>
            <div>
                <Link to="/" className = { styleTheme }>Home</Link>
                <Link to="/contact" className = { styleTheme } >Contacto</Link>
                <Link to="/favs" className = { styleTheme } >Destacados</Link>
            </div>
            <button onClick={changeTheme}>
                <img src={iconTheme} alt="theme icon" className={ styles.themeImg }/>
            </button>
        </div>
    )
}