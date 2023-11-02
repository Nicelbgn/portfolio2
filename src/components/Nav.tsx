import { NavLink } from "react-router-dom";
export default function Nav() {
  const navs = [
    { img: "/about.png", text: "A propos" },
    { img: "/skills.png", text: "Compétences" },
    { img: "/projects.png", text: "Projets" },
    { img: "/contact.png", text: "Me contacter" },
  ];

 

  return (
    <div id="nav">
      {navs.map((nav) => (
        <NavLink to={nav.text}>
          <span>{nav.text}</span> <img src={nav.img} alt={nav.text} />
        </NavLink>
      ))}
    </div>
  );
}
