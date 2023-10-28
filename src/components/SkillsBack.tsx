import "../css/skills.scss";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function SkillsBack() {
  const backs = [
    {
      img: "/node.png",
      valeur: "Node js",
    },
    {
      img: "/express.png",
      valeur: "Express js",
    },
    {
      img: "/prisma.png",
      valeur: "Prisma ORM",
    },
    {
      img: "/sql.png",
      valeur: "Sql",
    },
    {
      img: "/mongo.png",
      valeur: "Mongo Db",
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      className="container"
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      id="skills-card"
      ref={ref}
    >
      {backs.map((back, index) => (
        <motion.div
          className="item"
          variants={item}
          id="skills-card-display"
          key={index}
        >
          <img src={back.img} alt="" />
          <h4>{back.valeur}</h4>
        </motion.div>
      ))}
    </motion.div>
  );
}
