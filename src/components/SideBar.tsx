import { NavLink } from "react-router-dom";
import "../css/sideBar.scss";
export default function SideBar() {
  const navs = [
    { img: "/about.png", text: "A propos" },
    { img: "/skills.png", text: "Compétences" },
    { img: "/project.png", text: "Projets" },
    { img: "/contact.png", text: "Me contacter" },
  ];
  return (
    <section>
      <div id="side-bar-container">
        <div id="avatar">
          <img src="/avatar.jpg" alt="" />
        </div>
        <div id="nav">
          {navs.map((nav) => (
            <NavLink to={nav.text}>
              <span>{nav.text}</span> <img src={nav.img} alt={nav.text} />
            </NavLink>
          ))}
        </div>
        <div id="reseaux">
          <h3>MES RESEAUX :</h3>
          <div id="reseaux-items">
            <NavLink
              to={
                "https://www.linkedin.com/in/bilaly-cissokho-473400278?originalSubdomain=fr"
              }
            >
              <img src="/linkedin.png" alt="" />
            </NavLink>
            <NavLink to={"https://github.com/GalsenBoy?tab=repositories"}>
              <img src="/git.png" alt="" />
            </NavLink>
            <NavLink to={"https://cvbilaly.netlify.app/"}>
              <img src="/cv.png" alt="" />
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}
