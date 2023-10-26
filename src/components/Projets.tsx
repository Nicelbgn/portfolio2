import { NavLink } from "react-router-dom";
import "../css/projets.scss";

export default function Projets() {
  const projects = [
    { name: "/capcv.png", valeur: "CURRICULUM VITAE",to:"https://cvbilaly.netlify.app/" },
    { name: "/clone_spotify.png", valeur: "CLONE SPOTIFY",to:"https://github.com/GalsenBoy/clone-spotify_react_ts" },
    { name: "/retrogems.png", valeur: "SITE RETROGEMS",to:"https://retrogems.fr/"  },
    { name: "/waounde.png", valeur: "ASSOCIATION COMMUNE DE WAOUNDE",to:"https://galsenboy.netlify.app"  },
    { name: "/github.png", valeur: "VOIR D'AUTRES PROJECTS",to:"https://github.com/GalsenBoy?tab=repositories"  },
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
