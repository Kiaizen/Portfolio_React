import { motion } from "framer-motion";
import { fadeIn } from "../../Variants";

const Footer = () => {
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
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h4 className="text-xl uppercase text-blue-500 font-medium mb-2 tracking-wide">
                Entre em contato
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Vamos trabalhar <br />{" "}
                <span className="text-purple-500">juntos!</span>
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
          >
            <input
              className="bg-transparent border-b py-3 outline-none w-full  placeholder:text-white focus:border-accent transition-all"
              type="text"
              placeholder="Seu nome"
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full  placeholder:text-white focus:border-accent transition-all"
              type="text"
              placeholder="Seu email"
            />
            <textarea
              className="bg-transparent border-b py-12 outline-none w-full  placeholder:text-white focus:border-accent transition-all resize-none"
              placeholder="Sua mensagem"
            ></textarea>
            <button className="btn btn-lg">Enviar mensagem</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Footer;
