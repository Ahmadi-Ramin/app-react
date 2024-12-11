import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Login from '../src/pages/login/Login'; 
import SignUp from '../src/pages/signUp/SignUp';
import Catalog from './pages/catalog/Catalog';
import Review from './pages/catalog/Review';
import Home from '../src/pages/home/Home';
// import 'bootstrap/dist/css/bootstrap.css';
function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}

function MainContent() {
  const location = useLocation(); 

  return (
    <>
      
      {location.pathname === '/login' &&  (
        <>
          
        </>
      )}

      {location.pathname === '/SignUp' &&  (
        <>
          
        </>
      )}

      <Routes>
        
        <Route path="/login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Catalog" element={<Catalog />} />
        <Route path="/details/:id" element={<Review/>} />
        
        <Route
          path="/"
          element={<Home/>}
        />
      </Routes> 
    </>
  );
}

export default App;
