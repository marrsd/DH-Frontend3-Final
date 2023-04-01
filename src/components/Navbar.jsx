import { Link } from "react-router-dom"

import styles from '../styles/Navbar.module.css'

export default function Navbar() {
    return(
        <div className={ styles.navbarContainer }>
            <Link to="/home">Home</Link>
            <br />
            <Link to="/contacto">Contacto</Link>
            <br />
            <Link to="/destacados">Destacados</Link>
            <button>Theme</button>
        </div>
    )
}