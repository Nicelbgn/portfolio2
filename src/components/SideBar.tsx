import { NavLink } from "react-router-dom";
import "../css/sideBar.scss";
export default function SideBar() {
  return (
    <section>
      <div id="side-bar-container">
        <div id="avatar">
          <img src="/avatar.jpg" alt="" />
        </div>
        <h1>BILALY CISSOKHO</h1>
        <h2>DEVELOPPEUR WEB</h2>
        <div id="nav">
          <NavLink to={"about"}>
            <span>A propos</span> <img src="/about.png" alt="" />
          </NavLink>
          <NavLink to={""}>
            <span>Compétences</span> <img src="/skills.png" alt="" />
          </NavLink>
          <NavLink to={""}>
            <span>Projets</span>
            <img src="/project.png" alt="" />
          </NavLink>
          <NavLink to={""}>
            <span> Me contacter</span>
            <img src="/contact.png" alt="" />
          </NavLink>
        </div>
        <h3>MES RESEAUX</h3>
        <div id="reseaux">
          <NavLink to={""}>
            <img src="/linkedin.png" alt="" />
          </NavLink>
          <NavLink to={""}>
            <img src="/git.png" alt="" />
          </NavLink>
          <NavLink to={""}>
            <img src="/cv.png" alt="" />
          </NavLink>
        </div>
      </div>
    </section>
  );
}
