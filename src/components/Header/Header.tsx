import Eu from "../../assets/Eu.svg";
import logo from "../../assets/Harão.svg";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../../Variants";

const Header = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="Header"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="flex-1 text-center font-secondary lg:text-left">
        <div className="flex justify-center mb-20 lg:justify-start">
          <img src={logo} alt="Felipe Harão" />
        </div>
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[110px]"
            >
              Felipe <span>Harão</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className=" text-white mr-4">Eu Sou um</span>
              <TypeAnimation
                sequence={[
                  "Developer",
                  2000,
                  "Designer",
                  2000,
                  "Freelance",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Olá mundo! Seja bem vindo ao meu primeiro portfólio, feito em React e tailwind, espero que goste.
            </motion.p>
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
          </div>
          <div className="flex-col gap-96">
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex  "
          >
            <img src={Eu} alt="Uma foto minha" />
          </motion.div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
