import { NavLink } from "react-router-dom";
import "../css/projets.scss";

export default function Projets() {
  const projects = [
    {
      id: 1,
      name: "/capcv.png",
      valeur: "CURRICULUM VITAE",
      to: "https://cvbilaly.netlify.app/",
    },
    {
      id: 2,
      name: "/clone_spotify.png",
      valeur: "CLONE SPOTIFY",
      to: "https://github.com/GalsenBoy/clone-spotify_react_ts",
    },
    {
      id: 3,
      name: "/retrogems.png",
      valeur: "SITE RETROGEMS",
      to: "https://retrogems.fr/",
    },
    {
      id: 4,
      name: "/waounde.png",
      valeur: "ASSOCIATION COMMUNE DE WAOUNDE",
      to: "https://galsenboy.netlify.app",
    },
    {
      id: 5,
      name: "/github.png",
      valeur: "VOIR D'AUTRES PROJECTS",
      to: "https://github.com/GalsenBoy?tab=repositories",
    },
  ];

  return (
    <div id="projet-content">
      {projects.map((project, index) => (
        <div className="project" key={index}>
          <NavLink to={project.to}>
            <img src={project.name} alt={project.valeur} />
            <h4>{project.valeur}</h4>
          </NavLink>
        </div>
      ))}
    </div>
  );
}
