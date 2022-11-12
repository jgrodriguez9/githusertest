import { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { endposint } from "../helpers/constants";

export default function Person(){
    const { username } = useParams();
    const [person, setPerson] = useState([]);

    useEffect(() => {
        async function getUserByUserNameAPI(){
            const response = await fetch(`${endposint}/${username}`)
            const data = await response.json()
            setPerson(data)
        }
        getUserByUserNameAPI();
    }, [username])

    return (
        <>
            <div className="d-flex flex-wrap align-items-center">
                <div className="pe-4">
                    <Image src={person.avatar_url} roundedCircle className="w-image"/>
                </div>
                <div>
                    <h6 className="mb-0">{person.name}</h6>
                    <small>{person.location}</small>
                </div>
            </div>
            <hr />
        </>
    )
}