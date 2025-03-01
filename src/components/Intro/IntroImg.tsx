import { motion } from "framer-motion";
import { fadeIn } from "../../Variants";
import Eu from "../../assets/Eu.jpeg"
const IntroImg = () => {
  return (
    <motion.div
      variants={fadeIn("down", 0.5)}
      initial="hidden"
      whileInView={"show"}
      className="m-auto w-24 md:w-3/12 order-first md:order-1"
    >
      <img className="rounded-full" src={Eu} alt="Myself"/>
    </motion.div>
  )
}

export default IntroImg