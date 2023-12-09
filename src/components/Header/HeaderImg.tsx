import { motion } from "framer-motion";
import { fadeIn } from "../../Variants";
import Eu from "../../assets/Eu2.png"
const HeaderImg = () => {
  return (
    <div className="flex-col mix-blend-lighten">
    <motion.div
      variants={fadeIn("down", 0.5)}
      initial="hidden"
      whileInView={"show"}
      className="hidden lg:flex w-96"
    >
      <img src={Eu} alt="Uma foto minha"/>
    </motion.div>
  </div>
  )
}

export default HeaderImg