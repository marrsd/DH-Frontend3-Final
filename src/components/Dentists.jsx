import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Dentists() {

    const [ dentist, setDentist ] = useState([])

    const params = useParams();
    // console.log(params.id);
    const getData = async () => {
        const data = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
        const response = await data.json()
        setDentist(response)
    }


    useEffect(() => {

        try {
            getData()
            console.log("detailed dentist data fetched");

        } catch (error) {
            console.log("detailed dentist data NOT fetched");
        }

    }, [params.id])

    return(
        <>
            <h1>{dentist.name}</h1>
            <ul>
                <li>{dentist.email}</li>
                <li>{dentist.phone}</li>
                <li>{dentist.website}</li>
            </ul>
            
        </>
    )
}