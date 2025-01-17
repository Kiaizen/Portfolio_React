import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

i18n.use(initReactI18next).use(LanguageDetector).init({
  detection: {
    order: ['navigator', 'htmlTag', 'localStorage', 'cookie', 'sessionStorage', 'querystring', 'path', 'subdomain'],
  },

  // Fallback language if detection fails
  fallbackLng: 'en',
  resources: {
    en: {
      translation: {
        greeting: "Hello",
        intro: "I am a",
        welcome:
          "Welcome to my first portfolio, made using React, TypeScript and Tailwind, hope you like it!",
        about: "About me",
        atext:
          "I'm a Freelancer Front-end Dev with more than 16 months of experience",
        atext1:
          "I've always had an affinity with computers, and now i'm using that to my advantage for both work and leisure. I'm improving myself every day.",
        atext2: "Months of",
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
        form: 'Get in touch',
        ftext1: "Let's work",
        ftext2: 'together!',
        ftext3: 'Your name',
        ftext4: 'Your email',
        ftext5: 'Your message',
        ftext6: 'Send message'

        // Add other English translations here
      },
    },
    'pt-BR': {
      translation: {
        greeting: "Olá",
        intro: "Eu sou um",
        welcome:
          "Seja bem vindo ao meu primeiro portfólio, feito em React, TypeScript e Tailwind, espero que goste!",
        about: "Sobre mim",
        atext:
          "Sou um Freelance Front-end Dev com mais de 16 meses de experiência.",
        atext1:
          "Sempre tive afinidade com computadores e agora estou usando isso a meu favor para trabalho além do lazer, estou me aperfeiçoando a cada dia.",
        atext2: "Meses de",
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
        form: 'Entre em contato',
        ftext1: "Vamos trabalhar",
        ftext2: 'juntos!',
        ftext3: 'Seu nome',
        ftext4: 'Seu email',
        ftext5: 'Sua mensagem',
        ftext6: 'Enviar mensagem'
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