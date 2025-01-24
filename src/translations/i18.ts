import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    detection: {
      order: [
        "navigator",
        "htmlTag",
        "localStorage",
        "cookie",
        "sessionStorage",
        "querystring",
        "path",
        "subdomain",
      ],
    },

    // Fallback language if detection fails
    fallbackLng: "en",
    resources: {
      en: {
        translation: {
          header: "About",
          header1: "Projects",
          header2: "Contact",
          intro: "I am a",
          welcome:
            "Welcome to my first portfolio, made using React, TypeScript and Tailwind, hope you like it!",
          about: "About me",
          atext:
            "Life's daily hustle often makes us lose sight of what truly matters. But when we take a moment to reflect and embrace gratitude for simply being alive, we start planning for a more meaningful future. This mindset led me to pursue a new goal: building a solid career in the tech industry.",
          atext1:"I'm currently in my second semester of college and deeply committed to my studies in IT. My aim is not just to enter the job market but to stand out as a skilled and adaptable professional. I thrive on challenges and am always eager to learn and overcome any obstacles that come my way.",
          atext11:"My professional journey has provided me with valuable corporate experience. I worked at UFC for six years, took on gigs as a bartender, and also worked in an accounting office. These experiences helped me develop strong teamwork skills, the ability to work independently, and emotional intelligence, which I consider key to success.",
          atext12:"I have completed training in UX Design, agile methodologies, front-end development, and back-end development with a focus on JavaScript and Spring Boot. I prioritize writing clean, efficient, and scalable code, always following best practices in software development.",
          atext13:"I am passionate about learning and determined to succeed in my career as a developer. I'm ready to contribute to challenging projects and create solutions that make a positive impact.",
          atext2: "Years of",
          atext3: "Experience",
          atext4: "Projects",
          atext5: "Courses",
          projects: "My latest",
          ptext: "projects",
          ptext1:
            "I started by taking courses on Udemy in web development, where i learned the basics of HTML, CSS, and JS. Currently, i'm studying React.",
          ptext2: "View all projects",
          pwtext: "Your city",
          pwtext1: "Searching...",
          pwtext2: "Search",
          pwtext3: "Check the city and try again.",
          pwtext4: "City: ",
          pwtext5: "Temperature: ",
          pwtext6: "Back",
          form: "Get in touch",
          ftext1: "Let's work",
          ftext2: "together!",
          ftext3: "Your name",
          ftext4: "Your email",
          ftext5: "Your message",
          ftext6: "Send message",

          // Add other English translations here
        },
      },
      "pt-BR": {
        translation: {
          header: "Sobre",
          header1: "Projetos",
          header2: "Contato",
          intro: "Eu sou um",
          welcome:
            "Seja bem vindo ao meu primeiro portfólio, feito em React, TypeScript e Tailwind, espero que goste!",
          about: "Sobre mim",
          atext:
            "A vida, em sua correria cotidiana, muitas vezes nos faz perder de vista o que realmente importa. Mas, quando paramos para refletir e cultivamos gratidão por estarmos vivos, começamos a planejar um futuro mais significativo. Foi isso que me motivou a traçar um novo objetivo: construir uma carreira sólida na área de tecnologia.",
          atext1:
            "Atualmente, estou no segundo semestre da faculdade e me dedicando intensamente aos estudos em TI. Minha meta é não apenas ingressar no mercado, mas também me destacar como um profissional qualificado e adaptável. Adoro desafios e estou sempre pronto para aprender e superar qualquer obstáculo que surgir.",
          atext11:
            "Minha trajetória profissional me proporcionou uma rica experiência no ambiente corporativo. Trabalhei na UFC por seis anos, fiz bicos como barman e também atuei em um escritório de contabilidade. Essas vivências desenvolveram minha habilidade de trabalhar tanto em equipe quanto de forma independente, e inteligência emocional, que considero ser a chave para o sucesso.",
          atext12:
            "Tenho formação em UX Design, metodologias ágeis, desenvolvimento front-end e back-end, com foco em JavaScript e Spring Boot. Prezo por escrever códigos limpos, eficientes e escaláveis, sempre seguindo as melhores práticas de desenvolvimento.",
          atext13:
            "Sou apaixonado por aprender e determinado a alcançar o sucesso na minha carreira como desenvolvedor. Estou pronto para contribuir com projetos desafiadores e criar soluções que gerem impacto positivo.",
          atext2: "Anos de",
          atext3: "Experiência",
          atext4: "Projetos",
          atext5: "Cursos",
          projects: "Meus ultimos",
          ptext: "Projetos",
          ptext1:
            "Comecei fazendo cursos na Udemy de web moderno onde aprendi o básico sobre html,css e js. Agora estou estudando React.",
          ptext2: "Ver todos os projetos",
          pwtext: "Sua cidade",
          pwtext1: "Pesquisando...",
          pwtext2: "Pesquisar",
          pwtext3: "Verifique a cidade e tente novamente.",
          pwtext4: "Cidade: ",
          pwtext5: "Temperatura: ",
          pwtext6: "Voltar",
          form: "Entre em contato",
          ftext1: "Vamos trabalhar",
          ftext2: "juntos!",
          ftext3: "Seu nome",
          ftext4: "Seu email",
          ftext5: "Sua mensagem",
          ftext6: "Enviar mensagem",
          // Add other Portuguese translations here
        },
      },
      // Add more languages as needed
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
