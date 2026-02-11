import React from 'react'
import { Link } from 'react-router-dom'

export default function Cardc(props) {
    return (
        <>
            <div className={`card cw m-3 bg-${props.mode}`}>
                <img className="card-img-top" src={props.src} alt="Card image cap"/>
                    <div className={`card-body`}>
                        <Link className={`card-text nav-link text-${props.mode==="light"?"dark":"light"}`} to={props.destin}>{props.name}</Link>
                        <Link className={`card-text nav-link text-${props.mode==="light"?"dark":"light"}`} to={props.destin}>{props.price}</Link>
                    </div>
            </div>
        </>
    )
}

Cardc.defaultProps = {
    name: "Product name",
    price: "Product price"
  }