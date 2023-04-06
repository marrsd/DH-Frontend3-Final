import { Route, Routes } from "react-router-dom";

import Home from '../components/Home'
import Dentists from '../components/Dentists'
import Contact from '../components/Contact'
import Destacados from '../components/Destacados'
import NotFound from '../components/NotFound'

export default function DentistsRoutes() {
    return(
        <>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/dentists/:id' element={<Dentists/>} />
                <Route path='/contacto' element={<Contact/>} />
                <Route path='/destacados' element={<Destacados/>} />
                <Route path='*' element={<NotFound/>} />
            </Routes>
        
        </>
    )
}