import "../css/content.scss";
import { generateAnimation } from "../utils/animations";
import Contact from "./Contact";
import Footer from "./Footer";
import Projets from "./Projets";
import SkillsBack from "./SkillsBack";
import SkillsFront from "./SkillsFront";
import { motion } from "framer-motion";
export default function Content() {
  const anime = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.4,
        type: "spring",
      },
    },
  };
  return (
    <section>
      <div id="content">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={generateAnimation(0.3, "y")}
          id="about"
        >
          <h3>A PROPOS DE MOI :</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis
            justo cursus nulla dictum ultrices at accumsan sapien. Aenean
            viverra finibus ex, quis placerat felis egestas eget. Aliquam erat
            volutpat. Suspendisse id ornare sapien, sed venenatis eros.
            Vestibulum imperdiet tortor quis risus suscipit pulvinar id ut
            metus. Suspendisse eu neque cursus, malesuada neque quis, fermentum
            leo. Praesent consectetur, justo at pharetra tempus, neque metus
            pharetra est, in vulputate tellus neque at ex.
          </p>
        </motion.div>
        <div id="skills">
          <motion.h3 initial="hidden" animate="visible" variants={anime}>
            MES COMPETENCES :
          </motion.h3>
          <div id="front">
            <motion.h3 initial="hidden" animate="visible" variants={anime}>
              FRONT-END :
            </motion.h3>
            <SkillsFront />
          </div>
          <div id="front">
            <h3>BACK-END :</h3>
            <SkillsBack />
          </div>
        </div>
        <div id="my-projects">
          <h3> MES PROJETS :</h3>
          <Projets />
        </div>
        <div id="contact">
          <h3>ME CONTACTER :</h3>
          <Contact />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </section>
  );
}
