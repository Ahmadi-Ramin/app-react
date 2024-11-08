import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import SearchItem from './components/searchItem/SearchItem';
import Footer from './components/footer/Footer';
import PopularLocation from './components/popularLocations/PopularLoaction';
import Hero from './components/hero/Hero';
import sea from '../public/assets/sea.jpg';
import Login from '../src/components/login/Login'; // Assuming the Login component is in the same folder
import SignUp from './components/signUp/SignUp';
import Catalog from './pages/catalog/Catalog';
function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}

function MainContent() {
  const location = useLocation(); // Get current location

  return (
    <>
      {/* Conditionally render Navbar and Header only if the path is not '/login' */}
      {location.pathname === '/login' &&  (
        <>
          
        </>
      )}

      {location.pathname === '/SignUp' &&  (
        <>
          
        </>
      )}

      <Routes>
        {/* Login Page Route */}
        <Route path="/login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Catalog" element={<Catalog />} />
        {/* Other Routes */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              
              <Hero 
                image={sea}
                mainHeader="Are you ready for an adventure?" 
                secondaryHeader="Browse through the popular locations."
              />
              <PopularLocation  path="/Catalog"/>
              <SearchItem />
              
              <Footer />
            </>
          }
        />
      </Routes>

      
    </>
  );
}

export default App;
