import { motion } from "framer-motion";
import { fadeIn } from "../../Variants";
import Img1 from "../../assets/portfolio-img1.png";
import Img2 from "../../assets/portfolio-img2.png";
import Img3 from "../../assets/portfolio-img3.png";

const Projetos = () => {
  return (
    <section className="section" id="Projetos">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10 items-center">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10"
          >
            {/* text */}
            <div className=" my-4">
              <h2 className="h2 leading-tight text-accent">
                Meus ultimos <br />
                projetos.
              </h2>
              <p className=" max-w-sm mb-6">
                Comecei fazendo cursos na Udemy de web moderno onde aprendi o básico sobre html,css e js. Agora estou estudando React pela Udemy também.
              </p>
              <button className="btn btn-sm">Ver todos os projetos</button>
            </div>
            {/* image */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl w-11/12 mb-4">
              {/* Overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img1}
                alt="First project"
              />
              {/* pretittle */}
              <div className="absolute bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">React</span>
              </div>
              {/* tittle */}
              <div className="absolute bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Food Store</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-8"
          >
            {/* image */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl w-11/12">
              {/* Overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img2}
                alt="second project"
              />
              {/* pretittle */}
              <div className="absolute bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">React</span>
              </div>
              {/* tittle */}
              <div className="absolute bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Project Title</span>
              </div>
            </div>
            {/* image */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl w-11/12">
              {/* Overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img3}
                alt="Third project"
              />
              {/* pretittle */}
              <div className="absolute bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">React</span>
              </div>
              {/* tittle */}
              <div className="absolute bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Project Title</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projetos;
