import React, { useState } from "react";
import "../style/Home.css";
import IconC from "./IconC";
import { FaNodeJs, FaReact, FaJava } from "react-icons/fa";
import { SiSpring } from "react-icons/si";

const MainPage = () => {
  const [value, setValue] = useState(false);

  return (
    <div className="main_home">
      <div className="typo">
        <h1
          onMouseEnter={(e) => {
            setValue(true);
          }}
          onMouseLeave={(e) => setValue(false)}
        >
          Hi, I'm Arzit
        </h1>

        <h3>
          I help designers, small agencies and businesses bring their ideas to
          life. Powered by Figma, VS Code and coffee, I turn your requirements
          into CMS-ified and ecommerce-ified websites - on time and on budget.
        </h3>
      </div>
      <div className="img-comp">
        <div className="bg-circle"></div>
        <div className="icon-c">
          <FaNodeJs size="70" color="green" id="node" />
        </div>
        <div className="icon-c" id="react">
          <FaReact size="100" color="blue" id="react_logo" />
        </div>
        <div className="icon-c" id="java">
          <FaJava size="30" color="orange" id="java_logo" />
        </div>
        <div className="icon-c" id="spring">
          <SiSpring size="50" color="green" id="spring_logo" />
        </div>
        <img
          src="https://res.cloudinary.com/dtrp3lqrw/image/upload/v1643394509/Portfolio-20220128T102554Z-001/Portfolio/Removal-928_cdoult.png"
          alt="arz.jpg"
          className="main_img"
        />
      </div>
    </div>
  );
};

export default MainPage;
