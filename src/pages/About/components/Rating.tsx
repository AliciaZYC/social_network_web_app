import React from "react";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

interface RatingComponentProps {
  rating: number; // Accepts the rating as a prop
}

const RatingComponent: React.FC<RatingComponentProps> = ({ rating }) => {
  return (
    <div className="d-flex">
      {[...Array(5)].map((_, index) => (
        <span key={index} style={{ marginRight: "5px" }}>
          {rating >= index + 1 ? (
            <FaStar color="#ffc107" size={18} /> // Full star
          ) : rating >= index + 0.5 ? (
            <FaStarHalfAlt color="#ffc107" size={18} /> // Half star
          ) : (
            <FaRegStar color="#ffc107" size={18} /> // Empty star
          )}
        </span>
      ))}
    </div>
  );
};

export default RatingComponent;
