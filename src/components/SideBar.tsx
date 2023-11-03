import "../css/sideBar.scss";
import { motion } from "framer-motion";
import { generateAnimation } from "../utils/animations";
import Nav from "./Nav";
import Icones from "./Icones";
export default function SideBar() {


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
          <img src="/moi.jpg" alt="" />
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={generateAnimation(0.5, "x")}
          id="nav"
        >
          <Nav />
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={generateAnimation(1, "x")}
          id="reseaux"
        >
          <h3>MES RESEAUX :</h3>
          <div id="reseaux-items">
            <Icones />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
