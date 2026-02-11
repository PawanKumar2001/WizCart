import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import userData from '../../Backend/database/User.json'

export default function BuyNow(props) {

    const { nameProduct, descProduct, priceProduct, src } = useParams();
    console.log(nameProduct);
    console.log("src :" + src)

    const [formData, setFormData] = useState({});

    useEffect(() => {
        const storedData = localStorage.getItem('formData');
        if (storedData) {
            const parsedData = JSON.parse(storedData);
            setFormData(parsedData);
            console.log('Form data retrieved from local storage:', parsedData);
        }
    }, []);
    return (
        <div className={`container mt-5 w-100 p-5 text-${props.mode === "light" ? "dark" : "light"}`}>
            <div className='row py-3 w-100 border border-secondary rounded mb-4'>
                <div className='col-md-4'>
                    <img src={src} alt="" className='img-fluid rounded p-1' />
                </div>
                <div className='col-md-8 d-flex flex-column justify-content-center align-items-center'>
                    <p><strong className='display-4'>{nameProduct}</strong></p>
                    <p>{descProduct}</p>
                    <p>{priceProduct}</p>
                </div>
            </div>
            <div className="row p-3 w-100 border border-secondary rounded mb-4">
                <div className="col-md-12">
                    <p><strong className='display-5'>Delivery Details</strong></p>
                    <p><p className='lead'>First Name:</p>{userData["First Name"]}</p>
                    <p><p className='lead'>Last Name:</p>{userData["Last Name"]}</p>
                    <p><p className='lead'>Address:</p>{userData["Delivery Address"]}</p>
                    <p><p className='lead'>Contact:</p>{userData["Contact Number"]}</p>
                </div>
            </div>
            <div className="row p-3 w-100 border border-secondary rounded mb-4">
                <div className="col-md-12">
                    <p><strong className='display-5'>Payment Method</strong></p>
                    <ul className="list-unstyled">
                        <li>📲 Google Pay</li>
                        <li className='py-2'>
                            <form action="/orderplaced" className="input-group w-100">
                                <input type="text" className="form-control rounded-pill" placeholder='Enter UPI ID' required />
                                <button className='btn btn-outline-secondary rounded-pill mx-3' type="submit">Pay</button>
                            </form>
                        </li>
                        <li>💳 Credit Card</li>
                        <li className='py-2'>
                            <form action="/orderplaced" className="input-group w-100">
                                <input type="text" className="form-control rounded-pill w-50" placeholder='Enter Card Number' required />
                                <input type="text" className="form-control rounded-pill" placeholder='CVV' required />
                                <button className='btn btn-outline-secondary rounded-pill mx-3' type="submit">Pay</button>
                            </form>
                        </li>
                        <li>💳 Debit Card</li>
                        <li className='py-2'>
                            <form action="/orderplaced" className="input-group w-100">
                                <input type="text" className="form-control rounded-pill w-50" placeholder='Enter Card Number' required />
                                <input type="text" className="form-control rounded-pill" placeholder='CVV' required />
                                <button className='btn btn-outline-secondary rounded-pill mx-3' type="submit">Pay</button>
                            </form>
                        </li>
                        <li><a href="/orderplaced" className={`text-decoration-none text-${props.mode === "light" ? "dark" : "light"}`}>💵 Cash on Delivery - Pay {priceProduct} by cash</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

BuyNow.defaultProps = {
    address: "Add a user Adderss"
}