import React, { Component } from "react";
import "./About.css";
import MyPicture from "./imgs/pic.jpeg";
import {
  FaGithub,
  FaTwitter,
  FaLinkedinIn,
  FaUnity,
  FaTerminal,
  FaJsSquare,
} from "react-icons/fa";

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
      <div className="section-header">
        <div className="section-header-title">Acerca de mí</div>
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

      {/* Attributes container*/}
      <div className="attributes-topcontainer">
        <div className="attributes">
          {/* Container title */}
          <div className="attributes-title">Cualidades</div>
          {/* Career item boxes, should've used a list... */}
          <div className="attributes-box">
            <div className="attributes-icon">Icon</div>
            <div className="attributes-text">
              TextasNobis eos eum illum possimus velit non laboriosam sit. Eum
              sint nam consequatur corruNobis eos eum illum possimus velit non
              laboriosam sit. Eum sint nam consequatur corru
            </div>
          </div>
          <div className="attributes-box">
            <div className="attributes-icon">Icon</div>
            <div className="attributes-text">
              Duis vulputate, metus eu vehicula laoreet, libero odio pretium
              turpis, sit amet fermentum dolor turpis vel nulla. Praesent
              posuere volutpat odio. Sed gravida augue urna, vel convallis leo
              rutrum non. Aenean faucibus nunc erat, et volutpat massa consequat
              ac. Sed gravida varius feugiat. Donec facilisis finibus interdum.
            </div>
          </div>
        </div>
      </div>

      {/* Skills container */}
      <div className="myskillset-topcontainer">
        {/* Skills title */}
        <div className="section-header">
          <div className="section-header-title">Habilidades</div>
        </div>
        <div className="myskillset-container">
          <div className="myskillset">
            <div className="myskillset-skill">C/C++</div>
            <div className="myskillset-skill">.NET C#</div>
            <div className="myskillset-skill">Java</div>
            <div className="myskillset-skill">Python</div>
            <div className="myskillset-skill">JavaScript</div>
            <div className="myskillset-skill">HTML</div>
            <div className="myskillset-skill">CSS</div>
            <div className="myskillset-skill">React</div>
            <div className="myskillset-skill">NodeJS</div>
            <div className="myskillset-skill">MongoDB</div>
            <div className="myskillset-skill">Postgresql</div>
            <div className="myskillset-skill">Unity Engine</div>
            <div className="myskillset-skill">3D Modelling</div>
            <div className="myskillset-skill">Graphic Design</div>
          </div>
        </div>
      </div>

      <div className="currentlyworking-topcontainer">
        <div className="section-header">
          <div className="section-header-title">Trabajo</div>
        </div>
        <div className="textholder">
          <div className="textholder-child-box">
            <div className="xtext">
              Nobis eos eum illum possimus velit non laboriosam sit. Eum sint
              nam consequatur corrupti eos illum saepe odit. Eligendi delectus
              dolorem maxime. Possimus ducimus sed qui accusamus voluptatem
              minima. Commodi delectus consectetur facere facilis aut accusamus
              placeat et. Ut molestias vel ullam modi corporis. Fugit neque non
              ea aut quia quia soluta. Vitae repellendus nostrum natus minus
              earum adipisci cupiditate vel. Ipsum ullam ipsa ex vitae adipisci
              ab. Sit ipsa qui laudantium autem illum ea nisi. Temporibus rerum
              quibusdam laborum soluta cupiditate et velit velit. Quo ut sit
              dolor dolores quia. Voluptatem nisi vitae aut.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
