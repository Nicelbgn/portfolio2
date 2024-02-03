import "../css/content.scss";
import { generateAnimation } from "../utils/animations";
import { anime } from "../utils/anime";
import Burger from "./Burger";
import Contact from "./Contact";
import Footer from "./Footer";
import Projets from "./Projets";
import SkillsBack from "./SkillsBack";
import SkillsFront from "./SkillsFront";
import { motion } from "framer-motion";


export default function Content() {
  return (
    <section style={{ position: "relative" }}>
      <Burger />
      <div id="content">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={generateAnimation(0.3, "y")}
          id="about"
        > 
          <h1>
            Je suis <strong> Nice Vrayance LEMBENGOUNI</strong>, développeur junior full-stack.
            Ma première immersion dans le domaine de l'informatique a eu lieu en Afrique du Sud, où j'ai acquis les bases de ce secteur passionnant, constamment en évolution rapide. Mon initiation en tant que technicien informatique a débuté pendant mes stages à la Vaal University of Technology. Actuellement, je continue d'explorer de nouvelles facettes de l'informatique, en me concentrant notamment sur le développement web. J'ai eu l'occasion de mettre en pratique mes compétences à travers la réalisation de divers projets scolaires impliquant des techniques telles que Docker, les API, l'utilisation de Figma, ainsi que la création de bases de données avec des outils comme Postgresql, Mariadb ou Redis. Plutôt que de simplement énumérer mes compétences, je préfère les démontrer à travers des projets concrets.
Ce qui me distingue principalement, c'est ma capacité naturelle à m'adapter rapidement à de nouveaux contextes et à assimiler de nouvelles connaissances et technologies. Ayant une attitude ouverte, je donne une grande valeur à la communication et au partage des connaissances.. Vous pouvez consulter mes travaux sur
            LinkedIn et GitHub.
          </h1>
        </motion.div>
        <div id="skills">
          <motion.h2 initial="hidden" animate="visible" variants={anime}>
            MES COMPETENCES :
          </motion.h2>
          <div id="front">
            <motion.h4 initial="hidden" animate="visible" variants={anime}>
              FRONT-END :
            </motion.h4>
            <SkillsFront />
          </div>
          <div id="front">
            <motion.h4 initial="hidden" animate="visible" variants={anime}>
              BACK-END :
            </motion.h4>
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
