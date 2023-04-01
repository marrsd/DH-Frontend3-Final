import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DentistsRoutes from './routes/DentistsRoutes'
import Navbar from './components/Navbar'
import { DentistContext } from './context/DentistContext'

function App() {
  
  return (
    <DentistContext>
      <Navbar/>
      <br />
      <DentistsRoutes/>
      <br />
      <footer>Footer</footer>
    </DentistContext>
  )
}

export default App
