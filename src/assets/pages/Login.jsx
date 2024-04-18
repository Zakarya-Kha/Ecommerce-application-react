import React, { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform login logic, such as sending the data to the server
    console.log(formData); // For now, just logging form data to console
  };

  return (
    <div>
      <div className=' w-[40%] bg-white px-4 mx-auto rounded-md py-9'>
        <h1 className='text-2xl font-semibold py-3'>Login</h1>
        <form onSubmit={handleSubmit} className='flex flex-col  mx-auto'>
          <label className='mt-4 mb-2'>Email</label>
          <input
            className='px-1 py-1 border rounded-md'
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder='Email'
          />
          <label className='mt-4 mb-2'>Password</label>
          <input
            className='px-1 py-1 border rounded-md'
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder='Password'
          />
          <button type="submit" className='mt-2 bg-blue-600 text-white px-2 py-1 rounded-md hover:text-xl'>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
