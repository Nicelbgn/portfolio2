import "../css/skills.scss";
import { motion } from "framer-motion";
import { animateRef } from "../utils/animateRef";
import { animateSkills } from "../utils/animateSkills";
import { fronts } from "../data/Front";
export default function SkillsFront() {
  return (
    <motion.div
      className="container"
      variants={animateRef(0.9, 0.2)}
      initial="hidden"
      animate="visible"
      id="skills-card"
    >
      {fronts.map((front, key) => (
        <motion.div
          key={key}
          className="item"
          variants={animateSkills}
          id="skills-card-display"
        >
          <img src={front.img} alt={front.alt} />
          <p>{front.valeur}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
