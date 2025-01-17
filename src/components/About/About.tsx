import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../../Variants";
import { useTranslation } from "react-i18next";
import Wrapper from "../wrapper/wrapper";

const About = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section
      id="About"
      className="flex items-center bg-gradient-to-b from-bgsecondary to-bgprimary"
      ref={ref}
    >
      <Wrapper>
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 font-bold text-accent">{t("about")}</h2>
            <h3 className="h3 mb-4">{t("atext")}</h3>
            <p className="mb-6">{t("atext1")}</p>
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={16} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  {t("atext2")} <br />
                  {t("atext3")}
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={20} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  {t("atext4")} <br />
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={25} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  {t("atext5")} <br />
                </div>
              </div>
            </div>
          </motion.div>
      </Wrapper>
    </section>
  );
};

export default About;
