import React, { useEffect } from "react";
import Card from "./Card";
import { useState } from "react";
import "../style/Content.css";
import { FcAbout } from "react-icons/fc";
import { BsInfoLg } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import axios from "axios";

const Content = () => {
  const [joke, setJoke] = useState({});

  const arr = [
    {
      n: "student management system",
      l: "spring,react",
      link: "#"
    },
    {
      n: "amazon clone",
      l: "nodejs,react",
      link: "#"
    },
    {
      n: "tinder clone",
      l: "react-native",
      link: "#"
    },
    {
      n: "weather api",
      l: "html,css,js,weatherapi",
      link: "#"
    }
  ];

  const data1 =
    "Currently Pursuing My second Year Engineering Focused On computer science. I Am Very Passionate About Improving My Coding Skills & Developing My Own Applications & Softwares. Having Some Experience In Web Development. Interested In cross platfrom app developement. Loves To Develop Core Java & MySQL Stuff.";

  const Data2 = () => {
    return (
      <div>
        <h6>Name: Arijit panda</h6>
        <h6>Age: 19</h6>
        <h6>college: Trident Academy of technology</h6>

        <h6>from: cuttack,odisha</h6>
        <h6>Email: arzit43.143@gmail.com</h6>
        <h6>phone: +91 7064332448</h6>
      </div>
    );
  };

  // http://alpha-meme-maker.herokuapp.com/memes/:id
  return (
    <div className="content_hero">
      <div className="content">
        <Card
          className="ca"
          data={data1}
          head={`About`}
          elem={<CgProfile size="30" color="white" />}
        />

        <Card head="Info" elem={<BsInfoLg size="15" color="white" />}>
          <Data2 />
        </Card>
      </div>
      <table className="project_list">
        <tr>
          <th>project name</th>
          <th>language used</th>
          <th>link to project</th>
        </tr>
        {arr.map((elem) => {
          return (
            <tr className="project">
              <td>{elem.n}</td>
              <td>{elem.l}</td>
              <td>{elem.link}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};
export default Content;
