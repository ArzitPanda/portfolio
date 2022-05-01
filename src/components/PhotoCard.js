import React from "react";
import "../style/PhotoCard.css";

const PhotoCard = (props) => {
  return (
    <div className="Photo_card_hero">
      <img src={props.src} alt="img.png" width="250px" />

      <h3> {props.title}</h3>
    </div>
  );
};

export default PhotoCard;
