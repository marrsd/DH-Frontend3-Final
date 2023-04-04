import { useContext } from "react"
import { DentistContext } from "../context/DentistContext"
import { Link } from "react-router-dom"

export default function Home() {
    const { dentists } = useContext(DentistContext)
    
    return(
        <>
            <h1>Home</h1>
            {
                dentists.map( dentist => (
                    <div key={dentist.id}>
                        <Link to = {`/dentists/${dentist.id}`}>
                            <img src="src\assets\dentist.jpg" alt="dentist image" />
                        </Link>
                        <p>{ dentist.name }</p>
                        <button>Agregar a Destacados</button>
                    </div>
                ))
            }
        </>
    )
}