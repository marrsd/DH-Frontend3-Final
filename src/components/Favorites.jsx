import { useState } from 'react';
import style from '../styles/Favorites.module.css'
import Card from './Card';

export default function Favorites() {

    const [listaDestacados , setListaDestacados] = useState(JSON.parse(localStorage.getItem('users') || "[]"))

    function removeDestacado (user){

        const userExists = listaDestacados.some((u) => u.id === user.id)

        if(userExists){

            const newDestacadoArray = listaDestacados.filter((u) => u.id !== user.id);
            setListaDestacados(newDestacadoArray);

            const newUsersArray = JSON.stringify(newDestacadoArray);
            localStorage.setItem('users', newUsersArray);

            console.log("Destacado eliminado");
        }
    }

    return(
        <>
            <h1 className={ style.textAlignCenter }>Destacados</h1>

            {listaDestacados.length === 0 && <><br /><h2 className={ style.textAlignCenter }>No hay destacados agregados!</h2></>}

            <div className={ style.container }>
                {
                    listaDestacados.map( destacado => (
                        <Card 
                            key = {destacado.id} 
                            id = {destacado.id} 
                            name = {destacado.name}
                            userName = {destacado.username}
                            toggleDestacado = {() => removeDestacado(destacado)}
                        />
                    ))
                }
            </div>
        </>
    )
}