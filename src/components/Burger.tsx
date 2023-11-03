import "../css/burger.scss";
import { motion } from "framer-motion";
import { generateAnimation } from "../utils/animations";
import NavResponsive from "./NavResponsive";
import { useState } from "react";
export default function Burger() {
  const [cliqued, setCliqued] = useState<boolean>(false);

  const handleClick = () => {
    setCliqued(!cliqued);
  };
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={generateAnimation(0.25, "y")}
      id="burger-content"
    >
      <div id="burger" onClick={handleClick}>
        <input type="checkbox" id="check" />
        <span id="span1"></span>
        <span id="span2"></span>
        <span id="span3"></span>
      </div>
      <div className={!cliqued ? "hidden" : "nav-responsive"}>
        {" "}
        <NavResponsive />
      </div>
    </motion.div>
  );
}
