import React from 'react'
import logobig from '../../logobig.png';

export default function About(props) {
    return (
        <div className="container aboutcont mt-5 pt-5">
            <div className='row justify-content-center p-5 mb-3'>
                <div className='col-md-6'>
                    <img src={logobig} alt="Website Logo" className='img-fluid' />
                </div>
                <div className={`col-md-6 about-text mt-2 d-flex flex-column justify-content-center text-${props.mode === "light" ? "dark" : "light"}`}>
                    <h2 className='lead display-5 pt-3'>👥 {props.abouthead}</h2>
                    <p className='mb-5 pb-5'>Welcome to our innovative React-based e-commerce website - <b>WizCart</b>, masterminded by Pawan and MD Anas! With a passion for cutting-edge technology and a deep commitment to user experience, we've crafted a platform that seamlessly merges functionality with aesthetics.

                    At the heart of our platform lies a user-centric design that ensures effortless navigation and an immersive shopping journey. Beyond just shopping, we embrace the modern trend of <strong>dark mode</strong>, allowing you to browse and shop comfortably in low-light environments while reducing eye strain.

                    Pawan and MD Anas have poured their expertise into every pixel of our website, creating a harmonious blend of creativity and code. We invite you to explore our diverse collection of products, all conveniently categorized for your convenience. Join us in experiencing online shopping like never before, where innovation and style converge to provide you with an unparalleled e-commerce adventure.</p>
                </div>
            </div>
        </div>
    )
}

About.defaultProps = {
    abouthead: "About Us"
}