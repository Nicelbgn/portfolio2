import "../css/burger.scss"
import {motion} from "framer-motion"
import { generateAnimation } from "../utils/animations";
export default function Burger() {
  return (
    <motion.div  initial="hidden"
    animate="visible"
    variants={generateAnimation(0.25, "y")} id="burger-content">
      <label>
        <input type="checkbox" id="check" />
        <span id="span1"></span>
        <span  id="span2"></span>
        <span  id="span3"></span>
      </label>
    </motion.div>
  );
}
