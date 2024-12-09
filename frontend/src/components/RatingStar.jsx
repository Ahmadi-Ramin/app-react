import React from 'react'

import { useNavigate } from 'react-router-dom';
import Review from '../pages/catalog/Review'

function RatingStar({ rating }) {
  const navigate = useNavigate();
  const starStyle = { color: 'yellow', fontSize: 15 }; // Common style for all stars
  const handleStarClick = () => {
    navigate('/details/:id'); // Replace '/add-review' with your desired review page route
  };
  return (
    <div className="rating">
      {[1, 2, 3, 4, 5].map((num) => (
        <span key={num} style={starStyle} onClick={handleStarClick}>
          <i
            className={
              rating >= num
                ? 'fas fa-star' // Full star
                : rating >= num - 0.5
                ? 'fas fa-star-half-alt' // Half star
                : 'far fa-star' // Empty star
            }
          ></i>
        </span>
      ))}
    
    </div>
  );
}
export default RatingStar