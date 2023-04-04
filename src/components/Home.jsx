import { useContext } from "react"
import { DentistContext } from "../context/DentistContext"

export default function Home() {
    const { dentists } = useContext(DentistContext)
    
    return(
        <>
            <h1>Home</h1>
            {
                dentists.map( dentist => (
                    <div key={dentist.key}>
                        <img src="src\assets\dentist.jpg" alt="dentist image" />
                        <p>{ dentist.name }</p>
                    </div>
                ))
            }
        </>
    )
}