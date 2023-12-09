import logo from "../../assets/Harão.svg";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../../Variants";
import HeaderLinks from "./HeaderLinks";
import HeaderImg from "./HeaderImg";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../../translations/languageSwitcher";

const Header = () => {
  const { t } = useTranslation();
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="Header"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="flex-1 text-center font-secondary lg:text-left">
          <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }} 
              className="flex gap-8 lg:gap-80 justify-center mb-20 lg:justify-start">
             <div className="flex  gap-4 items-baseline">
              <h1 className="text-[45px] font-bold">Felipe</h1>
              <img src={logo} alt="Harão" />
             </div>
              <LanguageSwitcher/>
            </motion.div>
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[110px] mb-4"
            >
              Felipe <span>Harão</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[50px] font-secondary font-semibold uppercase leading-[1]"
            >
                <span className=" text-white mr-4">{t('header')}</span>
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
              {t('welcome')}
            </motion.p>
            <HeaderLinks />
          </div >
          <HeaderImg/>
        </div>
      </div>
    </section>
  );
};

export default Header;
