import { useState } from "react"

import styles from '../styles/Contact.module.css'

export default function Contact() {

    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ message, setMessage ] = useState('')

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    
    const handleName = (e) => {
        setName(e.target.value)
    }
    
    const handleSubmit = (e) => {
        name.trim()
        email.trim()

        e.preventDefault()

        name.length > 5 && email.length > 0 ? 
            setMessage(`Gracias ${name}, te contactaremos cuando antes vía mail`) : 
            setMessage("Por favor verifique su información nuevamente")

        setName("")
        setEmail("")
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
            { message ? <p> { message } </p> : null }
        </>
    )
}