import { NavLink } from "react-router-dom";
import { navs } from "../data/Navs";
export default function Nav() {
  return (
    <div id="nav">
      {navs.map((nav) => (
        <NavLink onClick={nav.anchor} to={""}>
          <img src={nav.img} alt={nav.text} />
          <span>{nav.text}</span>
        </NavLink>
      ))}
    </div>
  );
}
