import { motion } from "framer-motion";
import { fadeIn } from "../../Variants";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <section id="Footer" className="py-40 pb-40 lg:section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* texto */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-center items-center"
          >
            <div>
              <h4 className="text-xl uppercase font-bold text-blue-500 mb-2 tracking-wide">
                {t("form")}
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                {t("ftext1")} <br />{" "}
                <span className="text-purple-500">{t("ftext2")}</span>
              </h2>
            </div>
          </motion.div>
          {/*form*/}
          <motion.form
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-6 p-6 items-start"
            name="contact"
            netlify
          >
            <input
              className="bg-transparent border-b py-3 outline-none w-full  placeholder:text-white focus:border-accent transition-all"
              type="text"
              placeholder={t("ftext3")}
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full  placeholder:text-white focus:border-accent transition-all"
              type="text"
              placeholder={t("ftext4")}
            />
            <textarea
              className="bg-transparent border-b py-12 outline-none w-full  placeholder:text-white focus:border-accent transition-all resize-none"
              placeholder={t("ftext5")}
            ></textarea>
            <div>
              <button className="btn btn-lg text-lg font-bold" type="submit">
                {t("ftext6")}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Footer;
