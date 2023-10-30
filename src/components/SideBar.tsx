import { NavLink } from "react-router-dom";
import "../css/sideBar.scss";
import { motion } from "framer-motion";
import { generateAnimation } from "../utils/animations";
export default function SideBar() {
  const navs = [
    { img: "/about.png", text: "A propos" },
    { img: "/skills.png", text: "Compétences" },
    { img: "/project.png", text: "Projets" },
    { img: "/contact.png", text: "Me contacter" },
  ];

  const animeAvatar = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 1.4,
        type: "spring",
      },
    },
  };

  return (
    <section>
      <div id="side-bar-container">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={animeAvatar}
          id="avatar"
        >
          <img src="/avatar.jpg" alt="" />
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={generateAnimation(0.5, "x")}
          id="nav"
        >
          {navs.map((nav) => (
            <NavLink to={nav.text}>
              <span>{nav.text}</span> <img src={nav.img} alt={nav.text} />
            </NavLink>
          ))}
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={generateAnimation(1, "x")}
          id="reseaux"
        >
          <h3>MES RESEAUX :</h3>
          <div id="reseaux-items">
            <NavLink
              to={
                "https://www.linkedin.com/in/bilaly-cissokho-473400278?originalSubdomain=fr"
              }
            >
              <img src="/linkedin.png" alt="" />
            </NavLink>
            <NavLink to={"https://github.com/GalsenBoy?tab=repositories"}>
              <img src="/git.png" alt="" />
            </NavLink>
            <NavLink to={"https://cvbilaly.netlify.app/"}>
              <img src="/cv.png" alt="" />
            </NavLink>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
