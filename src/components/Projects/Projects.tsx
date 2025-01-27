import { motion } from "framer-motion";
import { fadeIn } from "../../Variants";
import Img2 from "../../assets/OpenWReact.webp";
import Img3 from "../../assets/firebase.png";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import Weather from "./Weather";
import { RealtimeDatabase } from "./FirebaseDB";
import Wrapper from "../wrapper/wrapper";
import ProjectBox from "./ProjectBox";
import PDescription from "./PDescription";

const Projects = () => {
  const [weatherToggle, setWeatherToggle] = useState(false);
  const [realTimeToggle, setRealTimeToggle] = useState(false);

  const { t } = useTranslation();

  return (
    <section
      className="bg-gradient-to-b from-bgprimary to-bgsecondary"
      id="Projects"
    >
      <Wrapper>
        <div className="flex flex-col  gap-10 items-start">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col"
          >
            <h2 className="h2 leading-tight font-bold text-accent">
              {t("projects")}
            </h2>
            <p className="text-2xl ">{t("ptext1")}</p>
          </motion.div>

          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            
          >
            <ProjectBox
              imgToggle={weatherToggle}
              setProjectState={setWeatherToggle}
              img={Img2}
              firstSpan="React"
              secondSpan="WeatherAPI"
            >
              <Weather onToggleProjectState={() => setWeatherToggle(false)} />
            </ProjectBox>
            <PDescription project="WeatherAPI" description="The Weather Forecast App is an interactive project that allows users to check real-time weather conditions for any city worldwide. Leverages the OpenWeather API to fetch weather data dynamically."/>
          </motion.div>
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
          >
            <ProjectBox
              imgToggle={realTimeToggle}
              setProjectState={setRealTimeToggle}
              img={Img3}
              firstSpan="React"
              secondSpan="Real Time Database"
            >
              <RealtimeDatabase
                onToggleProjectState={() => setRealTimeToggle(false)}
              />
            </ProjectBox>
          </motion.div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Projects;
