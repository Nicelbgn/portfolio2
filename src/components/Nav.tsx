import { NavLink } from "react-router-dom";
export default function Nav() {
  const navs = [
    {
      img: "/about.png",
      text: "A propos",
      anchor: () => {
        window.location.href = "#about";
      },
    },
    {
      img: "/skills.png",
      text: "Compétences",
      anchor: () => {
        window.location.href = "#skills";
      },
    },
    {
      img: "/projects.png",
      text: "Projets",
      anchor: () => {
        window.location.href = "#my-projects";
      },
    },
    {
      img: "/contact.png",
      text: "Me contacter",
      anchor: () => {
        window.location.href = "#contact";
      },
    },
  ];

  return (
    <div id="nav">
      {navs.map((nav) => (
        <NavLink onClick={nav.anchor} to={""}>
          <span>{nav.text}</span> <img src={nav.img} alt={nav.text} />
        </NavLink>
      ))}
    </div>
  );
}
