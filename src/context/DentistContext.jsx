import { createContext } from "react"

export const DentistContext = createContext()

export default function DentistProvider(props) {

    const value = { }

    return(
      
        <DentistContext.Provider value={value}>
            {props.children}
        </DentistContext.Provider>
      
    )

    
}