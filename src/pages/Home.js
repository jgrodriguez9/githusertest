import { useEffect, useState } from "react"
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { endposint } from "../helpers/constants";

export default function Home(){
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function getUserAPI(){
            const [f1, f2, f3, f4, f5] = await Promise.all([
                fetch(`${endposint}/GrahamCampbell`), 
                fetch(`${endposint}/fabpot`),
                fetch(`${endposint}/weierophinney`),
                fetch(`${endposint}/rkh`),
                fetch(`${endposint}/josh`)
            ])

            const fetch1 = await f1.json()
            const fetch2 = await f2.json()
            const fetch3 = await f3.json()
            const fetch4 = await f4.json()
            const fetch5 = await f5.json()
            setUsers([fetch1, fetch2, fetch3, fetch4, fetch5])
        }
        getUserAPI();
    }, [])

    return (
        <>
            <Row className="mb-3">
                <Col xs="12" md="12">
                    <h4 className="mb-0">Top 5 GitHub Users</h4>
                    <small>Tap the username to see more information</small>
                </Col>
            </Row>
            <div className="d-flex flex-wrap flex-row">
                {
                    users.map(item=>(
                        <div key={item.id} className="p-2">
                            <Link className="btn btn-primary rounded-0 " to={`/person/${item.login}`}>{item.login}</Link>
                        </div>
                    ))
                }
            </div>
            
        </>
    )
}