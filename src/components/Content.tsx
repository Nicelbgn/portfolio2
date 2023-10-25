import "../css/content.scss";
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
          <div>
            <h4>FRONT-END</h4>
            <SkillsFront />
          </div>
        </div>
      </div>
    </section>
  );
}
