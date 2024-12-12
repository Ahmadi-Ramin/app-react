import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear(); 

  return (
    <div className='footer grid-container'>
      <div className="linkit">
        <p>Footer</p>
        <a href="#">Kirjaudu</a><br/>
        <a href="#">Majoitukset</a><br/>
        <a href="#">Lennot</a>
      </div>
      <div className="yhteystiedot">
        <p>Yhteystiedot</p>
        <p>Phone: +358 98745632</p>
     
      
      <p>© {currentYear} Your Company. All rights reserved.</p>
      
      </div>
      


    </div>
  );
}

export default Footer;



  

 

 