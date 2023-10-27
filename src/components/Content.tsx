import "../css/content.scss";
import Contact from "./Contact";
import Footer from "./Footer";
import Projets from "./Projets";
import SkillsBack from "./SkillsBack";
import SkillsFront from "./SkillsFront";
export default function Content() {
  return (
    <section>
      <div id="content">
        <div id="about">
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
        </div>
        <div id="skills">
          <h3>MES COMPETENCES :</h3>
          <div id="front">
            <h3>FRONT-END :</h3>
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
