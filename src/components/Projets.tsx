import { NavLink } from "react-router-dom";
import "../css/projets.scss";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { animateSkills } from "../utils/animateSkills";
import { animateRef } from "../utils/animateRef";
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
      to: "https://clone-spotify-react-ts.vercel.app/",
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

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      className="container"
      variants={animateRef(0.3, 0.2)}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      ref={ref}
      id="projet-content"
    >
      {projects.map((project, index) => (
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          variants={animateSkills()}
          className="project"
          key={index}
        >
          <NavLink to={project.to}>
            <img src={project.name} alt={project.valeur} />
            <h4>{project.valeur}</h4>
          </NavLink>
        </motion.div>
      ))}
    </motion.div>
  );
}
