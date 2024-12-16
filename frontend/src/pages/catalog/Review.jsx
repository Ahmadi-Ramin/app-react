

// import React, { useState, useEffect } from "react";
// import './Review.css'
// import Navbar from '../../components/navbar/Navbar'
// import Footer from '../../components/footer/Footer'



// const Review = () => {
//   const [reviews, setReviews] = useState(() => {
//     const storedReviews = localStorage.getItem("reviews");
//     return storedReviews ? JSON.parse(storedReviews) : [];
//   });

//   const [rating, setRating] = useState(0);
//   const [review, setReview] = useState("");
//   const [customerName, setCustomerName] = useState("");

//   useEffect(() => {
//     localStorage.setItem("reviews", JSON.stringify(reviews));
//   }, [reviews]);

//   const handleRatingChange = (newRating) => {
//     setRating(newRating);
//   };

//   const handleReviewChange = (event) => {
//     setReview(event.target.value);
//   };

//   const handleNameChange = (event) => {
//     setCustomerName(event.target.value);
//   };

//   const handleSubmit = () => {
//     if (!rating || !review.trim() || !customerName.trim()) {
//       alert("Please fill in all fields before submitting.");
//       return;
//     }

//     const newReview = {
//       id: Date.now(),
//       name: customerName,
//       rating,
//       review,
//       time: new Date().toISOString(),
//     };

//     setReviews((prevReviews) => [...prevReviews, newReview]);
//     setRating(0);
//     setReview("");
//     setCustomerName("");
//     alert("Review submitted successfully!");
//   };

//   // Format time difference
//   const formatTime = (isoTime) => {
//     const reviewTime = new Date(isoTime);
//     const currentTime = new Date();
//     const timeDifference = currentTime - reviewTime;

//     const minutesAgo = Math.floor(timeDifference / (1000 * 60));
//     const hoursAgo = Math.floor(timeDifference / (1000 * 60 * 60));

//     if (timeDifference < 24 * 60 * 60 * 1000) {
//       if (hoursAgo > 0) return `${hoursAgo} hour${hoursAgo > 1 ? "s" : ""} ago`;
//       return `${minutesAgo} minute${minutesAgo > 1 ? "s" : ""} ago`;
//     }

//     return reviewTime.toLocaleString(); // Full date and time for reviews older than 24 hours
//   };

//   return (
//     <div><Navbar/>
//     <div className="ratingScreen justify-content-center text-center">
      
      
//       <div className="ratingScreens justify-content-center text-center">
//         <h3 className="review text-2xl font-bold ">Leave a Review</h3>

//         <div>
//           {[1, 2, 3, 4, 5].map((rate) => (
//             <label
//               key={rate}
//               style={{
//                 cursor: "pointer",
//                 marginRight: "20px",
//                 display: "inline-block",
//                 fontSize: "34px",
//                 color: rate <= rating ? "gold" : "white",
//               }}
//               onClick={() => handleRatingChange(rate)}
//             >
//               {rate}&#9733;
//             </label>
//           ))}
//         </div>

//         <div>
//           <input
//             type="text"
//             className="nameInput"
//             placeholder="Enter your name"
//             value={customerName}
//             onChange={handleNameChange}
//           />
//         </div>
//         <div>
//           <textarea
//             className="reviewtext"
//             placeholder="Write your review"
//             value={review}
//             onChange={handleReviewChange}
//           />
//         </div>
//         <button className=" text-xl" onClick={handleSubmit}>Submit</button>
//       </div>

//       <div>
//         <h2 className="pt-5 text-3xl font-bold">Customer Reviews</h2>
//         <ul className="ulclass">
//           {reviews.map((review) => (
//             <li key={review.id} className="liclass ">
//               <h4>{review.name}</h4>
//               <small>{formatTime(review.time)}</small>
//               <p>Rating: {review.rating} &#9733;</p>
//               <p>Review: {review.review}</p>
//             </li>
//           ))}
//         </ul>
//       </div>
//       </div>
//       <Footer/>
//     </div>
//   );
// };

// export default Review;


import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import './Review.css'
import { useLocation } from 'react-router-dom';



import React, { useState, useEffect } from "react";
import axios from "axios";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [customerName, setCustomerName] = useState("");
  const location = useLocation();
  const { location: placeLocation } = location.state || {};
  

  
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/reviews/getReviews",{params:{placeLocation}}) 
      .then((response) => {setReviews(response.data)
        console.log("Response from server:", response.data);
        console.log("place:",placeLocation );

      })
      
    
      .catch((error) => console.error("Error fetching reviews:", error));
  }, []);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };

  const handleNameChange = (event) => {
    setCustomerName(event.target.value);
  };

  const handleSubmit = () => {
    if (!rating || !review.trim() || !customerName.trim()) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    const newReview = {
    placeLocation,
      name:customerName,
      rating,
      review,
      time: new Date().toISOString() ,
    };

  
    axios
      .post("http://localhost:5000/api/reviews/addReviews", newReview) 
      .then((response) => { console.log(response.data)
        setReviews((prevReviews) => [...prevReviews, response.data]);
        setRating(0);
        setReview("");
        setCustomerName("");
        alert("Review submitted successfully!");
      })
      .catch((error) => {
        console.error("Error submitting review:", error);
        alert("Error submitting review. Please try again.");
      });
  };

  return (<div>  <Navbar/>
    <div className="ratingScreen justify-content-center text-center">
     
      <div className="ratingScreen justify-content-center text-center">
        <h3 className="review">Leave a Review</h3>

        <div>
          {[1, 2, 3, 4, 5].map((star) => (
            <label
              key={star}
              style={{
                cursor: "pointer",
                marginRight: "10px",
                display: "inline-block",
                fontSize: "24px",
                color: star <= rating ? "gold" : "gray",
              }}
              onClick={() => handleRatingChange(star)}
            >
              {star}&#9733;
            </label>
          ))}
        </div>

        <div>
          <input
            type="text"
            className="nameInput"
            placeholder="Enter your name"
            value={customerName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <textarea
            className="reviewtext"
            placeholder="Write your review"
            value={review}
            onChange={handleReviewChange}
          />
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </div>

      <div>
        <h2 className="pt-5">Customer Reviews</h2>
        <ul className="ulclass">
      
          {reviews.length > 0 ? (
      reviews.map((review) => (
        <li key={review.id} className="liclass bs">
          <h4>{review.name}</h4>
          <small>{review.time}</small>
          <p>Rating: {review.rating} &#9733;</p>
          <p>Review: {review.review}</p>
          <p>Place: {placeLocation}</p>
          
        </li>
      ))
    ) : (
      <h1>No reviews</h1>
    )}
        </ul>
      </div>
      
    </div>
    {/* <Footer/> */}
    </div>
  );
};

export default Review;
