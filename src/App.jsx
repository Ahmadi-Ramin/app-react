// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages/home/Home';
// import Navbar from './components/navbar/Navbar';
// import Header from './components/header/Header';
// import SearchItem from './components/searchItem/SearchItem';
// import Footer from './components/footer/Footer';
// import PopularLocation from './components/popularLocations/PopularLoaction';
// import Hero from './components/hero/Hero';
// import sea from '../public/assets/sea.jpg';
// import Login from '../src/components/login/Login'; // Assuming the Login component is in the same folder

// function App() {


//   return (

//     <>
//     < Navbar />
//     <Header />
//       <Router>
//         <Routes>
//           {/* Use the element prop with JSX tags */}
//           <Route path="/login" element={<Login />} />
//         </Routes>
//           {/* Navbar and other components can be placed outside of Routes if they are to be present on all pages */} 
//       </Router>
//           <Hero 
//             image={sea}
//             mainHeader="Are you ready for an adventure?" 
//             secondaryHeader="Browse through the popular locations."
//           />
          
//           <PopularLocation />
//           <SearchItem />
//           <Home />
//           <Footer />
        
      
//     </>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import SearchItem from './components/searchItem/SearchItem';
import Footer from './components/footer/Footer';
import PopularLocation from './components/popularLocations/PopularLoaction';
import Hero from './components/hero/Hero';
import sea from '../public/assets/sea.jpg';
import Login from '../src/components/login/Login'; // Assuming the Login component is in the same folder

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
      {location.pathname === '/login' && (
        <>
          
        </>
      )}

      <Routes>
        {/* Login Page Route */}
        <Route path="/login" element={<Login />} />

        {/* Other Routes */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Header />
              <Hero 
                image={sea}
                mainHeader="Are you ready for an adventure?" 
                secondaryHeader="Browse through the popular locations."
              />
              <PopularLocation />
              <SearchItem />
              <Home />
              <Footer />
            </>
          }
        />
      </Routes>

      
    </>
  );
}

export default App;
