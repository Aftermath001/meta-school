// Login.jsx
import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    // Handle login logic here
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
        <button className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 mb-4">
          Login with Google
        </button>
        <div className="text-center text-gray-500 mb-4">or</div>
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
        >
          Sign In
        </button>
        <p className="text-center text-gray-500 mt-4">
          Don't have an account?{' '}
          <a href="/signup" className="text-blue-500 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
