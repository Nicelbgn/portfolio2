import "../css/sideBar.scss";
import { motion } from "framer-motion";
import { generateAnimation } from "../utils/animations";
import Nav from "./Nav";
import { animeAvatar } from "../utils/animeAvatar";
import SocialMedia from "./SocialMedia";
export default function SideBar() {
  return (
    <section>
      <div id="side-bar-container">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={animeAvatar}
          id="avatar"
        >
          <img src="/moi.png" alt="" />
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
            <SocialMedia />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
