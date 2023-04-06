import { Route, Routes } from "react-router-dom";

import Home from '../components/Home'
import Dentist from '../components/Dentist'
import Contact from '../components/Contact'
import Favorites from '../components/Favorites'
import NotFound from '../components/NotFound'

export default function DentistsRoutes() {
    return(
        <>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/dentist/:id' element={<Dentist/>} />
                <Route path='/contact' element={<Contact/>} />
                <Route path='/favs' element={<Favorites/>} />
                <Route path='*' element={<NotFound/>} />
            </Routes>
        
        </>
    )
}