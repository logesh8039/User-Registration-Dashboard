import React, { useState } from 'react';
import './Form.css';

const Form = () => {
  const [formDetails, setFormDetails] = useState({
    id: Date.now(), // Unique ID
    firstname: '',
    lastname: '',
    age: '',
    mobileNum: '',
    email: '',
    gender: '',
    location: '',
    state: '',
    terms: false 
  });

  const [error, setError] = useState('');

  const getInfo = (e) => {
    const { name, value, checked, type } = e.target;
    setFormDetails(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formDetails.terms) {
        alert('You must agree to the terms and conditions.');
        return;
    }

    let storedUsers;

    try {
        // Attempt to parse stored user details
        storedUsers = JSON.parse(localStorage.getItem('userDetails'));
    } catch (error) {
        console.error('Failed to parse user details:', error);
        storedUsers = []; // Fallback to an empty array if parsing fails
    }

    // Ensure storedUsers is an array
    if (!Array.isArray(storedUsers)) {
        storedUsers = []; // Reset to an empty array if it's not an array
    }

    // Now we can safely push the new user details
    storedUsers.push(formDetails);
    localStorage.setItem('userDetails', JSON.stringify(storedUsers));
    
    alert('Form Successfully Added To The List!!!');
    
    // Reset form details
    setFormDetails({
        id: Date.now(), // Reset ID for new entry
        firstname: '',
        lastname: '',
        age: '',
        mobileNum: '',
        email: '',
        gender: '',
        location: '',
        state: '',
        terms: false 
    });

    console.log(storedUsers);
};

  
  return (
    <form className='form p-5' onSubmit={handleSubmit}>
      <div className='fs-2 text-primary'>Enter Your Details For Registration</div>
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="form-group row g-3 fs-4">
        <div className="col-6">
          <label htmlFor="firstname" className='form-label'>First Name</label>
          <input value={formDetails.firstname} onChange={getInfo} type="text" name='firstname' placeholder='Enter your first name' className='form-control fs-5' id='firstname' required />
        </div>
        <div className="col-6">
          <label htmlFor="lastname" className='form-label'>Last Name</label>
          <input value={formDetails.lastname} onChange={getInfo} type="text" name='lastname' placeholder='Enter your last name' className='form-control fs-5' id='lastname' required />
        </div>
        <div className="col-6">
          <label htmlFor="age" className='form-label'>Age</label>
          <input value={formDetails.age} onChange={getInfo} type="number" name='age' placeholder='Enter your age' className='form-control fs-5' id='age' required />
        </div>
        <div className="col-6">
          <label htmlFor="mobileNum" className='form-label'>Mobile Number</label>
          <input value={formDetails.mobileNum} onChange={getInfo} type="tel" name='mobileNum' placeholder='Enter your mobile number' className='form-control fs-5' id='mobileNum' required />
        </div>
        <div className="col-6">
          <label htmlFor="email" className='form-label'>Email Id</label>
          <input value={formDetails.email} onChange={getInfo} type="email" name='email' placeholder='Enter your email' className='form-control fs-5' id='email' required />
        </div>
        <div className="col-6">
          <label htmlFor="gender" className="form-label fs-5">Gender</label>
          <select className="form-select fs-5" value={formDetails.gender} onChange={getInfo} id="gender" name='gender' required>
            <option value="" disabled>Select your gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="col-6">
          <label htmlFor="location" className='form-label'>Location</label>
          <input value={formDetails.location} onChange={getInfo} type="text" name='location' placeholder='Enter your location' className='form-control fs-5' id='location' required />
        </div>
        <div className="col-6">
          <label htmlFor="state" className='form-label'>State</label>
          <input value={formDetails.state} onChange={getInfo} type="text" name='state' placeholder='Enter your state' className='form-control fs-5' id='state' required />
        </div>
        <div className="col-12 d-flex align-items-center">
          <label className="form-check-label me-2 d-flex gap-3" htmlFor="terms">
            <input className="form-check-input" type="checkbox" id="terms" name="terms" checked={formDetails.terms} onChange={getInfo} />
            <span>I agree to the terms and conditions</span>
          </label>
        </div>
        <button type='submit' className='btn btn-primary col-2 fs-4'>Submit</button>
      </div>
    </form>
  );
};

export default Form;
