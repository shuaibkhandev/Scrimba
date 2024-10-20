import React from "react";

const Card = (props) => {
  const {
    coverImg,
    location,
    price,
    priceUnit = "person",
    rating,
    reviewCount,
    starIcon,
    title,
    openSpots,
  } = props;

  console.log(props);
  

  let badgeText = "";

  if (openSpots === 0) {
    badgeText = "SOLD OUT";
  } else {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {<div className="card-badge">{badgeText}</div>}
      <div className="card-image">
        <img src={`../../public/images/${coverImg}`} alt="product image" />
      </div>
      <div className="card-content">
        <div className="card-rating">
          <img src={`../../public/images/${starIcon}`} alt="star icon" />
          <span className="rating-value">{rating}</span>
          <span className="review-count gray">{reviewCount}</span>
          <span className="separator gray">.</span>
          <span className="location gray">{location}</span>
        </div>
        <div className="card-title">
          <h2>{title}</h2>
        </div>
        <div className="card-price">
          <p>
            <span className="price-amount bold">From ${price}</span> /{" "}
            {priceUnit}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
