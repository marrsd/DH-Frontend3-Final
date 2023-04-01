import './App.css'

import DentistsRoutes from './routes/DentistsRoutes'
import Navbar from './components/Navbar'
import DentistProvider from './context/DentistContext'

function App() {
  
  return (
    <DentistProvider>
      <header>
        <Navbar/>
      </header>
      <main>
      <DentistsRoutes/>
      </main>      
      <footer>Footer</footer>
    </DentistProvider>
  )
}

export default App
