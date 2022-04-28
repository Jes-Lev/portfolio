import React, { Component } from "react";
import "./About.css";
import MyPicture from "./imgs/pic.jpg";
import {
  FaGithub,
  FaHackerrank,
  FaLinkedinIn,
  FaUnity,
  FaTerminal,
  FaJsSquare,
} from "react-icons/fa";

import { MdLocationOn } from "react-icons/md";
import { IoSchoolSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

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
          <a href="https://github.com/ichirodev" className="about-cwm-icon">
            <FaGithub size={"20px"} />
          </a>
        </div>
        <div className="about-connect-with-me">
          <a
            href="https://www.hackerrank.com/adanschiffer"
            className="about-cwm-icon"
          >
            <FaHackerrank size={"20px"} />
          </a>
        </div>
        <div className="about-connect-with-me">
          <a
            href="https://www.linkedin.com/in/adan-fregoso-luqu%C3%ADn-6207a3235/"
            className="about-cwm-icon"
          >
            <FaLinkedinIn size={"20px"} />
          </a>
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
            Soy Adan, estudiante de Ingenieria en Computación apasionado por la
            tecnología, la ciencia y el arte. Me gusta resolver problemas y
            desarrollar todo tipo de software, siempre estoy en busca de
            aprender y aplicar mis conocimientos para crear e innovar.
          </div>
        </div>
      </div>

      {/* more container*/}
      <div className="more-topcontainer">
        <div className="more">
          {/* Career item boxes, should've used a list... */}
          <div className="more-box">
            <div className="more-icon">
              <IoSchoolSharp size={"24px"} />
            </div>
            <div className="more-text">
              Ingenieria en Computación, CUCEI, 2018 - actual
            </div>
          </div>
          <div className="more-box">
            <div className="more-icon">
              <MdLocationOn size={"24px"} />
            </div>
            <div className="more-text">Guadalajara, Jalisco, MX</div>
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
            <div className="myskillset-skill">Graphic Design</div>
            <div className="myskillset-skill">3D Modelling</div>
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
              Actualmente me encuentro en busca de oportunidades de trabajo o
              internships en las areas de desarrollo de soluciones de software,
              desarrollo web o desarrollo de videojuegos.
              <br></br>
              Para contactarme puedes enviarme un correo a{" "}
              <a href="mailto:upsidedownengineer@gmail.com" className="xtext-a">
                upsidedownengineer@gmail.com
              </a>
              <br></br>
              Puedes descargar mi curriculum{" "}
              <a
                className="xtext-a"
                href="https://drive.google.com/file/d/1dDWd5evUYqWAowKLgsnncL1Kb4ATsOcA/view?usp=sharing"
              >
                presionando aquí
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
