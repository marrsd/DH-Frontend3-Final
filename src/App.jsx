import './App.css'
import style from './styles/GlobalTheme.module.css'

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
          <footer className={style.footer}>DH - Frontend 3 * Developed by: Luis Molina - Marcela Peñaranda</footer>
      </DentistProvider>
    </ThemeContextProvider>

  )
}

export default App
