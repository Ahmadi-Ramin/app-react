import React from 'react';
import './PopularLocation.css'; // Import CSS file
import Delhi from '../../../public/assets/delhi.jpg';
import Berlin from '../../../public/assets/berlin.jpg';
import Paris from '../../../public/assets/paris.jpg';
import Dubai from '../../../public/assets/Dubai.jpg';
import Catalog from '../../pages/catalog/Catalog';

const PopularLocation = () => {
  const data = [
    {
      image: Delhi,
      city: 'Delhi',
      numOfPlaces: 73,
    },
    {
      image: Berlin,
      city: 'Berlin',
      numOfPlaces: 34,
    },
    {
      image: Paris,
      city: 'Paris',
      numOfPlaces: 52,
    },
    {
      image: Dubai,
      city: 'Dubai',
      numOfPlaces: 27,
    },
  ];

  return (
    <div className="popular-location">
      <div className="popular-location-container">
        <h5 className="popular-location-tag">Explore Top</h5>
        <h2 className="popular-location-title">Popular Locations</h2>
        <div className="popular-location-grid">
          {data.map((place, index) => (
            <div key={index} className="card">
              <a href='/Catalog' className="card-link">
                <div className="card-image-container">
                  <img 
                    alt="photo" 
                    src={place.image} 
                    className="card-image" 
                  />
                  <div className="card-city">{place.city}</div>
                </div>
                <div className="card-content">
                  <h2 className="card-title">{place.numOfPlaces} Places to stay</h2>
                  <p className="card-description">
                    Discover the best hotel or apartment for your adventurous journey.
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularLocation;
