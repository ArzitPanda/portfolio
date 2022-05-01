import React from "react";
import PhotoCard from "./PhotoCard";
import "../style/PhotoCard.css";
import arr from "./images";
const Photos = () => {
  return (
    <div className="photo_hero">
      <video height="500px" autoPlay loop muted>
        <source
          src="https://res.cloudinary.com/dtrp3lqrw/video/upload/br_767k/v1643637625/Photoshop/InShot_20210723_134120164_yzyqvj.mp4"
          type="video/mp4"
        />
      </video>
      <div className="garbage">
        ❝ some garbage thing you can ignore totally.Those are my photoshop works
        i created before.❞
        <h4>arztasy</h4>
      </div>
      {arr.map((elem) => {
        return <PhotoCard src={elem.src} title={elem.title} />;
      })}

      <video height="500px" autoPlay loop muted>
        <source
          src="https://res.cloudinary.com/dtrp3lqrw/video/upload/v1643637616/Photoshop/Pixaloop_24_07_2021_01_52_54_1060000_hpvpqp.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default Photos;
