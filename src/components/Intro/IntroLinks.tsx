import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../../Variants";

const IntroLinks = () => {
  return (
    <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex  lg:gap-20 text-5xl gap-6  my-10"
            >
              <a className="hover:text-blue-500" href="https://www.linkedin.com/in/felipe-harão-marques-fernandes-madeira-100521243">
                <FaLinkedin />
              </a>
              <a className="hover:text-blue-500" href="https://github.com/Kiaizen">
                <FaGithub />
              </a>
              <a className="hover:text-blue-500" href="https://www.instagram.com/felipeharao/">
                <FaInstagram />
              </a>
            </motion.div>
  )
}

export default IntroLinks