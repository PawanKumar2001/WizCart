import React from 'react'
import { Link } from 'react-router-dom';

export default function Cardsec(props) {
    return (
        <>
            <div className={`card bg-${props.mode} text-white m-4 csw`}>
                <img className="card-img " src={props.src} />
                <div className="card-img-overlay d-flex justify-content-center align-items-center">
                    <Link to={props.destin} className='card-title h1 text-decoration-none'>
                        <h5 className="card-title h1">{props.title}</h5>
                    </Link>
                </div>
            </div>
        </>
    )
}
