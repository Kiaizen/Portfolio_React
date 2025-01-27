import { motion } from "framer-motion";
import { fadeIn } from "../../Variants";
import { useTranslation } from "react-i18next";
import Wrapper from "../wrapper/wrapper";
import { useState } from "react";
import { emailjsConfig } from "./EmailJSConfig";
import emailjs from "emailjs-com";

const Contact = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name:"",
    email:"",
    message:"",
  })

  const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name,value} = e.target;
    setFormData({...formData,[name]: value})
  }

  const handleSubmit = (e: React.FormEvent) =>{
    e.preventDefault();
    emailjs.send(emailjsConfig.serviceId,emailjsConfig.templateId,formData,emailjsConfig.publicKey).then(() => {
      alert(`Message send successfully`)
    },
    (error:string) => {
      alert(`Failed to send message.${error} Please try again`)
    }
  )
  }
  
  return (
    <section id="Contact" className="py-40 bg-gradient-to-b from-bgsecondary to-bgprimary">
      <Wrapper>
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
          <motion.form
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-6 p-6 items-start"
            onSubmit={handleSubmit}
          >
            <input
              className="bg-transparent border-b py-3 outline-none w-full  placeholder:text-white focus:border-accent transition-all"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={t("ftext3")}
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full  placeholder:text-white focus:border-accent transition-all"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t("ftext4")}
            />
            <textarea
              className="bg-transparent border-b py-12 outline-none w-full  placeholder:text-white focus:border-accent transition-all resize-none"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={t("ftext5")}
            ></textarea>
            <div>
              <button className="btn btn-lg text-lg font-bold" type="submit">
                {t("ftext6")}
              </button>
            </div>
          </motion.form>
        </Wrapper>
    </section>
  );
};

export default Contact;
