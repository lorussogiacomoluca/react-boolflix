import React from "react";

const StarsRating = ({ rating }) => {
  const rating5 = Math.ceil(rating / 2);
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i <= rating5) {
      stars.push(<i key={i} className="fas fa-star text-warning"></i>);
    } else {
      stars.push(<i key={i} className="far fa-star text-secondary"></i>);
    }
  }
  return <div>{stars}</div>;
};

export default StarsRating;
