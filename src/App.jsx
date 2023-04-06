import './App.css'

import DentistsRoutes from './routes/DentistsRoutes'
import Navbar from './components/Navbar'
import DentistProvider from './context/DentistContext'
import ThemeContextProvider from './context/ThemeContext'


function App() {

  return (
    <ThemeContextProvider>
      <DentistProvider>
          <header>
            <Navbar />
          </header>
          <main>
            <DentistsRoutes />
          </main>
          <footer>Footer</footer>
      </DentistProvider>
    </ThemeContextProvider>

  )
}

export default App
