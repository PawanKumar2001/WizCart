import React from 'react'

export default function Carousel(props) {
    return (
        <div className='Caros p-3 pt-4'>
            <div id="carouselExampleControls" className="carousel slide Car" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={props.src1} className="d-block w-100 rounded-3" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={props.src2} className="d-block w-100 rounded-3" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={props.src3} className="d-block w-100 rounded-3" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
