import React, { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        console.log('Username:', username);
        console.log('Password:', password);
        // Add your login logic here
    };

    return (
        <div className="login-page h-[77vh] flex items-center justify-center">
            <div className="login-box max-w-md p-8 bg-white shadow-md rounded-md">
                <div className="text-center">
                    <a href="/"></a>
                </div>
                <div className="card">
                    <div className="card-body">
                        <p className="text-center text-lg font-semibold">Account Login</p>

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
                                    <span>Remember Me</span>
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
