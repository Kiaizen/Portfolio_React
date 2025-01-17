import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../../Variants";
import { useTranslation } from "react-i18next";
import Wrapper from "../wrapper/wrapper";
import IntroLinks from "./IntroLinks";
import IntroImg from "./IntroImg";
import LanguageSwitcher from "../../translations/languageSwitcher";
import logo from "../../assets/Harão.svg";

const Intro = () => {
  const { t } = useTranslation();
  return (
    <section
      className=" bg-gradient-to-b from-bgprimary to-bgsecondary"
      id="Intro"
    >
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mx-auto p-4 flex justify-between lg:justify-center items-center gap-4"
            >
              <a href="/">
                <div className="flex gap-2 items-center">
                  <h1 className="lg:text-4xl font-bold">Felipe</h1>
                  <img src={logo} className="w-14 lg:w-auto" alt="Harão" />
                </div>
              </a>
              <div className="hidden lg:flex gap-6 font-secondary text-4xl font-bold">
              <a href="#About" >Sobre</a>
              <a href="#Projects" >Projetos</a>
              <a href="#Contact" >Contato</a>

              </div>
              <LanguageSwitcher />
            </motion.div>
      <Wrapper>
        <div className="flex flex-col lg:gap-x-2 flex-1 text-center font-secondary">
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-3xl lg:text-4xl font-secondary font-semibold uppercase leading-[1] text-left"
            >
              <span className=" text-white mr-4">{t("intro")}</span>
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
              className="text-3xl mb-8 max-w-lg mx-auto lg:mx-0 text-left font-semibold"
            >
              {t("welcome")}
            </motion.p>
            <IntroLinks />
          </div>
          <IntroImg />
      </Wrapper>
    </section>
  );
};

export default Intro;
