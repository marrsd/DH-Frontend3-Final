import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

import style from '../styles/Card.module.css'

export default function Card (props){

    const { theme } = useContext(ThemeContext)

    return (
        <div key={props.id} className = { theme === "dark" ? style.darkModeCard + " " + style.card : style.card }>
            
            <Link to={`/dentist/${props.id}`}>
                <img src="src\assets\dentist.jpg" alt="dentist image" />
            </Link>

            <h3>{props.name}</h3>
            <p className={style.username}>{props.username}</p>

            <button onClick={props.clickAgregar}>Agregar a Destacados</button>
        </div>
    )
}