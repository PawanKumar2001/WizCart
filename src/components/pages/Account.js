import React from 'react';
import userData from '../../Backend/database/User.json'

const UserAccount = (props) => {
  return (
    <div className={`container w-100 pt-5 mt-5 mb-5 text-${props.mode === "light" ? "dark" : "light"}`}>
      <strong className='display-5'>👤 My Account</strong>
      <form className='mt-5' action='save-details' method='POST'>
        <div className='pb-3 d-flex flex-row'>
          <div className='d-flex flex-column align-items-start mr-3'>
            <p className='lead mb-0'>First Name:</p>
            <input
              type="text"
              id='firstname'
              name='firstname'
              value={userData["First Name"]}
              placeholder='Your first name please'
              className={`border-0 transparent text-${props.mode === "light" ? "dark" : "light"}`}
            />
          </div>
          <div className='d-flex flex-column align-items-start'>
            <p className='lead mb-0'>Last Name:</p>
            <input
              type="text"
              id='lastname'
              name='lastname'
              value={userData["Last Name"]}
              placeholder='Last name maybe?'
              className={`border-0 transparent text-${props.mode === "light" ? "dark" : "light"}`}
            />
          </div>
        </div>
        <div className='pb-3'>
          <p className='lead'>Email:</p>
          <input
            type="text"
            id="email"
            name='email'
            value={userData["Email"]}
            placeholder='Your Email here!'
            className={`border-0 w-75 transparent text-${props.mode === "light" ? "dark" : "light"}`}
          />
        </div>
        <div className='pb-3'>
          <p className='lead'>Gender</p>
          <div className="form-check">
            <input
              className="form-check-input bg-dark border-0"
              type="radio"
              name="gender"
              id="male"
              value="Male"
              checked={userData["Gender"] === "Male"}
            />
            <label className="form-check-label" htmlFor="male">
              Male
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input bg-dark border-0"
              type="radio"
              name="gender"
              id="female"
              value="Female"
              checked={userData["Gender"] === "Female"}
            />
            <label className="form-check-label" htmlFor="female">
              Female
            </label>
          </div>
        </div>
        <div className='pb-3'>
          <p className='lead'>Delivery Address:</p>
          <textarea
            id="address"
            name='address'
            value={userData["Delivery Address"]}
            placeholder='What`s your Address?'
            className={`border-0 w-75 transparent text-${props.mode === "light" ? "dark" : "light"}`}
            cols='2'
          />
        </div>
        <div className='pb-3'>
          <p className='lead'>Contact Number:</p>
          <input
            type="tel"
            id="number"
            name="number"
            value={userData["Contact Number"]}
            placeholder='Need your number also!'
            className={`border-0 transparent text-${props.mode === "light" ? "dark" : "light"}`}
          />
        </div>
        <div className="row my-5 py-5 w-100 justify-content-center">
          <div className="col-md-4 d-flex justify-content-center">
            <button className="btn btn-outline-secondary btn-block rounded-pill" type="submit">Save Details</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserAccount;
