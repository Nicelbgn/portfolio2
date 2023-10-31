import { motion } from "framer-motion"
import {useState} from "react"

const variants = {
  open: { opacity: 1, x: 0 },
//   closed: { opacity: 0, x: "-100%" },
}

export const Burger = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.nav
      animate={isOpen ? "open" : "closed"}
      variants={variants}
      style={{border:"5px solid",position:"fixed",left:10,top:10}}
    >
        <button onClick={() => setIsOpen(isOpen => !isOpen)}> Fermer</button>
      <div>
        <p>tess</p>
        <p>popps</p>
        <p>epkdpk</p>
      </div>
    </motion.nav>
  )
}