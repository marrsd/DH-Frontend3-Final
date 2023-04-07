import { Link } from "react-router-dom";

import style from '../styles/Card.module.css'
import profile from '../assets/profile.png'
import star from '../assets/star.png'

export default function Card (props){

    return (
        <div key={props.id} className={style.card}>
            
            <Link to={`/dentist/${props.id}`}>
                <img src={profile} alt="dentist image" className={style.profile}/>
            </Link>

            <h3 className={style.name}>{props.name}</h3>
            <p className={style.userName}>{props.userName}</p>

            <button onClick={props.toggleDestacado} className={ style.btnFavorites}>
                <img src={ star } alt="star icon" className={style.star}/>
            </button>
        </div>
    )
}