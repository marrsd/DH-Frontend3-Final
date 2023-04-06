import { useContext } from "react"
import { DentistContext } from "../context/DentistContext"
import Card from "./Card";

import style from '../styles/Home.module.css'

export default function Home() {
    const { dentists } = useContext(DentistContext)
    

    function agregarDestacados (id){

        console.log("dentista favorito agregado");
    }


    return(
        <>
            <h1 className={ style.textAlignCenter }>Home</h1>
            <div className={ style.container }>
                {
                    dentists.map( dentist => (
                        <Card 
                            key = {dentist.id} 
                            id = {dentist.id} 
                            name = {dentist.name}
                            userName = {dentist.username}
                            clickAgregar = {agregarDestacados}
                        />
                    ))
                }
            </div>
        </>
    )
}