import React from "react";
import "../style/Content.css";
const Card = (props) => {
  return (
    <div className="card">
      <h2 className="heading">{`< ${props.head} >`} </h2>
      {props.elem}
      <p>{props.data || props.children}</p>

      <h2 className="heading">{`</${props.head} >`} </h2>
    </div>
  );
};

export default Card;
