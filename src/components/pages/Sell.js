import React from 'react'

export default function Sell(props) {
    return (
        <div className={`container pt-5 mt-5 mb-5 text-${props.mode === "light" ? "dark" : "light"}`}>
            <strong className='display-5'>📈 Sell on Website!</strong>
            <p className='mt-3'>Wanna sell your products on our Website?</p>
            <p>Join us and become a successful seller. Get the best margins off your products.</p>
            <p className='mt-5'>Start your journy with us by creating a webseller account.</p>
            <div className="col-md-4 d-flex justify-content-center w-100 my-5">
                <button className="btn btn-outline-secondary btn-block rounded-pill" type="submit">Create a WebSeller Account</button>
            </div>
            <strong>Read the Terms and conditions before proceeding further.</strong>
            <p className='mb-5 pb-5'>Happy Selling!</p>
        </div>
    )
}
