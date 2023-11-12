import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('email', username);
    formData.append('password', password);

    try {
      const response = await fetch('http://127.0.0.1:8000/api/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const result = await response.json();
      console.log('Login successful:', result);

      // Save token to local storage
      localStorage.setItem('token', result.token);
      localStorage.setItem('isLoggedIn', true);
      navigate("/admin/add-product");

      // You can perform additional actions based on the result here

    } catch (error) {
      console.error('Login error:', error.message);
      // Handle login error
    }
  };

  return (
    <div className="login-page h-[77vh] flex items-center justify-center">
      <div className="login-box max-w-md p-8 border-white-100 border-2 shadow-md rounded-md">
        <div className="text-center">
          <a href="/"></a>
        </div>
        <div className="card">
          <div className="card-body">
            <p className="text-center text-white text-lg font-semibold">Account Login</p>

            <form className="mt-4" onSubmit={handleLogin}>
              <div className="mb-4">
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex items-center justify-between mb-4">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" id="remember" className="form-checkbox" />
                  <span className='text-white '>Remember Me</span>
                </label>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
