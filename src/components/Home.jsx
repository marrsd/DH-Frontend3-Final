import { useContext } from "react"
import { DentistContext } from "../context/DentistContext"
import Card from "./Card";

export default function Home() {
    const { dentists } = useContext(DentistContext)
    

    function agregarDestacados (id){

        console.log("dentista favorito agregado");
    }


    return(
        <>
            <h1>Home</h1>
            {
                dentists.map( dentist => (
                    <Card 
                    id = {dentist.id} 
                    name = {dentist.name}
                    clickAgregar = {agregarDestacados}
                    />
                ))
            }
        </>
    )
}