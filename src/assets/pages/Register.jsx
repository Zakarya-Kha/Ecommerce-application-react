import React, { useState } from 'react';

const Register = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData({
      ...formData,
      [name]: newValue
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform any validation and submit data to backend or handle it as needed
    console.log(formData); // For now, just logging form data to console
  };

  return (
    <div className=''>
      <div className=' w-[40%] bg-white  px-4 mx-auto rounded-md py-9'>
        <h1 className='text-2xl font-semibold py-3'>Create An Account</h1>
        <form onSubmit={handleSubmit} className='flex flex-col  mx-auto'>
          <label className='mt-4 mb-2'>Enter your first name</label>
          <input
            className='px-1 py-1 border rounded-md'
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            placeholder='First Name'
          />
          {/* Other input fields */}
          <label className='mt-4 mb-2'>Enter your last name</label>
          <input
            className='px-1 py-1 border rounded-md'
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            placeholder='Last Name'
            />

             <label className='mt-4 mb-2'>Enter your username</label>
          <input
          className='px-1 py-1 border rounded-md'
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          placeholder='Username'
          />
          <label className='mt-4 mb-2'>Enter your email</label>
          <input
          className='px-1 py-1 border rounded-md'
          type="text"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder='Email'
          />
          <label className='mt-4 mb-2'>Enter your password</label>
          <input
          className='px-1 py-1 border rounded-md'
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder='Password'
          />
          <label className='mt-4 mb-2'>Confirm your password</label>
          <input
          className='px-1 py-1 border rounded-md'
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleInputChange}
          placeholder='Confirm Password'
          />
         
          <button type="submit" className='mt-2 bg-blue-600 text-white px-2 py-1 rounded-md hover:text-xl'>
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
