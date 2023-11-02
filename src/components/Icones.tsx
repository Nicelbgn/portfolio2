import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
export default function Icones() {
  const icons = [
    {
      to: " https://www.linkedin.com/in/bilaly-cissokho-473400278?originalSubdomain=fr",
      src: "/linkedin.png",
    },
    {
      to: " https://github.com/GalsenBoy?tab=repositories",
      src: "/git.png",
    },
    {
      to: "https://cvbilaly.netlify.app/",
      src: "/cv.png",
    },
  ];
  return (
    <div id="reseaux-items">
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
