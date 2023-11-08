import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../../Variants";

const HeaderLinks = () => {
  return (
    <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex justify-center lg:justify-start text-[20px] gap-x-6  "
            >
              <a href="https://www.linkedin.com/in/felipe-harão-marques-fernandes-madeira-100521243">
                <FaLinkedin />
              </a>
              <a href="https://github.com/Kiaizen">
                <FaGithub />
              </a>
              <a href="https://www.instagram.com/felipeharao/">
                <FaInstagram />
              </a>
            </motion.div>
  )
}

export default HeaderLinks