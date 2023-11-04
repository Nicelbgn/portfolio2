import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { icons } from "../data/IconesData";
type socialProps = {
  socialItems?: string;
};
export default function SocialMedia({ socialItems }: socialProps) {
  return (
    <div id="reseaux-items" className={socialItems}>
      {icons.map((icon) => (
        <NavLink to={icon.to}>
          <motion.img
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            src={icon.src}
            alt=""
          />
        </NavLink>
      ))}
    </div>
  );
}
