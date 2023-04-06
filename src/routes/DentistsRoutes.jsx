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
                <Route path='/dentist/:id' element={<Dentists/>} />
                <Route path='/contact' element={<Contact/>} />
                <Route path='/favs' element={<Destacados/>} />
                <Route path='*' element={<NotFound/>} />
            </Routes>
        
        </>
    )
}