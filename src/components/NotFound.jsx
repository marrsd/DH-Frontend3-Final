import notFound from '../assets/404.png' 

import style from '../styles/NotFound.module.css'

export default function NotFound() {
    return(
        <>
            <div className={style.notfound}>
                <img src={notFound} alt="Not found image" />
            </div>
            
        </>
    )
}