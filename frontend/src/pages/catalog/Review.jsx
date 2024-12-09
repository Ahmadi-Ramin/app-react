import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

 const Review = () => {
  const { roomId ,userId} = useParams();
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState([]);
   const [reviews, setReviews] = useState([]);
  const [hoverRating, setHoverRating] = useState(0); // For hover effect


  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/reviews/getreview",{
          params: { roomId },
        }); // Replace with your backend URL
        setReviews(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load reviews");
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);
 
 

  // Handle star click
  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  // Handle mouse hover over stars
  const handleMouseEnter = (rating) => {
    setHoverRating(rating);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  // Handle review input change
  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };

  const handleSubmit = async () => {
   
    try {
      const response = await axios.post('http://localhost:5000/api/reviews/rate-room', {
        roomId,
        userId,
        rating,
        review,
      });
      alert('Rating submitted successfully');
    } catch (error) {
      console.log(error);
      alert('Error submitting rating');
    }
  };

  return (
      <div className="ratingScreen justify-content-center text-center">
    <div className="ratingScreen justify-content-center text-center">
      <h3>Rate this room</h3>
      <div>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            style={{
              cursor: 'pointer',
              color: star <= (hoverRating || rating) ? 'gold' : 'gray',
              fontSize: '24px',
            }}
            onClick={() => handleRatingChange(star)}
            onMouseEnter={() => handleMouseEnter(star)}
            onMouseLeave={handleMouseLeave}
          >
            &#9733;
          </span>
        ))}
      </div>
      <div>
        <textarea
          placeholder="Write your review"
          value={review}
          onChange={handleReviewChange}
        />
      </div>
      <button onClick={handleSubmit}>Submit Rating</button>
    </div>


    <div>
      <h2 className='pt-5'>Customer Reviews</h2>
      <ul className='ulclass '  >
        {reviews.map((review) => (
          <li key={review._id} className='liclass bs'>
            <h4>{review.userId}</h4> 
            <h4>{review.rating}</h4> 
            <p>{review.review}</p> 
            {/* <small>{new Date(review.date).toLocaleString()}</small> */}
          </li>
        ))}
      </ul>
    </div>
      
    </div>
  );
};

export default Review;
