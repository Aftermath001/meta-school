// Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900">
      <header className="w-full py-4 bg-white shadow-md">
        <nav className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold">Meta School</h1>
          <div>
            <Link to="/login" className="text-blue-500 hover:underline mr-4">Sign In</Link>
            <Link to="/signup" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Get Started</Link>
          </div>
        </nav>
      </header>
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-4xl font-bold mb-4">Learn coding </h2>
        <p className="text-lg mb-6">Interactive lessons and hands-on projects to empower your coding journey.</p>
        <div>
          <Link to="/signup" className="bg-blue-500 text-white px-6 py-3 rounded-lg mr-4 hover:bg-blue-600">Get Started</Link>
          <Link to="/courses" className="bg-gray-200 text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-300">Browse Courses</Link>
        </div>
      </main>
      <footer className="w-full py-4 bg-white shadow-md">
        <div className="container mx-auto text-center">
          <p className="text-sm">Subscribe to my newsletter to get updates, new tips, tutorials, and more.</p>
          <input type="email" placeholder="Enter your email" className="mt-2 px-4 py-2 border rounded" />
          <button className="ml-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Subscribe</button>
        </div>
      </footer>
    </div>
  );
};

export default Home;
