import { Link } from "react-router-dom";


export default function Card (props){


    return (
        <div key={props.id}>
            <Link to={`/dentist/${props.id}`}>
                <img src="src\assets\dentist.jpg" alt="dentist image" />
            </Link>
            <p>{props.name}</p>
            <button onClick={props.clickAgregar}>Agregar a Destacados</button>
        </div>
    )
}