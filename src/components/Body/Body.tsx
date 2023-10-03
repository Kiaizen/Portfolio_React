import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../../Variants";

const Body = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section
      id="Sobre"
      className=" my-16 flex justify-self-start items-center"
      ref={ref}
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat  h-screen mix-blend-lighten bg-top"
          ></motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">Sobre mim</h2>
            <h3 className="h3 mb-4">
              Sou um Freelance Front-end Dev com mais de 6 meses de experiência.
            </h3>
            <p className="mb-6">
              Sempre tive afinidade com computadores e agora estou usando isso a
              meu favor para trabalho além do lazer, estou me aperfeiçoando a
              cada dia.
            </p>
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={6} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Meses de <br />
                  Experiência
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={2} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projetos <br />
                  
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={12} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Cursos <br />
                  
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Body;
