import React, { useState } from "react";
import "../style/Contact.css";
import axios from "axios";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [number, setNumber] = useState("");

  const sendmessage = () => {
    axios
      .post("https://p4o38.sse.codesandbox.io/", {
        email: email,
        Text: message,
        phone: number,
        name: name
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    axios
      .post("https://p4o38.sse.codesandbox.io/sms", {
        phone: number,
        name: name
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    setEmail("");
    setMessage("");
    setNumber("");
    setName("");
    alert("check your mail");
  };

  return (
    <div className="contact_hero">
      <img
        src="https://res.cloudinary.com/dtrp3lqrw/image/upload/v1643393381/Portfolio-20220128T102554Z-001/Portfolio/IMG_20210308_173616_Bokeh_br5l0q.jpg"
        className="contact_bg"
        alt="myimg"
      />

      <div id="contact">
        {/* <img
        src="https://c.tenor.com/iGcIj7HgNqEAAAAC/do-you-trust-me-you-gotta.gif"
        className="contact_img"
        alt="myimg"
        width="200px"
      /> */}
        <div className="contact_item">
          <label>
            <h2>your name</h2>{" "}
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="contact_item">
          <label>
            <h2>your email id</h2>{" "}
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="contact_item">
          <label>
            <h2>your number</h2>{" "}
          </label>
          <input
            type="text"
            value={number}
            onChange={(e) => {
              setNumber(e.target.value);
              console.log(number);
            }}
          />
        </div>
        <div className="contact_item">
          <label>
            <h2>your message</h2>{" "}
          </label>
          <input
            type="email"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
        </div>

        <button onClick={sendmessage}>send the Message</button>
      </div>
    </div>
  );
}
