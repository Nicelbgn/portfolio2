import React from 'react';
import "../css/projets.scss";

export default function Projets() {
  const projects = [
    { name: "/capcv.png", valeur: "CURRICULUM VITAE" },
    { name: "/clone_spotify.png", valeur: "CLONE SPOTIFY" },
    { name: "/retrogems.png", valeur: "SITE RETROGEMS" },
    { name: "/waounde.png", valeur: "ASSOCIATION COMMUNE DE WAOUNDE" },
  ];

  return (
    <div id="projet-content">
      {projects.map((project, index) => (
        <div className="project" key={index}>
          <img src={project.name} alt={project.valeur} />
          <h4>{project.valeur}</h4>
        </div>
      ))}
    </div>
  );
}
