import { motion } from "framer-motion";
import { fadeIn } from "../../Variants";
import LanguageSwitcher from "../../translations/languageSwitcher";
import logo from "../../assets/Harão.svg";
import Wrapper from "../wrapper/wrapper";
import { useTranslation } from "react-i18next";

const Header = () => {
    const { t } = useTranslation();
    return(
        <section className="bg-gradient-to-b from-bgsecondary to-bgprimary">
        <Wrapper>
        <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="flex w-full py-4 justify-between lg:justify-between items-center"
      >
        <a href="/">
          <div className="flex gap-2 items-center">
            <h1 className="lg:text-4xl font-bold">Felipe</h1>
            <img src={logo} className="w-14 lg:w-auto" alt="Harão" />
          </div>
        </a>
        <div className="hidden lg:flex gap-6 font-secondary text-4xl font-bold">
        <a href="#About" >{t("header")}</a>
        <a href="#Projects" >{t("header1")}</a>
        <a href="#Contact" >{t("header2")}</a>

        </div>
        <LanguageSwitcher />
      </motion.div>
        </Wrapper>
        </section>
    )
}

export default Header