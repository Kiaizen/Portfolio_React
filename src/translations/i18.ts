// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          greeting: 'Hello',
          header: "I am a",
          welcome: 'Hello world! Welcome to my first portfolio, made using React, TypeScript and Tailwind, hope you like it!',
          about:'About me',
          atext: "I'm a Freelancer Front-end Dev with more than 6 months of experience",
          atext1:"I've always had an affinity with computers, and now i'm using that to my advantage for both work and leisure. I'm improving myself every day.",
          atext2: 'Months of',
          atext3: 'Experience',
          atext4: 'Projects',
          atext5: 'Courses',
          projects:'My lastest',
          ptext: 'projects',
          ptext1: 'I started by taking courses on Udemy in modern web development, where i learned the basics of HTML, CSS, and JS. Currently, i am studying React on Udemy as well.',
          ptext2: 'View all projects',

          // Add other English translations here
        },
      },
      br: {
        translation: {
          greeting: 'Olá',
          header: 'Eu sou um',
          welcome: 'Olá mundo! Seja bem vindo ao meu primeiro portfólio,feito em React, TypeScript e tailwind, espero que goste!',
          about:'Sobre mim',
          atext:'Sou um Freelance Front-end Dev com mais de 6 meses de experiência.',
          atext1:'Sempre tive afinidade com computadores e agora estou usando isso a meu favor para trabalho além do lazer, estou me aperfeiçoando a cada dia.',
          atext2:'Meses de',
          atext3:'Experiência',
          atext4: 'Projetos',
          atext5: 'Cursos',
          projects:'Meus ultimos',
          ptext:'Projetos',
          ptext1: 'Comecei fazendo cursos na Udemy de web moderno onde aprendi o básico sobre html,css e js. Agora estou estudando React pela Udemy também.',
          ptext2: 'Ver todos os projetos',
          // Add other Portuguese translations here
        },
      },
      // Add more languages as needed
    },
    lng: 'en', // Default language
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
