import React from 'react'

type StarRatingProps = {
  index: number;
  hover: number;
  rating: number;
  setRating: (index: number) => void;
  setHover: (index: number) => void;
};

const StarRating = ({ index, hover, rating, setRating, setHover }:
  StarRatingProps) => {
  const activeClass = index <= (hover || rating) ? "text-[#E1688C]" : "text-  [#00172C]";
  return (
    <button
      type="button"
      key={index}
      className={`bg-transparent border-none outline-none cursor-pointer text ${activeClass}`}
      onClick={() => setRating(index)}
      onMouseEnter={() => setHover(index)}
      onMouseLeave={() => setHover(rating)}
    >
      <span className='text-3xl'>&#9733;</span>
    </button>
  );
}

export default StarRating;