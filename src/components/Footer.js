import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer(props) {
    return (
        <footer className={`text-center text-lg-start mt-4`}>
            <div className={` text-center p-3 text-${props.mode==="light"?"dark":"light"}`}>
                © Copyright: 
                <Link className={`text-${props.mode==="light"?"dark":"light"} text-decoration-none`} to="/"> WizCart.com</Link>
            </div>
        </footer>
    )
}
