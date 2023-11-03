import "../css/burger.scss";
import { motion } from "framer-motion";
import { generateAnimation } from "../utils/animations";
import NavResponsive from "./NavResponsive";
import { useState } from "react";
import { Divide as Hamburger } from 'hamburger-react'
export default function Burger() {
  const [cliqued, setCliqued] = useState<boolean>(false);
  const [isOpen, setOpen] = useState<boolean>(false)

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
        <Hamburger toggled={isOpen} toggle={setOpen} direction="right" rounded/>
      </div>
      <div className={!cliqued ? "hidden" : "nav-responsive"}>
        {" "}
        <NavResponsive />
      </div>
    </motion.div>
  );
}
