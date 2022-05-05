import React from "react";
import { Link } from "react-router-dom";
import "./Projects.css";

function Projects() {
  return (
    <div className="projects-top container">
      <div className="projects-content">
        <h1>Mis proyectos</h1>
        <a
          href="https://github.com/ichirodev/zfps"
          style={{ textDecoration: "none" }}
        >
          <div className="project">
            <div className="project-image"></div>
            <div className="project-text">
              Zombies FPS
              <div className="project-text-box">Texto descriptivo</div>
            </div>
          </div>
        </a>
        <a
          href="https://github.com/ichirodev/mini-traductor"
          style={{ textDecoration: "none" }}
        >
          <div className="project">
            <div className="project-image"></div>
            <div className="project-text">
              Mini Compilador de Ensamblador
              <div className="project-text-box">Texto descriptivo</div>
            </div>
          </div>
        </a>
        <a
          href="https://github.com/ichirodev/portfolio"
          style={{ textDecoration: "none" }}
        >
          <div className="project">
            <div className="project-image"></div>
            <div className="project-text">
              Web Portfolio
              <div className="project-text-box">Texto descriptivo</div>
            </div>
          </div>
        </a>
        <a
          href="https://github.com/ichirodev/basic-cpu-vhdl"
          style={{ textDecoration: "none" }}
        >
          <div className="project">
            <div className="project-image"></div>
            <div className="project-text">
              CPU Basico en VHDL
              <div className="project-text-box">Texto descriptivo</div>
            </div>
          </div>
        </a>

        <div className="my-github">
          {"Mira mis demás repositorios y código en GitHub"}
        </div>
      </div>
    </div>
  );
}

export default Projects;
