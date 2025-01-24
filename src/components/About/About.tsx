import { motion } from "framer-motion";
import { fadeIn } from "../../Variants";
import { useTranslation } from "react-i18next";
import Wrapper from "../wrapper/wrapper";
import AboutData from "./AboutData";
import { calculateDateDifference } from "../../utils/dateUtils";

const About = () => {
  const { t } = useTranslation();
  const dateDifference = calculateDateDifference("2023-07-25");

  return (
    <section
      id="About"
      className="flex items-center bg-gradient-to-b from-bgsecondary to-bgprimary"
    >
      <Wrapper>
        <div>
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 text-2xl"
          >
            <h2 className="h2 font-bold text-accent">{t("about")}</h2>
            <p className="mb-6">{t("atext")}</p>
          </motion.div>
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 text-2xl"
          >
            <p className="mb-6">{t("atext1")}</p>
            <p className="mb-6">{t("atext11")}</p>
          </motion.div>
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 text-2xl"
          >
            <p className="mb-6">{t("atext13")}</p>
            <p className="mb-6">{t("atext12")}</p>
          </motion.div>
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-row gap-20"
          >
            <AboutData end={dateDifference}>
              {t("atext2")} <br />
              {t("atext3")}
            </AboutData>
            <AboutData end={19}>{t("atext4")}</AboutData>
            <AboutData end={193}>{t("atext5")}</AboutData>
          </motion.div>
        </div>
      </Wrapper>
    </section>
  );
};

export default About;
