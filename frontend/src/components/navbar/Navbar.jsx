
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Use react-router-dom for routing
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';

const Navbar = () => {
  const [showModel, setShowModel] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleModel = () => setShowModel(prev => !prev);

  // Handle scroll event to apply shadow effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.pageYOffset === 0 ? false : true);
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Log out handler (you would replace this with your own logic)
  const handleLogout = () => {
    // Implement your logout logic here
    console.log('Logged out');
  };

  return (
    <div className={`fixed z-50 h-16 w-full top-0 left-0 ${isScrolled ? "shadow-md backdrop-blur" : ""}`}>
      <div className="h-full w-2/3 mx-auto flex items-center justify-between">
        <Link to="/" className='flex items-center gap-2 transition-all'>
          <h1 className={`${isScrolled ? "text-blue-600" : "text-[#cec7c7]"} text-2xl font-bold`}>
            TravelGudi
          </h1>
          <AiOutlineHome
            size={25}
            color={`${isScrolled ? "rgb(37 99 235)" : "#cec7c7"}`}
          />
        </Link>
        <div>
          <div className="cursor-pointer" onClick={toggleModel}>
            <AiOutlineUser
              size={30}
              color={`${isScrolled ? "rgb(37 99 235)" : "#cec7c7"}`}
            />
          </div>
          {showModel && (
            <>
              <div
                onClick={toggleModel}
                className="absolute top-16 right-[270px] shadow-md flex flex-col gap-4 p-4 bg-white rounded-xl"
              >
                <Link to="/reservations">
                  Reservations
                </Link>
                <Link to="/login">
                  Login
                </Link>
                <Link to="/signup">
                  Sign Up
                </Link>
                <button onClick={handleLogout} className='text-slate-500 text-center'>
                  Log out
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
