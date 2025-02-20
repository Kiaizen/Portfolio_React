import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../../Variants";
import { useTranslation } from "react-i18next";
import Wrapper from "../wrapper/wrapper";
import IntroLinks from "./IntroLinks";
import IntroImg from "./IntroImg";

const Intro = () => {
  const { t } = useTranslation();
  return (
    <section
      className=" bg-gradient-to-b from-bgprimary to-bgsecondary"
      id="Intro"
    >
           
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
                  "Freelancer",
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
              className="text-3xl mb-8 max-w-lg  text-left font-semibold"
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
