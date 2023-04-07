import { useState } from "react"
import { ThemeContext } from "../context/ThemeContext"
import { useContext } from "react"

import styles from '../styles/Contact.module.css'
import stylesTheme from '../styles/GlobalTheme.module.css'
import contactImg from '../assets/dentist.jpg'

export default function Contact() {

    const { theme } = useContext(ThemeContext)

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
            setMessage(`Gracias ${name}, te contactaremos cuando antes vía ${email}`) : 
            setMessage("Por favor verifique su información nuevamente")

        setName("")
        setEmail("")
    }

    return(
        <>
            <h1 className={ styles.textAlignCenter } >Contacto</h1>
            <div className={ styles.contactContainer}>
            
                <form onSubmit={ handleSubmit } className = { styles.form }>
                    <div className = { 
                        theme === "dark" ? stylesTheme.dark + " " + styles.formContainer : stylesTheme.light + " " + styles.formContainer}>
                        
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
                        <button type="submit" className={ styles.sendBtn }>Send</button>    
                    </div>                
                </form>
                <img src={ contactImg } alt="contact img" className={ styles.contactImg } />
            </div>
            { message ? <p className={ styles.textAlignCenter }> { message } </p> : null }
        </>
    )
}