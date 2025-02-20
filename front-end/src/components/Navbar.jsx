import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <nav className="bg-blue-500 p-4 text-white flex justify-between">
      <h1 className="text-lg font-bold">META SCHOOL</h1>
      <div>
        {user ? (
          <>
            <span className="mr-4">{user.role}</span>
            <button onClick={logout} className="bg-red-500 px-4 py-2">Logout</button>
          </>
        ) : (
          <Link to="/login" className="px-4 py-2 bg-gray-700">Login</Link>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
