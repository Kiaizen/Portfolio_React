import { motion } from "framer-motion";
import { fadeIn } from "../../Variants";
import Eu from "../../assets/Eu2.png"
const HeaderImg = () => {
  return (
    <div className="flex-col gap-96 mix-blend-lighten w-44 xl:w-max">
    <motion.div
      variants={fadeIn("down", 0.5)}
      initial="hidden"
      whileInView={"show"}
      className="hidden lg:flex  "
    >
      <img src={Eu} alt="Uma foto minha"/>
    </motion.div>
  </div>
  )
}

export default HeaderImg