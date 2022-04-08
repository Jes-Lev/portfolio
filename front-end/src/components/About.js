import React, { Component } from "react";
import "./About.css";
import MyPicture from "./imgs/pic.jpeg";
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const About = () => {
  return (
    <div className="about">
      {/* Photo or Icon */}
      <div className="about-photo-container">
        <img src={MyPicture} alt="Adan" className="about-photo" />
      </div>
      {/* Social media and others icons */}
      <div className="about-connect-with-me-container">
        <div className="about-connect-with-me">
          <FaGithub size={"20px"} />
        </div>
        <div className="about-connect-with-me">
          <FaTwitter size={"20px"} />
        </div>
        <div className="about-connect-with-me">
          <FaLinkedinIn size={"20px"} />
        </div>
      </div>
      {/* About me header */}
      <div className="about-header">
        <div className="about-header-en">About me</div>
        <div className="about-header-jp">私について</div>
      </div>
      {/* About me body */}
      <div className="textholder">
        <div className="textholder-child-box">
          <div className="xtext">
            Nobis eos eum illum possimus velit non laboriosam sit. Eum sint nam
            consequatur corrupti eos illum saepe odit. Eligendi delectus dolorem
            maxime. Possimus ducimus sed qui accusamus voluptatem minima.
            Commodi delectus consectetur facere facilis aut accusamus placeat
            et. Ut molestias vel ullam modi corporis. Fugit neque non ea aut
            quia quia soluta. Vitae repellendus nostrum natus minus earum
            adipisci cupiditate vel. Ipsum ullam ipsa ex vitae adipisci ab. Sit
            ipsa qui laudantium autem illum ea nisi. Temporibus rerum quibusdam
            laborum soluta cupiditate et velit velit. Quo ut sit dolor dolores
            quia. Voluptatem nisi vitae aut.
          </div>
        </div>
      </div>
      {/* Career path container*/}
      <div className="mycareerpath-topcontainer">
        <div className="mycareerpath">
          {/* Container title */}
          <div className="mycarrerpath-title">A la chingada</div>
          {/* Career item boxes, should've used a list... */}
          <div className="mycareerpath-box">
            <div className="mycareerpath-icon">Icon</div>
            <div className="mycareerpath-text">asdasdas</div>
          </div>
          <div className="mycareerpath-box">
            <div className="mycareerpath-icon">Icon</div>
            <div className="mycareerpath-text">
              TextasNobis eos eum illum possimus velit non laboriosam sit. Eum
              sint nam consequatur corruNobis eos eum illum possimus velit non
              laboriosam sit. Eum sint nam consequatur corru
            </div>
          </div>
          <div className="mycareerpath-box">
            <div className="mycareerpath-icon">Icon</div>
            <div className="mycareerpath-text">
              Duis vulputate, metus eu vehicula laoreet, libero odio pretium
              turpis, sit amet fermentum dolor turpis vel nulla. Praesent
              posuere volutpat odio. Sed gravida augue urna, vel convallis leo
              rutrum non. Aenean faucibus nunc erat, et volutpat massa consequat
              ac. Sed gravida varius feugiat. Donec facilisis finibus interdum.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
