import { useContext } from "react"
import { DentistContext } from "../context/DentistContext"
import Card from "./Card";

import style from '../styles/Home.module.css'

export default function Home() {
    const { dentists } = useContext(DentistContext)
    

    function agregarDestacado (user){

        const usersInStorage = localStorage.getItem('users') || "[]";
        const usersArray = JSON.parse(usersInStorage);

        const userExists = usersArray.some((u) => u.id === user.id)

        if(!userExists){

            usersArray.push(user);
            const newUsersArray = JSON.stringify(usersArray);
            localStorage.setItem('users', newUsersArray);

            console.log("Destacado agregado");
        }else{
            console.log("Destacado ya existe!");
        }
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
                            toggleDestacado = {() => agregarDestacado(dentist)}
                        />
                    ))
                }
            </div>
        </>
    )
}