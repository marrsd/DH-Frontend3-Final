import './App.css'

import DentistsRoutes from './routes/DentistsRoutes'
import Navbar from './components/Navbar'
import DentistProvider from './context/DentistContext'
import ThemeContextProvider from './context/ThemeContext'
import styles from '../src/styles/GlobalTheme.module.css'


function App() {

  return (
    <ThemeContextProvider>
      <DentistProvider>
        <div>
          <header>
            <Navbar />
          </header>
          <main>
            <DentistsRoutes />
          </main>
          <footer>Footer</footer>
        </div>
      </DentistProvider>
    </ThemeContextProvider>

  )
}

export default App
