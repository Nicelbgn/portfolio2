import "../css/skills.scss";
import { motion } from "framer-motion";
import { animateSkills } from "../utils/animateSkills";
export default function SkillsFront() {
  const fronts = [
    {
      img: "/js.jpg",
      valeur: "JavaScript",
    },
    {
      img: "/next.png",
      valeur: "Next js",
    },
    {
      img: "/react.png",
      valeur: "React js",
    },

    {
      img: "/ts.png",
      valeur: "TypeScript",
    },
    {
      img: "/scss.png",
      valeur: "Scss",
    },
    {
      img: "/tailwind.png",
      valeur: "Tailwind css",
    },
  ];

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.9,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.div
      className="container"
      variants={container}
      initial="hidden"
      animate="visible"
      id="skills-card"
    >
      {fronts.map((front) => (
        <motion.div
          className="item"
          variants={animateSkills()}
          id="skills-card-display"
        >
          <img src={front.img} alt="" />
          <p>{front.valeur}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
