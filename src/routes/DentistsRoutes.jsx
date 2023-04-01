import { Route, Routes } from "react-router-dom";

import Home from '../components/Home'
import Dentista from '../components/Destista'
import Contacto from '../components/Contacto'
import Destacados from '../components/Destacados'
import NotFound from '../components/NotFound'


export default function DentistsRoutes() {
    return(
        <>
            <Routes>
                <Route path='/home' element={<Home/>} />
                <Route path='/dentists/:id' element={<Dentista/>} />
                <Route path='/contacto' element={<Contacto/>} />
                <Route path='/destacados' element={<Destacados/>} />
                <Route path='*' element={<NotFound/>} />
            </Routes>
        
        </>
    )
}