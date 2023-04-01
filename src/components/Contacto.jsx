import { useState } from "react"

import styles from '../styles/Contact.module.css'

export default function Contacto() {

    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ error, setError ] = useState('')

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    
    const handleName = (e) => {
        setName(e.target.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()

        //Validacion email - PREGUNTAR
        name.length > 5 ? console.log("Nombre validado") : console.log("error")
    }

    return(
        <>
            <h1>Contacto</h1>
            <form onSubmit={ handleSubmit } className={ styles.form }>
                <div className={ styles.formContainer}>
                    <label>Fullname</label>
                    <input 
                        type="text" 
                        value={ name } 
                        onChange={ handleName }
                        placeholder="Fullname"
                    />

                    <label>Email</label>
                    <input 
                        type="email" 
                        value={ email }
                        onChange={ handleEmail }
                        placeholder="Email"
                    />
                    <button type="submit">Send</button>    
                </div>                
                
            </form>
        </>
    )
}